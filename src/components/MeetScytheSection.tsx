import { Button } from "@/components/ui/button";
import { Globe, Target } from "lucide-react";

const MeetScytheSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">JF</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-night-blue">Jordan Fleming</h3>
                  <p className="text-night-blue/70">CEO & Lead Trader</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <div className="text-2xl font-bold text-green-500 mb-1">+813%</div>
                  <div className="text-night-blue/60 text-sm">2021 Return</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <div className="text-2xl font-bold text-red-500 mb-1">-6.8%</div>
                  <div className="text-night-blue/60 text-sm">2022 Drawdown</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6">
                Meet Scythe Capital
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
            </div>
            
            <p className="font-inter text-lg text-night-blue/80 leading-relaxed">
              Founded by <strong>Jordan Fleming</strong>, a results-driven executive with global expertise across Dubai, London, and Sydney. Scythe Capital combines operational excellence with advanced trading infrastructure to deliver sustainable alpha in cryptocurrency markets.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">Global</h4>
                  <p className="text-night-blue/70">Cross-market expertise across major financial hubs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">Precision</h4>
                  <p className="text-night-blue/70">Mathematical approach to market inefficiencies</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6">
              <h3 className="font-playfair text-xl font-bold text-night-blue mb-4">Our Edge</h3>
              <p className="text-night-blue/80 leading-relaxed mb-4">
                What sets Scythe Capital apart is our <strong>adaptive trading framework</strong> that thrives in any market condition. While 2021's +813% return showcased our ability to capitalize on bull markets, our -6.8% drawdown during 2022's crypto collapse—when Bitcoin fell 64%—demonstrates our superior capital preservation.
              </p>
              <p className="text-night-blue/80 leading-relaxed">
                This resilience enabled our strong 2023 rebound (+163%), proving our multi-layered strategy works across complete market cycles.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="default" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-night-blue hover:bg-primary/10">
                View Performance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetScytheSection;