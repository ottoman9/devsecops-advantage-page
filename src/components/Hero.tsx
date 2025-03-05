
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      <div className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium tracking-wide animate-slide-down">
              <span>DevOps & DevSecOps Expertise for Your Business</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight animate-slide-down" style={{ animationDelay: "100ms" }}>
              Streamline Your Business with Cutting-Edge DevOps Solutions
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
            <div className="relative rounded-2xl overflow-hidden shadow-md">
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
    </section>
  );
};

export default Hero;
