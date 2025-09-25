import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const currentTime = new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
              Hi Harfi, Welcome To
              <span className="block text-transparent bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text">
                Our Website
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover innovation and excellence through our professional services and creative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-cta hover-glow text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-full text-lg border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-brand-primary/20 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-brand-accent/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-brand-secondary/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '4s'}}></div>
        </div>
      </section>

      {/* Our Headquarter Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategically located across Indonesia's major cities to serve you better
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                city: "Jakarta", 
                icon: "🏢", 
                description: "Capital Hub",
                color: "from-blue-500 to-purple-600"
              },
              { 
                city: "Bandung", 
                icon: "🏔️", 
                description: "Creative Center",
                color: "from-green-500 to-teal-600"
              },
              { 
                city: "Surabaya", 
                icon: "🌊", 
                description: "Innovation Port",
                color: "from-orange-500 to-red-600"
              }
            ].map((location, index) => (
              <div key={index} className="text-center group animate-scale-in hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl relative">{location.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy group-hover:text-brand-primary transition-colors duration-300">{location.city}</h3>
                <p className="text-gray-600 mt-2 font-medium">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            {/* Contact Form */}
            <div className="flex justify-center animate-fade-in-up">
              <ContactForm />
            </div>
            
            {/* Information Panel */}
            <div className="flex items-start animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="w-full shadow-card hover-lift border-0 bg-gradient-card backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="gradient-subtle p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                      <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                      Live Information
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-center"><strong className="text-navy w-24">Time:</strong> <span className="text-brand-primary font-mono">{currentTime}</span></p>
                      <p className="flex items-center"><strong className="text-navy w-24">Name:</strong> Harfi Novan</p>
                      <p className="flex items-center"><strong className="text-navy w-24">Born:</strong> 01/11/1995</p>
                      <p className="flex items-center"><strong className="text-navy w-24">Gender:</strong> Male</p>
                      <p className="flex items-start"><strong className="text-navy w-24">Goal:</strong> <span className="italic">Learning to create a website</span></p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Quick Navigation
                    </h4>
                    <div className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start h-12 rounded-xl border-2 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300">
                        <Link to="/profile">
                          <span className="mr-3 text-lg">👥</span>
                          <span className="font-medium">Learn About Us</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start h-12 rounded-xl border-2 hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300">
                        <Link to="/portfolio">
                          <span className="mr-3 text-lg">💼</span>
                          <span className="font-medium">View Our Work</span>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start h-12 rounded-xl border-2 hover:border-brand-secondary hover:bg-brand-secondary/5 transition-all duration-300">
                        <Link to="/contact">
                          <span className="mr-3 text-lg">📞</span>
                          <span className="font-medium">Contact Details</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-overlay text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">My Website</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Crafting exceptional digital experiences with passion and precision
              </p>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/60 text-sm">
                © 2024 Created By <span className="text-brand-accent font-semibold">Revo.id</span> | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
