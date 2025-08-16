# Product Requirements Document (PRD) for Vate AI

Project: Vate AI Email Automation
Prepared for: Synovate
Version: 1.0

⸻

1. Overview

Vate AI is an AI-powered email automation platform that helps businesses streamline outreach, nurture leads, and run email campaigns with ease. The platform integrates with popular tools, automates follow-ups, and provides real-time analytics.

The goal is to build a clean, modern, and professional SaaS product with intuitive onboarding and a dashboard-driven experience.

⸻

2. Objectives
   • Enable users to set up campaigns quickly with minimal technical effort.
   • Provide AI-generated email templates to save time.
   • Ensure deliverability compliance via email configuration & SPF/DKIM verification.
   • Offer powerful analytics (open rates, CTR, replies) for optimization.
   • Support A/B testing and automated follow-ups to improve results.

⸻

3. User Journeys
   1. New User Signup → Quick setup wizard → Upload audience → Create campaign → Launch.
   2. Returning User → Login → Access campaign dashboard → Monitor performance → Optimize.
   3. Admin (internal use) → Manage users, monitor system usage, troubleshoot email configurations.

⸻

4. Pages & Layouts

4.1 Landing Page

Purpose: Introduce product, highlight features, and encourage signups.
• Hero Section
• Tagline: “Automate Outreach. Personalize at Scale.”
• CTA: “Try Vate AI Free” button.
• Background: Subtle gradient with AI/data illustration or animated demo GIF.
• Features Highlight
• Icons + short text for:
• AI-powered emails
• Smart automation & follow-ups
• Real-time analytics
• Product Visuals
• A looping GIF or screenshot carousel showing dashboard & campaign setup.
• Testimonials / Trust Badges
• 2–3 quotes from beta testers or clients.
• Logos of companies using Vate AI.
• Footer
• Links: About, Contact, Legal, Privacy Policy, Terms of Use.

⸻

4.2 Signup / Login
• Options: Email + password OR Google SSO.
• Validation: Email verification step (optional, async).
• UX: Minimal, centered card layout with logo + form.

⸻

4.3 Onboarding Setup Wizard

A step-by-step guided setup after signup. 1. Company Details
• Upload logo, enter name, website, industry. 2. Email Configuration
• SMTP/Gmail integration.
• SPF/DKIM setup guide (with copy-paste snippets). 3. Audience Upload
• Upload CSV OR connect Airtable/Google Sheets.
• Option to tag/segment audience. 4. Goal Selection
• Choose: Outreach, Nurture, Newsletter.
• Define goal → CTA (link, form, button).

➡ On completion → redirect to campaign dashboard.

⸻

4.4 Campaign Dashboard

Purpose: Central hub for managing campaigns.
• Top Navigation: Logo, Dashboard, Campaigns, Analytics, Settings, User profile dropdown.
• Main Area:
• “Create Campaign” button (prominent).
• List of campaigns with status (Draft, Live, Paused).
• Quick filters (By audience, By goal, By status).

⸻

4.5 Campaign Creation Flow 1. Template Selection
• Pre-designed templates OR AI-generate email content. 2. Audience Selection
• Choose from uploaded/segmented audience. 3. Schedule
• One-time OR recurring sends.
• Smart scheduling (AI-recommended best send time). 4. Review & Launch
• Preview email content + recipients.
• Confirm & launch.

⸻

4.6 Post-Launch Tools
• Real-Time Analytics Dashboard
• KPIs: Open rate, CTR, Replies, Bounce rate.
• Line/bar charts for trends.
• Engagement per segment.
• A/B Testing
• Compare subject lines or email body.
• Display winning version automatically.
• Auto-Responses & Follow-ups
• Predefined rules (e.g., “Send follow-up in 3 days if no reply”).
• Option to pause/edit live campaigns.

⸻

5. Color Scheme & Branding

From client’s shared palette:
• Primary Colors
• Deep Maroon: #761b2b
• Muted Rose: #84404b
• Light Coral: #ea6077
• Secondary Colors
• Dark Burgundy: #651d2c
• Warm Pink: #d46275
• Neutral Colors
• Light Gray: #e4e4e4
• White: #ffffff
• Dark Gray: #0d0d0d

Usage:
• Landing page hero → gradient of #761b2b → #ea6077.
• Buttons/CTAs → Primary (#ea6077) with hover (#84404b).
• Dashboard → Neutral background (#f9f9f9 or #ffffff) with maroon accents.

⸻

6. Technical Notes
   • Authentication: Google OAuth + email/password.
   • Integrations: Gmail, SMTP, Airtable, Google Sheets.
   • Compliance: SPF/DKIM, GDPR-ready.
   • Scalability: Campaign sending via queues to handle high volume.

⸻

7. Success Metrics
   • Time to first campaign (onboarding friction).
   • Campaign launch success rate.
   • Open/click/reply rates improvement vs. baseline.
   • User retention after 30/60/90 days.
