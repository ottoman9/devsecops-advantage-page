
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Etisalat",
    about: "A telecom platform integrating mobile, TV, and digital products.",
    did: "Managed large-scale cloud infrastructure, engineered CI/CD pipelines, and automated deployments using Bamboo, Docker, and CircleCI.",
    impact: "Reduced deployment times by 50%, enhanced infrastructure security, and achieved seamless integration of services, boosting operational efficiency.",
    bgClass: "bg-gradient-to-br from-blue-900/30 to-purple-900/30"
  },
  {
    title: "Carbonite",
    about: "A cybersecurity product by Opentext, designed to secure personal and business data.",
    did: "Implemented advanced security practices, managed backend deployments, and ensured regulatory compliance using Linux, NGINX, and Docker.",
    impact: "Improved data security, ensured compliance, and enhanced product stability, contributing to greater client trust.",
    bgClass: "bg-gradient-to-br from-green-900/30 to-teal-900/30"
  },
  {
    title: "Chronicle",
    about: "A SaaS presentation tool enabling users to create interactive stories.",
    did: "Automated CI/CD processes and optimized system performance through advanced cloud management.",
    impact: "Enhanced platform stability, allowing users to build and share presentations with improved speed and reliability.",
    bgClass: "bg-gradient-to-br from-orange-900/30 to-red-900/30"
  },
  {
    title: "Waveback",
    about: "A social platform connecting users based on shared activity interests.",
    did: "Developed features that improved user engagement and facilitated smooth interactions within the community.",
    impact: "Contributed to increased platform adoption and enhanced community connections.",
    bgClass: "bg-gradient-to-br from-purple-900/30 to-pink-900/30"
  },
  {
    title: "Improve the News",
    about: "A platform designed to enhance news consumption through personalized recommendations and diverse perspectives.",
    did: "Developed and optimized the platform for better user engagement and seamless content delivery.",
    impact: "Increased user retention by improving content accessibility and recommendation accuracy.",
    bgClass: "bg-gradient-to-br from-cyan-900/30 to-blue-900/30"
  }
];

const CaseStudies = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Real-World Impact Through DevOps & DevSecOps
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore how I've helped businesses transform and thrive with advanced cloud solutions and automation. Here are some of my standout projects that demonstrate my expertise and the tangible results delivered to my clients.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies List */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden relative animate-fade-in ${study.bgClass}`}
                style={{ animationDelay: `${100 * index}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                  <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">{study.title}</h2>
                    <div className="h-1 w-16 bg-white/30 mb-6"></div>
                  </div>
                  
                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white/90 mb-2">What It's About</h3>
                      <p className="text-white/70">{study.about}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white/90 mb-2">What I Did</h3>
                      <p className="text-white/70">{study.did}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white/90 mb-2">Business Impact</h3>
                      <p className="text-white/70">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              If you're looking for tailored DevOps & DevSecOps solutions to drive your business forward, I'm here to help. Let's discuss how my expertise can make a difference.
            </p>
            
            <a 
              href="#contact" 
              className="bg-white hover:bg-white/90 text-black font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Schedule a Free Consultation today!
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default CaseStudies;
