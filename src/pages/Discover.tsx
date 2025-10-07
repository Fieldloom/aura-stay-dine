import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Star, Sparkles, Hotel, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import hotelImage from "@/assets/hotel-sapphire.jpg";
import restaurantImage from "@/assets/restaurant-ocean.jpg";

const Discover = () => {
  const featured = [
    {
      id: 1,
      type: "hotel",
      title: "The Sapphire Bay Resort",
      location: "Maldives",
      rating: 4.9,
      reviews: 328,
      price: "$450/night",
      image: hotelImage,
      tags: ["Luxury", "Beach", "Spa"],
    },
    {
      id: 2,
      type: "restaurant",
      title: "Ocean's Edge Dining",
      location: "Miami Beach",
      rating: 4.8,
      reviews: 542,
      price: "$$$",
      image: restaurantImage,
      tags: ["Seafood", "Fine Dining", "Ocean View"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-bold text-xl">Stay & Dine</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="premium">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">Discover Your Next Experience</h1>
            <p className="text-muted-foreground text-lg">
              Find the perfect stay or dining experience curated just for you
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex gap-2 p-2 bg-card rounded-2xl shadow-lg">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search destination, hotel, or restaurant..." 
                className="pl-12 h-12 border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
            <Button variant="premium" size="lg" className="h-12">
              Search
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              <Hotel className="w-4 h-4 mr-2" />
              Hotels
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              Restaurants
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Recommendations
            </Badge>
          </div>
        </div>
      </section>

      {/* AI Curator Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-primary to-navy-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Let AI Craft Your Perfect Day
              </h3>
              <p className="text-foreground/80">
                Personalized itineraries based on your preferences and mood
              </p>
            </div>
            <Button variant="hero" size="lg" className="shrink-0">
              Try AI Curator
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Experiences</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featured.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {item.type === "hotel" ? <Hotel className="w-3 h-3 mr-1" /> : <UtensilsCrossed className="w-3 h-3 mr-1" />}
                    {item.type === "hotel" ? "Hotel" : "Restaurant"}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{item.rating}</span>
                      <span className="text-muted-foreground text-sm">({item.reviews} reviews)</span>
                    </div>
                    <span className="font-semibold text-accent">{item.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="premium" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-bold text-xl">Stay & Dine</span>
          </div>
          <p className="text-muted-foreground">
            Book the vibe, not just the place.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Discover;
