"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  BarChart3,
  Mail,
  Users,
  TrendingUp,
  Plus,
  Settings,
  Bell,
  Search,
  Calendar,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  Filter,
  Download,
  RefreshCw,
  Star,
  MessageSquare,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  User,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for dashboard
const stats = [
  {
    title: "Total Campaigns",
    value: "24",
    change: "+12%",
    changeType: "positive",
    icon: Mail,
    color: "from-[#ea6077] to-[#d46275]",
  },
  {
    title: "Active Subscribers",
    value: "12.5K",
    change: "+8.2%",
    changeType: "positive",
    icon: Users,
    color: "from-[#84404b] to-[#761b2b]",
  },
  {
    title: "Open Rate",
    value: "68.4%",
    change: "+2.1%",
    changeType: "positive",
    icon: Eye,
    color: "from-[#d46275] to-[#ea6077]",
  },
  {
    title: "Click Rate",
    value: "12.8%",
    change: "-1.2%",
    changeType: "negative",
    icon: MousePointer,
    color: "from-[#761b2b] to-[#84404b]",
  },
];

const recentCampaigns = [
  {
    id: 1,
    name: "Welcome Series",
    status: "active",
    subscribers: "2,450",
    openRate: "72.3%",
    clickRate: "14.2%",
    sentDate: "2 hours ago",
  },
  {
    id: 2,
    name: "Product Launch",
    status: "scheduled",
    subscribers: "1,890",
    openRate: "68.1%",
    clickRate: "11.8%",
    sentDate: "Tomorrow",
  },
  {
    id: 3,
    name: "Weekly Newsletter",
    status: "draft",
    subscribers: "3,200",
    openRate: "65.4%",
    clickRate: "9.7%",
    sentDate: "Draft",
  },
  {
    id: 4,
    name: "Re-engagement",
    status: "completed",
    subscribers: "1,120",
    openRate: "58.9%",
    clickRate: "8.3%",
    sentDate: "3 days ago",
  },
];

const quickActions = [
  {
    title: "Create Campaign",
    description: "Start a new email campaign",
    icon: Plus,
    color: "from-[#ea6077] to-[#d46275]",
    href: "/campaigns/new",
  },
  {
    title: "Import Contacts",
    description: "Add subscribers to your list",
    icon: Users,
    color: "from-[#84404b] to-[#761b2b]",
    href: "/contacts/import",
  },
  {
    title: "View Analytics",
    description: "Check campaign performance",
    icon: BarChart3,
    color: "from-[#d46275] to-[#ea6077]",
    href: "/analytics",
  },
  {
    title: "Templates",
    description: "Browse email templates",
    icon: Mail,
    color: "from-[#761b2b] to-[#84404b]",
    href: "/templates",
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "scheduled":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "draft":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "completed":
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-[#0d0d0d]/80 backdrop-blur-sm lg:border-r border-white/10 flex flex-col">
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
            <span className="flex flex-col">
              <span className="ml-3 text-xl font-bold text-white">VATE AI</span>
              <span className="ml-3 text-sm font-bold text-white">
                Email Automation
              </span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-white bg-[#ea6077]/10 border border-[#ea6077]/20 rounded-xl"
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            href="/campaigns/new"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            <span>Campaigns</span>
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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/10 p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Dashboard
              </h1>
              <p className="text-gray-400 text-sm lg:text-base">
                Welcome back! Here&apos;s what&apos;s happening with your
                campaigns.
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="relative flex-1 lg:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="w-full lg:w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea6077] focus:border-[#ea6077] transition-all duration-200 text-sm"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/5"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/5"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-6 space-y-4 lg:space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                    >
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs lg:text-sm ${
                        stat.changeType === "positive"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {stat.changeType === "positive" ? (
                        <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 lg:w-4 lg:h-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {stat.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="group relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <action.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm lg:text-base">
                      {action.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm">
                      {action.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Campaigns */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-lg lg:text-xl font-bold text-white">
                Recent Campaigns
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30 text-xs lg:text-sm"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 hover:text-white hover:bg-white/10 hover:border-white/30 text-xs lg:text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#ea6077] to-[#d46275] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        {campaign.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {campaign.subscribers} subscribers
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center lg:items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="text-center">
                        <p className="text-white font-medium text-sm lg:text-base">
                          {campaign.openRate}
                        </p>
                        <p className="text-gray-400 text-xs">Open Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-medium text-sm lg:text-base">
                          {campaign.clickRate}
                        </p>
                        <p className="text-gray-400 text-xs">Click Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-xs lg:text-sm">
                          {campaign.sentDate}
                        </p>
                        <p className="text-gray-400 text-xs">Sent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {campaign.status}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Email Performance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-base lg:text-lg font-bold text-white">
                  Email Performance
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#ea6077] rounded-full"></div>
                    <span className="text-gray-300">Sent</span>
                  </div>
                  <span className="text-white font-medium">24,521</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#d46275] rounded-full"></div>
                    <span className="text-gray-300">Delivered</span>
                  </div>
                  <span className="text-white font-medium">24,123</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#84404b] rounded-full"></div>
                    <span className="text-gray-300">Opened</span>
                  </div>
                  <span className="text-white font-medium">16,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#761b2b] rounded-full"></div>
                    <span className="text-gray-300">Clicked</span>
                  </div>
                  <span className="text-white font-medium">3,142</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6">
              <h3 className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-400/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      Campaign &quot;Welcome Series&quot; completed
                    </p>
                    <p className="text-gray-400 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-400/10 rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      New campaign scheduled for tomorrow
                    </p>
                    <p className="text-gray-400 text-xs">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      150 new subscribers added
                    </p>
                    <p className="text-gray-400 text-xs">6 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-400/10 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      Template &quot;Newsletter&quot; favorited
                    </p>
                    <p className="text-gray-400 text-xs">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
