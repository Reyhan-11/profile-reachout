import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-navy text-center mb-12">Get In Touch</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="flex justify-center">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-navy">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <p className="font-medium text-navy">Email</p>
                      <p className="text-gray-600">contact@mywebsite.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <p className="font-medium text-navy">Phone</p>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <p className="font-medium text-navy">Address</p>
                      <p className="text-gray-600">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-navy">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium text-navy">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium text-navy">Saturday:</span> 9:00 AM - 2:00 PM</p>
                    <p><span className="font-medium text-navy">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;