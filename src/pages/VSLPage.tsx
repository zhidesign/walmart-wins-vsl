import React from 'react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '@/components/VideoPlayer';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { ArrowDown, Star, TrendingUp, DollarSign, Clock } from 'lucide-react';
import heroImage from '@/assets/walmart-success-hero.jpg';

const VSLPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Walmart Success" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Pre-headline */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              For Action-Takers Ready To Build A Proven Walmart Business
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            You're One Step Away From Learning How To Build A{' '}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              $15,000/Month Walmart Business
            </span>{' '}
            In <span className="italic">90 Days Or Less.</span>{' '}
            <span className="underline decoration-primary decoration-4">GUARANTEED</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            The best part is... if you don't hit <strong>$15K/month</strong>,{' '}
            <span className="text-primary font-bold underline">you don't pay a dime</span>
          </p>
          
          {/* Video Section */}
          <div className="mb-16">
            <VideoPlayer
              title="Watch This Exclusive Training"
              description="Discover the exact system that's helped 500+ students build profitable Walmart businesses"
            />
          </div>
          
          {/* CTA Section */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              WANT ACCESS?
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button variant="warning" className="text-xl px-8 py-4 animate-pulse">
                WARNING: LAZY PEOPLE WILL HATE THIS
              </Button>
            </div>
          </div>
          
          {/* Arrow pointing down */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>
      </section>
      
      {/* Lead Capture Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits Column */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                What You'll Get Inside:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">The Walmart Profit Blueprint</h4>
                    <p className="text-muted-foreground">
                      Step-by-step system to identify winning products and scale to $15K+/month
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Zero-to-Hero Launch Strategy</h4>
                    <p className="text-muted-foreground">
                      How to start with $0 and build a profitable business in 90 days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Done-For-You Templates</h4>
                    <p className="text-muted-foreground">
                      Product listings, supplier scripts, and optimization tools included
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-2">
                  🎯 BONUS: Private Mastermind Access
                </h4>
                <p className="text-muted-foreground">
                  Join our exclusive community of successful Walmart sellers (Value: $2,997)
                </p>
              </div>
            </div>
            
            {/* Form Column */}
            <div>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Join 500+ Students Already Building Their Walmart Empire
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm mb-4">
                "Went from $0 to $18K/month in just 2 months using this system!"
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm mb-4">
                "Finally quit my 9-5! Now making $25K/month with Walmart FBA."
              </p>
              <p className="font-semibold">- Mike T.</p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm mb-4">
                "The templates alone saved me 6 months of trial and error!"
              </p>
              <p className="font-semibold">- Jennifer L.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" className="text-xl px-12 py-6">
              YES! I Want The Blueprint Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Limited time offer - Normally $997, yours FREE today
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/20">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-4">
            © 2024 Walmart Business Mastery. All rights reserved.
          </p>
          <p>
            Disclaimer: Results may vary. This is not a get-rich-quick scheme. 
            Success requires dedication and following the proven system.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VSLPage;