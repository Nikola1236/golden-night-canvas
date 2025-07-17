import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What's the minimum capital required to start?",
      answer: "Our strategies are designed for professional traders with a minimum capital requirement of $10,000. This ensures sufficient risk management and position sizing flexibility."
    },
    {
      question: "Do the strategies work across all markets?",
      answer: "Yes, our adaptive framework works across cryptocurrency, forex, and traditional markets. The algorithms automatically adjust to market conditions and volatility patterns."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "Our strategies are fully automated. You can monitor performance through our dashboard, but active daily management is not required. Most professionals spend 15-30 minutes daily reviewing positions."
    },
    {
      question: "How is risk managed?",
      answer: "We employ multi-layered risk management including dynamic stop losses, position sizing algorithms, correlation filtering, and real-time volatility adjustments."
    },
    {
      question: "Can I use the system with multiple brokers?",
      answer: "Yes, our platform integrates with 15+ major exchanges and brokers. You can diversify execution across multiple venues for optimal liquidity and reduced slippage."
    },
    {
      question: "What type of support do you offer?",
      answer: "We provide 24/7 technical support, weekly strategy reviews, and direct access to our trading team. Professional clients also receive personalized consultation sessions."
    },
    {
      question: "Are there any performance guarantees?",
      answer: "While we cannot guarantee future performance, our track record speaks for itself. We provide transparent reporting and risk-adjusted return metrics for full accountability."
    },
    {
      question: "Is trading experience necessary?",
      answer: "While basic trading knowledge is helpful, our automated systems handle execution. We provide comprehensive training and ongoing education for all skill levels."
    }
  ];

  return (
    <section className="py-20 bg-cream" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-xl text-night-blue/70">
            Everything you need to know to start your professional trading journey
          </p>
        </div>
        
        <div className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] gradient-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-effect rounded-xl px-6 data-[state=open]:bg-primary/5 hover-lift transition-all duration-300 border border-primary/20 data-[state=open]:border-primary/40 group"
              >
                <AccordionTrigger className="text-left font-semibold text-night-blue hover:text-primary transition-colors duration-300 group-hover:scale-[1.02]">
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-night-blue/70 leading-relaxed pt-2 animate-slide-up">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-night-blue/60 mb-4">Can't find the answer you're looking for?</p>
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/80 font-semibold transition-all duration-300 relative group"
          >
            <span className="relative z-10">Contact us directly →</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;