import { useState } from "react";
import { Download, Mail, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FreePDFSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate email collection
    toast({
      title: "Success!",
      description: "Check your email for the free trading guide download link.",
    });
    
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section id="free-pdf" className="py-20 bg-gradient-to-br from-gold/5 to-gold/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gold/10 border border-gold/20 mb-6">
              <FileText className="h-8 w-8 text-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Free <span className="text-gradient">Trading Guide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our comprehensive beginner&apos;s guide to professional trading strategies. 
              Learn the fundamentals that professional traders use daily.
            </p>
          </div>

          {/* PDF Preview Card */}
          <div className="glass-card p-8 rounded-2xl mb-12 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  &quot;Professional Trading Fundamentals&quot;
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Risk Management Basics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Technical Analysis Foundations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Market Psychology Insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>Platform Setup Guide</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 p-8 rounded-xl border border-gold/20">
                  <FileText className="h-24 w-24 text-gold mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Pages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Form */}
          {!isSubmitted ? (
            <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 text-left">
                    Enter your email to download *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="pl-10 bg-background/50 border-gold/20 focus:border-gold"
                    />
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full bg-gold text-navy hover:bg-gold-light pulse-gold"
                  onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          ) : (
            <div className="glass-card p-8 rounded-2xl max-w-md mx-auto text-center">
              <CheckCircle className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Check Your Email!</h3>
              <p className="text-muted-foreground">
                We&apos;ve sent you the download link for your free trading guide.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FreePDFSection;