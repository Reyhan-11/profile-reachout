import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy text-center mb-8">Our Profile</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-navy">About Our Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We are a leading technology company committed to delivering innovative solutions 
                  that help businesses grow and succeed in the digital age. Our team of experienced 
                  professionals brings expertise across various domains to serve our clients better.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-navy">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses through cutting-edge technology solutions, providing 
                  exceptional service and fostering long-term partnerships that drive mutual success 
                  and innovation in the global marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-navy">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted technology partner, recognized for our commitment to 
                  excellence, innovation, and creating positive impact in the communities we serve 
                  worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-navy">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Innovation and Creativity</li>
                  <li>• Integrity and Transparency</li>
                  <li>• Customer-Centric Approach</li>
                  <li>• Continuous Learning</li>
                  <li>• Teamwork and Collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;