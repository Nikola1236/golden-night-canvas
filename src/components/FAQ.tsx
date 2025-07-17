import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the minimum capital required to start?",
    answer: "We recommend a minimum capital of $25,000 for optimal results. However, it's possible to start with $10,000 to test strategies in conservative mode. Our system automatically adapts to your available budget."
  },
  {
    question: "Do the strategies work across all markets?",
    answer: "Yes, our strategies are designed to operate on Crypto, Forex, Indices, Commodities, and Stocks. Each algorithm automatically adapts to the specific characteristics of every market and timeframe."
  },
  {
    question: "How much time do I need to dedicate daily?",
    answer: "The system is fully automated. Once configured, it requires only 5-10 minutes daily for monitoring. You'll receive real-time notifications for the most important operations."
  },
  {
    question: "How is risk managed?",
    answer: "We use a multi-level risk management system with dynamic stop losses, automatic position sizing, and correlation control. Maximum risk per trade is limited to 2% of capital."
  },
  {
    question: "Can I use the system with multiple brokers?",
    answer: "Absolutely. Our system is compatible with 50+ brokers including MetaTrader 4/5, cTrader, TradingView, and major crypto platforms. Setup takes just minutes."
  },
  {
    question: "What type of support do you offer?",
    answer: "We offer 24/7 support via chat, email, and phone. Plus, you get access to weekly webinars, a private trader community, and personalized coaching sessions."
  },
  {
    question: "Are there any performance guarantees?",
    answer: "We offer a full 30-day money-back guarantee if you're not satisfied. Past results don't guarantee future performance, but our transparency on historical results lets you evaluate independently."
  },
  {
    question: "Is trading experience necessary?",
    answer: "No, the system is designed for both beginners and experts. We provide complete training and the software includes educational mode with detailed explanations of every trading decision."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to start your professional trading journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gold/20 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gold hover:text-gold-light transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;