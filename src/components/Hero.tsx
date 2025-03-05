
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-background to-accent pt-20">
      {/* Background elements - decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDAgaDYwIHY2MCBIMHoiLz48L2c+PC9zdmc+')] opacity-5"></div>
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
              <span>DevOps & DevSecOps Expertise for Your Business</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight animate-slide-down" style={{ animationDelay: "100ms" }}>
              Streamline Your Business with Cutting-Edge DevOps & DevSecOps Solutions
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl animate-slide-down" style={{ animationDelay: "200ms" }}>
              I specialize in delivering robust, secure, and efficient cloud solutions on AWS, helping businesses optimize their operations and scale with confidence.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4 animate-slide-down" style={{ animationDelay: "300ms" }}>
              <a href="#contact" className="group cta-button inline-flex items-center gap-2">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-60 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
                alt="DevOps expert collaborating with business owner" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
