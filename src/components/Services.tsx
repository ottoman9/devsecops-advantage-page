
import { 
  GitMerge, Shield, Cloud, BarChart, HardDrive, Package2
} from "lucide-react";

const services = [
  {
    icon: <GitMerge className="h-10 w-10" />,
    title: "CI/CD Automation",
    description: "Accelerate your development lifecycle with automated pipelines."
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Infrastructure Management",
    description: "Scalable and secure AWS solutions tailored to your business needs."
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Security Hardening",
    description: "Protect your applications and data with advanced DevSecOps practices."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Monitoring & Logging",
    description: "Stay ahead with real-time insights and analytics for your infrastructure."
  },
  {
    icon: <HardDrive className="h-10 w-10" />,
    title: "Disaster Recovery",
    description: "Robust backup and recovery solutions to keep your business running."
  },
  {
    icon: <Package2 className="h-10 w-10" />,
    title: "Containerization & Orchestration",
    description: "Enhance efficiency with Docker and Kubernetes implementations."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium mb-6">
            What I Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comprehensive DevOps & DevSecOps Solutions
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Whatever your DevOps or DevSecOps needs, I've got you covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-8 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
