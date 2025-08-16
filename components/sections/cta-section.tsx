import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24  relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to transform your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea6077] via-[#d46275] to-[#84404b]">
            email outreach?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses already using Vate AI to scale their email
          campaigns and grow their business.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/signup">
            <LiquidButton
              size="xxl"
              className="text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
            >
              Start Free Trial
            </LiquidButton>
          </Link>
          <LiquidButton
            size="xxl"
            className="text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
          >
            Schedule Demo
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
