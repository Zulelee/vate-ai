import { Mail, Zap, BarChart3, Sparkles, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Generation",
    description:
      "Generate personalized email content in seconds with our advanced AI that understands your brand voice and target audience.",
    gradient: "from-[#ea6077] to-[#d46275]",
  },
  {
    icon: Target,
    title: "Smart Automation & Follow-ups",
    description:
      "Set up intelligent follow-up sequences that automatically respond based on recipient engagement and behavior.",
    gradient: "from-[#d46275] to-[#84404b]",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description:
      "Track open rates, click-through rates, replies, and more with detailed insights to optimize your campaigns.",
    gradient: "from-[#84404b] to-[#761b2b]",
  },
  {
    icon: Shield,
    title: "Advanced Security & Compliance",
    description:
      "Enterprise-grade security with GDPR compliance, data encryption, and secure infrastructure for your peace of mind.",
    gradient: "from-[#761b2b] to-[#651d2c]",
  },
  {
    icon: Mail,
    title: "Multi-Channel Integration",
    description:
      "Seamlessly integrate with your existing tools and platforms for a unified email automation experience.",
    gradient: "from-[#651d2c] to-[#ea6077]",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Optimized for speed with 99.9% uptime, ensuring your campaigns reach your audience when it matters most.",
    gradient: "from-[#ea6077] to-[#d46275]",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-transparent z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#761b2b] to-[#ea6077] text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea6077] via-[#d46275] to-[#84404b]">
              scale your outreach
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI-generated content to smart automation, we&apos;ve got you
            covered with enterprise-grade features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/10"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with gradient background */}
              <div className="relative z-10 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ea6077] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#761b2b] to-[#ea6077] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Zap className="w-5 h-5 mr-2" />
            Explore All Features
          </div>
        </div> */}
      </div>
    </section>
  );
}
