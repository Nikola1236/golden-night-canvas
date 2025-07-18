import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the investment strategy and edge?",
    answer: "Laminar's edge lies in a diverse, adaptive trading framework: Intraday Trading exploits short-term price movements for frequent, nimble gains. Swing Trading captures medium-term trends over several days or weeks. Options Trading adds convexity to the portfolio through volatility-driven setups and strategic hedging. Delta-Neutral Strategies are designed to reduce directional exposure and monetize market inefficiencies using a mix of spot, futures, and options. This multi-layered strategy stack allows Laminar to generate returns in both bullish and bearish markets. Our operational advantage comes from a proprietary low-latency trading terminal built for advanced discretionary trading, priority access to premium exchange data feeds not available to most market participants, and five years of refinement in order flow analytics and derivatives modeling, enabling smarter trade positioning and superior edge retention."
  },
  {
    question: "What are the fund's historical performance and risk metrics?",
    answer: "Since inception, Laminar Capital has delivered a cumulative return of +35,660.7%, compared to +1,337.5% for Bitcoin over the same period. Annual returns: 2020: +230%, 2021: +813%, 2022: -6.8% (managed losses during market-wide collapse), 2023: +163%, 2024: +124%, 2025 YTD: +155%. Key fund metrics (2020–2025 YTD): Sharpe Ratio: 1.66 (superior to industry standard of 1.0), Sortino Ratio: 8.82 (exceptional downside protection), Calmar Ratio: 2.03 (excellent vs drawdown), Alpha: 2.66 (significant alpha vs BTC), Beta: 0.37 (low correlation to BTC volatility). Past performance doesn't guarantee future returns."
  },
  {
    question: "Who are the key team members and what is their track record?",
    answer: "Founder/Trader: Enio J is a top-tier quantitative trader with a performance track record few in the industry can match. Ranked #67 on the FTX leaderboard in 2022, delivered +48,193% return on personal capital since 2020, with deep specialization in crypto derivatives, market structure, and execution. His leadership and strategy form the foundation of Laminar Capital's edge. COO: Jordan F (TBA)."
  },
  {
    question: "What are the terms and fees?",
    answer: "Minimum investment: $100,000 (crypto accepted). Fees: 2% management + 20% performance. Liquidity: Quarterly withdrawals, 1-year lock-up. Current AUM: $68 million and growing. Investor access: By invitation, via Telegram @enio10k. Laminar maintains a selective capital base to ensure strategic alignment with long-term goals."
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