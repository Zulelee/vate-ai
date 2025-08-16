import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/vate-ai-logo.png"
              alt="Vate AI"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="flex flex-col">
              <span className="ml-3 text-xl font-bold text-white">VATE AI</span>
              <span className="ml-3 text-sm font-bold text-white">
                Email Automation
              </span>
            </span>
          </div>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div> */}

          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="/login">
              <Button
                variant="outline"
                className="ml-4 border-white/20 text-white hover:bg-[#ea6077] hover:border-[#ea6077] backdrop-blur-sm bg-white/5 transition-all duration-200"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
