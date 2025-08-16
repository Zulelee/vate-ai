import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/vateai",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/vateai",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/vateai",
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d]/80 backdrop-blur-sm text-white py-8 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/vate-ai-logo.png"
              alt="Vate AI"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-300">
              © 2024 Vate AI. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
