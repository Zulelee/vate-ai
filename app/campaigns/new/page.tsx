"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Mail,
  Users,
  Target,
  Calendar,
  Settings,
  ArrowRight,
  ArrowLeft,
  Plus,
  Edit,
  Eye,
  Send,
  Clock,
  CheckCircle,
  Sparkles,
  BarChart3,
  FileText,
  Palette,
  Zap,
  Globe,
  Filter,
  Search,
  Copy,
  Trash2,
  Save,
  Play,
  Pause,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  MessageSquare,
  User,
  Building,
  MapPin,
  Tag,
  Hash,
  Percent,
  TrendingUp,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  LogOut,
  Bold,
  Italic,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Campaign Basics",
    subtitle: "Set up your campaign foundation",
    icon: Mail,
    description: "Define your campaign name, type, and basic settings.",
  },
  {
    id: 2,
    title: "Audience Targeting",
    subtitle: "Select your target audience",
    icon: Users,
    description:
      "Choose who will receive your campaign and set targeting rules.",
  },
  {
    id: 3,
    title: "Email Content",
    subtitle: "Create your email message",
    icon: FileText,
    description: "Design your email with our AI-powered editor and templates.",
  },
  {
    id: 4,
    title: "A/B Testing",
    subtitle: "Optimize your campaign",
    icon: BarChart3,
    description: "Set up A/B tests to improve your campaign performance.",
  },
  {
    id: 5,
    title: "Schedule & Send",
    subtitle: "Finalize and launch",
    icon: Send,
    description: "Schedule your campaign and review before sending.",
  },
];

const campaignTypes = [
  {
    id: "welcome",
    name: "Welcome Series",
    description: "Onboard new subscribers with a series of emails",
    icon: Sparkles,
    color: "from-[#ea6077] to-[#d46275]",
    features: ["3-5 emails", "Automated triggers", "Personalization"],
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Regular updates and content for your audience",
    icon: FileText,
    color: "from-[#84404b] to-[#761b2b]",
    features: ["Weekly/Monthly", "Content rich", "Engagement focused"],
  },
  {
    id: "promotional",
    name: "Promotional",
    description: "Drive sales with special offers and promotions",
    icon: TrendingUp,
    color: "from-[#d46275] to-[#ea6077]",
    features: ["Limited time", "Call-to-action", "Conversion tracking"],
  },
  {
    id: "re-engagement",
    name: "Re-engagement",
    description: "Reconnect with inactive subscribers",
    icon: Heart,
    color: "from-[#761b2b] to-[#84404b]",
    features: ["Win-back strategy", "Special offers", "Reactivation"],
  },
];

const audienceSegments = [
  {
    id: "all",
    name: "All Subscribers",
    count: "12,450",
    description: "Send to your entire email list",
  },
  {
    id: "active",
    name: "Active Subscribers",
    count: "8,920",
    description: "Subscribers who opened emails in last 30 days",
  },
  {
    id: "new",
    name: "New Subscribers",
    count: "1,230",
    description: "Subscribers who joined in last 7 days",
  },
  {
    id: "custom",
    name: "Custom Segment",
    count: "Create new",
    description: "Build a custom audience with filters",
  },
];

const emailTemplates = [
  {
    id: 1,
    name: "Welcome Email",
    category: "Onboarding",
    preview: "Welcome to our community! We're excited to have you on board.",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.8,
    uses: 1240,
  },
  {
    id: 2,
    name: "Product Launch",
    category: "Promotional",
    preview: "Introducing our latest product with exclusive early access.",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.6,
    uses: 890,
  },
  {
    id: 3,
    name: "Weekly Newsletter",
    category: "Newsletter",
    preview: "This week's top stories, updates, and insights for you.",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.9,
    uses: 2150,
  },
  {
    id: 4,
    name: "Re-engagement",
    category: "Re-engagement",
    preview: "We miss you! Here's a special offer to get you back.",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.4,
    uses: 670,
  },
];

