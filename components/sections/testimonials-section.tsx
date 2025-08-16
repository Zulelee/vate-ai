import { TestimonialsSection as MarqueeTestimonials } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Sarah Mitchell",
      handle: "@sarahmarketing",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Vate AI has transformed our email outreach. The AI-generated content is spot-on and the automation features save us hours every week.",
    href: "https://twitter.com/sarahmarketing",
  },
  {
    author: {
      name: "David Johnson",
      handle: "@davidgrowth",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The analytics dashboard is incredible. We can see exactly what's working and optimize our campaigns in real-time.",
    href: "https://twitter.com/davidgrowth",
  },
  {
    author: {
      name: "Alex Lee",
      handle: "@alexstartup",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Setup was incredibly easy. We went from zero to our first campaign in under 30 minutes. Highly recommended!",
    href: "https://twitter.com/alexstartup",
  },
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using Vate AI has revolutionized our email automation. The personalization features are game-changing for our conversion rates.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaeltech",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing Vate AI.",
    href: "https://twitter.com/michaeltech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
    href: "https://twitter.com/sofiaml",
  },
];

export function TestimonialsSection() {
  return (
    <MarqueeTestimonials
      title="Trusted by growing businesses worldwide"
      description="See what our customers have to say about Vate AI."
      testimonials={testimonials}
      className="relative z-20"
    />
  );
}
