"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Building,
  Mail,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Upload,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Welcome to Vate AI",
    subtitle: "Let's get you set up in just a few steps",
    icon: Sparkles,
    description: "",
  },
  {
    id: 2,
    title: "Company Information",
    subtitle: "Tell us about your business",
    icon: Building,
    description:
      "This helps us personalize your experience and provide relevant features.",
  },
  {
    id: 3,
    title: "Email Integration",
    subtitle: "Connect your email provider",
    icon: Mail,
    description:
      "Securely connect your email account to start sending automated campaigns.",
  },
  {
    id: 4,
    title: "Team Setup",
    subtitle: "Invite your team members",
    icon: Users,
    description: "Add team members who will help manage your email campaigns.",
  },
  {
    id: 5,
    title: "Campaign Goals",
    subtitle: "Define your objectives",
    icon: Target,
    description: "Set your primary goals to help us optimize your campaigns.",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    emailProvider: "",
    teamSize: "",
    primaryGoal: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/vate-ai-logo.png"
                alt="Vate AI"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Vate AI</span>
            </div>
            <div className="text-sm text-gray-300">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#ea6077] to-[#d46275] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          {/* Step Content */}
          <div className="relative bg-white/5 backdrop-blur-sm py-8 px-6 sm:px-10 shadow-xl rounded-2xl border border-white/10">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

            <div className="relative z-10">
              {/* Step Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ea6077] to-[#d46275] rounded-2xl mb-6">
                  {(() => {
                    const IconComponent = steps[currentStep - 1].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {steps[currentStep - 1].title}
                </h1>
                <p className="text-xl text-gray-300 mb-2">
                  {steps[currentStep - 1].subtitle}
                </p>
                <p className="text-gray-400">
                  {steps[currentStep - 1].description}
                </p>
              </div>

              {/* Step Content */}
              <div className="space-y-6">
                {currentStep === 1 && (
                  <div className="text-center space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <CheckCircle className="w-12 h-12 text-[#ea6077] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Account Created Successfully!
                      </h3>
                      <p className="text-gray-300">
                        Your Vate AI account is ready. Let&apos;s configure it
                        to match your business needs.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Building className="w-8 h-8 text-[#ea6077] mx-auto mb-2" />
                        <p className="text-sm text-gray-300">Company Setup</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Mail className="w-8 h-8 text-[#ea6077] mx-auto mb-2" />
                        <p className="text-sm text-gray-300">
                          Email Integration
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <Target className="w-8 h-8 text-[#ea6077] mx-auto mb-2" />
                        <p className="text-sm text-gray-300">Goal Setting</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          handleInputChange("industry", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Provider
                      </label>
                      <select
                        value={formData.emailProvider}
                        onChange={(e) =>
                          handleInputChange("emailProvider", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                      >
                        <option value="">Select your email provider</option>
                        <option value="gmail">Gmail</option>
                        <option value="outlook">Outlook</option>
                        <option value="yahoo">Yahoo</option>
                        <option value="custom">Custom SMTP</option>
                      </select>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <Settings className="w-5 h-5 text-[#ea6077]" />
                        <h4 className="text-white font-medium">
                          Security Note
                        </h4>
                      </div>
                      <p className="text-sm text-gray-300">
                        We use OAuth 2.0 for secure authentication. Your email
                        credentials are never stored on our servers.
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Team Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) =>
                          handleInputChange("teamSize", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-20">6-20 people</option>
                        <option value="21-50">21-50 people</option>
                        <option value="50+">50+ people</option>
                      </select>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-5 h-5 text-[#ea6077]" />
                        <h4 className="text-white font-medium">
                          Team Invitations
                        </h4>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">
                        You can invite team members after setup. They&apos;ll
                        receive email invitations to join your workspace.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Invite Team Members Later
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Primary Goal
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) =>
                          handleInputChange("primaryGoal", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="customer-nurturing">
                          Customer Nurturing
                        </option>
                        <option value="newsletter">Newsletter & Updates</option>
                        <option value="onboarding">Customer Onboarding</option>
                        <option value="re-engagement">Re-engagement</option>
                      </select>
                    </div>
                    <div className="bg-gradient-to-r from-[#ea6077]/10 to-[#d46275]/10 rounded-xl p-6 border border-[#ea6077]/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-5 h-5 text-[#ea6077]" />
                        <h4 className="text-white font-medium">
                          AI Optimization
                        </h4>
                      </div>
                      <p className="text-sm text-gray-300">
                        Based on your goal, our AI will optimize your campaigns
                        for better performance and higher engagement rates.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  // variant="outline"
                  className="w-fit text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                {currentStep === steps.length ? (
                  <Link href="/dashboard">
                    <LiquidButton
                      size="xl"
                      className="text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
                    >
                      Complete Setup
                      {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                    </LiquidButton>
                  </Link>
                ) : (
                  <LiquidButton
                    onClick={handleNext}
                    size="xl"
                    className="w-fit text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
                  >
                    Continue
                    {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                  </LiquidButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
