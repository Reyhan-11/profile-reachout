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
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Hi Harfi, Welcome To Website
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ini adalah website latihan pertama
          </p>
          <div className="text-sm text-gray-500">
            1360×570
          </div>
        </div>
      </section>

      {/* Our Headquarter Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Headquarter</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { city: "Jakarta", icon: "🏢" },
              { city: "Bandung", icon: "🏔️" },
              { city: "Surabaya", icon: "🌊" }
            ].map((location, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white shadow-card">
                  <span className="text-4xl">{location.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy">{location.city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="flex justify-center">
              <ContactForm />
            </div>
            
            {/* Information Panel */}
            <div className="flex items-start">
              <Card className="w-full shadow-card">
                <CardContent className="p-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-navy mb-3">Current Information</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Current time:</strong> {currentTime}</p>
                      <p><strong>Name:</strong> Harfi Novan</p>
                      <p><strong>Birth Date:</strong> 01/11/1995</p>
                      <p><strong>Gender:</strong> Male</p>
                      <p><strong>Message:</strong> Learning to create a website</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-navy mb-3">Quick Actions</h4>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/profile">
                          <span className="mr-2">👥</span>
                          Learn About Us
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/portfolio">
                          <span className="mr-2">💼</span>
                          View Our Work
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/contact">
                          <span className="mr-2">📞</span>
                          Contact Details
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
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">Created By Revo.id</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
