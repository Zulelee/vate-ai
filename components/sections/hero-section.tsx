"use client";
import { Button } from "@/components/ui/button";
import { Zap, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Waves } from "@/components/ui/waves-background";
import { Typewriter } from "@/components/ui/typewriter";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position - NO TRANSFORM
  const opacity = Math.max(0, 1 - scrollY / 500); // Fade out over 500px of scroll

  return (
    <section
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10"
      style={{
        opacity,
        pointerEvents: opacity < 0.1 ? "none" : "auto",
      }}
    >
      {/* Interactive Waves Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        <Waves
          lineColor="rgba(228, 228, 228, 0.3)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={45}
          waveAmpY={25}
          friction={0.92}
          tension={0.008}
          maxCursorMove={150}
          xGap={15}
          yGap={40}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* VATE AI Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            VATE AI
          </h1>
        </div>

        {/* Typewriter Effect */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            <Typewriter
              words={["Automate", "Personalize"]}
              delay={150}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#761b2b] via-[#84404b] to-[#ea6077]"
            />
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          AI-powered email automation platform that helps businesses streamline
          outreach, nurture leads, and run email campaigns with ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
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
            Watch Demo
          </LiquidButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
