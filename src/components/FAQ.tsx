import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Laminar Trading different from other courses?",
    answer: "Laminar teaches real algorithmic strategies used by professional fund managers. Our approach combines quantitative analysis, order flow understanding, and risk management techniques that delivered +35,660% returns since 2020. You'll learn the same systematic frameworks used by institutional traders, not just basic technical analysis."
  },
  {
    question: "What strategies will I learn in the course?",
    answer: "The course covers our complete trading framework: Intraday algorithmic strategies for short-term gains, Swing trading with quantitative edge detection, Options strategies for volatility monetization, Delta-neutral approaches for market-neutral profits, Order flow analysis using proprietary tools, and Advanced risk management with position sizing algorithms. Each strategy is backed by real performance data and includes detailed implementation guides."
  },
  {
    question: "What results can I expect and how long does it take?",
    answer: "Results depend on your dedication and capital. Our systematic approach has delivered a Sharpe Ratio of 1.66 and maintained profitability across different market conditions. Students typically see improvement in trade quality within 2-3 months of consistent application. The complete course can be completed in 4-6 weeks, but mastery requires ongoing practice and refinement."
  },
  {
    question: "Do I need previous trading experience?",
    answer: "While basic market knowledge helps, the course is designed to take you from fundamentals to advanced strategies. We cover market structure, order types, and platform usage before diving into algorithmic approaches. Complete beginners should expect to spend extra time on foundational concepts, while experienced traders can focus on the advanced systematic frameworks."
  },
  {
    question: "What tools and capital do I need to start?",
    answer: "You'll need access to a trading platform (we provide recommendations), basic charting software, and starting capital appropriate for your risk tolerance. The strategies can be scaled from small accounts to larger portfolios. We recommend starting with at least $5,000 to properly implement risk management, though paper trading is encouraged initially."
  },
  {
    question: "Is there ongoing support after the course?",
    answer: "Yes, course access includes entry to our exclusive community where students share insights, ask questions, and receive ongoing guidance. You'll also get updates to strategies and access to new content as markets evolve. The community aspect is crucial for long-term success and continuous learning."
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