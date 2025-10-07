import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hotel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury hotel lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-wider text-sm font-semibold">
              Book the vibe, not just the place
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Stay & Dine
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Discover personalized hotel and restaurant experiences crafted by AI
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex gap-2 p-2 bg-card rounded-2xl shadow-premium">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search hotels, restaurants, or experiences..." 
                  className="pl-12 h-14 border-0 bg-transparent text-base focus-visible:ring-0"
                />
              </div>
              <Button variant="hero" size="lg" className="h-14 px-8">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link to="/discover">
              <Button variant="premium" size="lg">
                Explore Now
              </Button>
            </Link>
            <Link to="/ai-chat">
              <Button variant="hero" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Try AI Concierge
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm border-accent/20 hover:bg-card/80">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Hospitality Reimagined
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered personalization meets luxury booking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Curator</h3>
              <p className="text-muted-foreground">
                Get personalized hotel and dining itineraries based on your mood, budget, and preferences
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Experiences</h3>
              <p className="text-muted-foreground">
                Explore curated hotels and restaurants that match your style and vibe
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loyalty Rewards</h3>
              <p className="text-muted-foreground">
                Earn StayPoints and DineCoins for every booking, review, and referral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Experience?
          </h2>
          <p className="text-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands who've discovered their perfect stay and dine moments
          </p>
          <Link to="/auth">
            <Button variant="hero" size="lg" className="text-lg h-14 px-10">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
