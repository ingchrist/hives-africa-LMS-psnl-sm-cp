export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-[164px] py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Building the Future of{" "}
            <span className="text-transparent bg-gradient-to-r from-primary-accent to-primary-logoText bg-clip-text">
              Technology
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-navText mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to HACKRIFT - Your premier destination for cutting-edge
            technology solutions, innovative hacking labs, and groundbreaking
            products that shape tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary-accent text-primary-dark font-circular font-semibold text-lg rounded-lg hover:bg-primary-accent/90 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-primary-navText text-primary-navText font-circular font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-8 lg:px-[164px] py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-primary-background/50 border border-primary-border rounded-lg p-8 hover:bg-primary-background/70 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-accent/30 transition-colors">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-navText leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-8 lg:px-[164px] py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-accent/20 to-primary-logoText/20 rounded-2xl p-12 border border-primary-accent/30">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-navText mb-8 max-w-2xl mx-auto">
            Join thousands of developers and security professionals who trust
            HACKRIFT for their cybersecurity needs.
          </p>
          <button className="px-10 py-4 bg-primary-accent text-primary-dark font-circular font-semibold text-lg rounded-lg hover:bg-primary-accent/90 transition-all duration-300 transform hover:scale-105">
            Join the Community
          </button>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🛡️",
    title: "Advanced Security Labs",
    description:
      "Practice with real-world cybersecurity scenarios in our cutting-edge virtual environments.",
  },
  {
    icon: "🚀",
    title: "Innovative Products",
    description:
      "Discover the latest tools and technologies that are revolutionizing the tech industry.",
  },
  {
    icon: "🎓",
    title: "Expert Training",
    description:
      "Learn from industry experts through comprehensive courses and hands-on workshops.",
  },
  {
    icon: "🔧",
    title: "Custom Solutions",
    description:
      "Get tailored cybersecurity solutions designed specifically for your organization's needs.",
  },
  {
    icon: "🌐",
    title: "Global Community",
    description:
      "Connect with like-minded professionals from around the world in our vibrant community.",
  },
  {
    icon: "⚡",
    title: "Fast Deployment",
    description:
      "Deploy security solutions quickly with our streamlined processes and automation tools.",
  },
];