export default function CampaignCreationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    campaignName: "",
    campaignType: "",
    audience: "",
    template: "",
    subjectLine: "",
    previewText: "",
    abTestSubject: "",
    abTestContent: false,
    sendTime: "",
    sendDate: "",
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
    <div className="h-screen bg-[#0d0d0d] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#0d0d0d]/80 backdrop-blur-sm border-r border-white/10 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
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
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/campaigns"
            className="flex items-center gap-3 px-4 py-3 text-white bg-[#ea6077]/10 border border-[#ea6077]/20 rounded-xl"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Campaigns</span>
          </Link>
          <Link
            href="/contacts"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            <Users className="w-5 h-5" />
            <span>Contacts</span>
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
          <Link
            href="/templates"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            <Target className="w-5 h-5" />
            <span>Templates</span>
          </Link>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-[#ea6077] to-[#d46275] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-400">john@company.com</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/5"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10 p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Create Campaign</h1>
              <p className="text-gray-400">
                Build and launch your email campaign in just a few steps
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Link href="/campaigns">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10 flex-shrink-0">
          <div className="max-w-4xl mx-auto px-6 py-2">
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#ea6077] to-[#d46275] h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Campaign Creation Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Step Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ea6077] to-[#d46275] rounded-2xl mb-6">
                {(() => {
                  const IconComponent = steps[currentStep - 1].icon;
                  return <IconComponent className="w-8 h-8 text-white" />;
                })()}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {steps[currentStep - 1].title}
              </h2>
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
                <div className="space-y-8">
                  {/* Campaign Name */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Campaign Name
                    </h3>
                    <input
                      type="text"
                      value={formData.campaignName}
                      onChange={(e) =>
                        handleInputChange("campaignName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                      placeholder="Enter campaign name (e.g., Welcome Series Q1)"
                    />
                  </div>

                  {/* Campaign Type */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Campaign Type
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {campaignTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                            formData.campaignType === type.id
                              ? "border-[#ea6077] bg-[#ea6077]/10"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() =>
                            handleInputChange("campaignType", type.id)
                          }
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                          <div className="relative z-10">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4`}
                            >
                              <type.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">
                              {type.name}
                            </h4>
                            <p className="text-gray-400 text-sm mb-4">
                              {type.description}
                            </p>
                            <div className="space-y-2">
                              {type.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-[#ea6077]" />
                                  <span className="text-gray-300 text-sm">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  {/* Audience Selection */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Select Audience
                    </h3>
                    <div className="space-y-4">
                      {audienceSegments.map((segment) => (
                        <div
                          key={segment.id}
                          className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                            formData.audience === segment.id
                              ? "border-[#ea6077] bg-[#ea6077]/10"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() =>
                            handleInputChange("audience", segment.id)
                          }
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-medium">
                                {segment.name}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {segment.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">
                                {segment.count}
                              </p>
                              {segment.id === "custom" && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-[#ea6077] hover:text-[#d46275] hover:bg-[#ea6077]/10"
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  Create
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Targeting Options */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Advanced Targeting
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Location
                        </label>
                        <select className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200">
                          <option value="">All locations</option>
                          <option value="us">United States</option>
                          <option value="eu">Europe</option>
                          <option value="asia">Asia</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Engagement Level
                        </label>
                        <select className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200">
                          <option value="">All subscribers</option>
                          <option value="high">High engagement</option>
                          <option value="medium">Medium engagement</option>
                          <option value="low">Low engagement</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  {/* Template Selection */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Choose Template
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {emailTemplates.map((template) => (
                        <div
                          key={template.id}
                          className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                            formData.template === template.id.toString()
                              ? "border-[#ea6077] bg-[#ea6077]/10"
                              : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                          onClick={() =>
                            handleInputChange(
                              "template",
                              template.id.toString()
                            )
                          }
                        >
                          <div className="mb-4">
                            <div className="w-full h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3"></div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                                {template.category}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-300">
                                  {template.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4 className="text-white font-semibold mb-2">
                            {template.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-3">
                            {template.preview}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">
                              {template.uses} uses
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#ea6077] hover:text-[#d46275] hover:bg-[#ea6077]/10"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email Content */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Email Content
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Subject Line
                        </label>
                        <input
                          type="text"
                          value={formData.subjectLine}
                          onChange={(e) =>
                            handleInputChange("subjectLine", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                          placeholder="Enter your subject line"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Preview Text
                        </label>
                        <input
                          type="text"
                          value={formData.previewText}
                          onChange={(e) =>
                            handleInputChange("previewText", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                          placeholder="Brief preview text that appears in email clients"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Email Content
                        </label>
                        <div className="border border-white/20 rounded-xl bg-white/5 p-4 min-h-[200px]">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                              >
                                <Bold className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                              >
                                <Italic className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                              >
                                <LinkIcon className="w-4 h-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#ea6077] hover:text-[#d46275]"
                            >
                              <Zap className="w-4 h-4 mr-1" />
                              AI Assist
                            </Button>
                          </div>
                          <textarea
                            className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                            placeholder="Write your email content here... Use AI Assist to generate content automatically."
                            rows={8}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  {/* A/B Testing Setup */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      A/B Testing
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div>
                          <h4 className="text-white font-medium">
                            Subject Line Test
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Test different subject lines to improve open rates
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Variant
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div>
                          <h4 className="text-white font-medium">
                            Content Test
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Test different email content to improve click rates
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Variant
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Test Settings */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Test Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Test Size
                        </label>
                        <select className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200">
                          <option value="10">10% of audience</option>
                          <option value="20">20% of audience</option>
                          <option value="30">30% of audience</option>
                          <option value="50">50% of audience</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Test Duration
                        </label>
                        <select className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200">
                          <option value="1">1 hour</option>
                          <option value="6">6 hours</option>
                          <option value="24">24 hours</option>
                          <option value="48">48 hours</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  {/* Schedule Settings */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Schedule & Send
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Send Date
                        </label>
                        <input
                          type="date"
                          value={formData.sendDate}
                          onChange={(e) =>
                            handleInputChange("sendDate", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Send Time
                        </label>
                        <select
                          value={formData.sendTime}
                          onChange={(e) =>
                            handleInputChange("sendTime", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Campaign Summary */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Campaign Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Campaign Name:</span>
                        <span className="text-white font-medium">
                          {formData.campaignName || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Campaign Type:</span>
                        <span className="text-white font-medium">
                          {campaignTypes.find(
                            (t) => t.id === formData.campaignType
                          )?.name || "Not selected"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Audience:</span>
                        <span className="text-white font-medium">
                          {audienceSegments.find(
                            (a) => a.id === formData.audience
                          )?.name || "Not selected"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Subject Line:</span>
                        <span className="text-white font-medium">
                          {formData.subjectLine || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Send Date:</span>
                        <span className="text-white font-medium">
                          {formData.sendDate || "Not scheduled"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10 pb-6">
              <Button
                onClick={handleBack}
                disabled={currentStep === 1}
                // variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {currentStep === steps.length ? (
                <LiquidButton
                  size="xl"
                  className="text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
                >
                  Launch Campaign
                  {/* <Send className="w-5 h-5 ml-2" /> */}
                </LiquidButton>
              ) : (
                <LiquidButton
                  onClick={handleNext}
                  size="xl"
                  className="text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
                >
                  Continue
                  {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                </LiquidButton>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
