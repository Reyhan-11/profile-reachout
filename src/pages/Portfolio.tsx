import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features for online retail businesses.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Firebase", "Blockchain"],
      status: "In Progress"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for hospitals and clinics.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      status: "Completed"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence dashboard with machine learning insights and predictive analytics.",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-navy text-center mb-8">Our Portfolio</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-form transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-navy text-lg">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : 
                               project.status === "In Progress" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;