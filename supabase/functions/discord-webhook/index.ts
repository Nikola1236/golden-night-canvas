import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { fullName, email, phone, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save to database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([{
        full_name: fullName,
        email: email,
        phone: phone || null,
        message: message
      }]);

    if (dbError) {
      console.error('Database error:', dbError);
      console.error('Full database error details:', JSON.stringify(dbError, null, 2));
      throw new Error(`Failed to save to database: ${dbError.message || 'Unknown error'}`);
    }

    // Send to Discord
    const discordWebhookUrl = Deno.env.get('DISCORD_WEBHOOK_URL');
    
    if (discordWebhookUrl) {
      const embed = {
        title: "📩 New Contact Message",
        color: 0x0099ff,
        fields: [
          {
            name: "👤 Name",
            value: fullName,
            inline: true
          },
          {
            name: "📧 Email",
            value: email,
            inline: true
          }
        ],
        timestamp: new Date().toISOString()
      };

      if (phone) {
        embed.fields.push({
          name: "📱 Phone",
          value: phone,
          inline: true
        });
      }

      embed.fields.push({
        name: "💬 Message",
        value: message.length > 1024 ? message.substring(0, 1021) + "..." : message,
        inline: false
      });

      const discordPayload = {
        content: "🔔 **New contact received!**",
        embeds: [embed]
      };

      const discordResponse = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload),
      });

      if (!discordResponse.ok) {
        console.error('Discord webhook error:', await discordResponse.text());
        // Don't fail the entire request if Discord fails
      } else {
        console.log('Message sent to Discord successfully');
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message saved and sent successfully' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in discord-webhook function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);