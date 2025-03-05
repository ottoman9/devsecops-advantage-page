
const logos = [
  { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
];

const TrustedBy = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've collaborated with industry leaders to optimize their DevOps and security practices.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <img 
                src={logo.logo} 
                alt={logo.name} 
                className="h-12 md:h-14 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
