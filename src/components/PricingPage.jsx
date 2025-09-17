import React, { useState } from "react";
import PlanCard from "./PlanCard";
import ToggleSwitch from "./ToggleSwitch";

const PricingPage = () => {
  const [billing, setBilling] = useState("annual"); // annual | monthly

  const plans = [
    {
      name: "Free",
      description: "Explore the Apollo platform to find leads, manage pipeline & close deals",
      price: "$0",
      credits: "1,200",
      button: "Get started",
      buttonColor: "bg-[#EBF113] text-black",
      features: [
        "2 Sequences",
        "Prospecting, Gmail & Salesforce Extension",
        "Basic Filters",
      ],
    },
    {
      name: "Basic",
      description: "Explore the Apollo platform to find leads, manage pipeline & close deals",
      price: billing === "annual" ? "$49" : "$59",
      credits: "30,000",
      button: "Buy now",
      secondaryButton: "Learn about add-on credits",
      buttonColor: "bg-[#EBF113] text-black hover:bg-yellow-500",
      features: [
        "2 Sequences",
        "Prospecting, Gmail & Salesforce Extension",
        "Advanced Filters",
        "CRM Integrations",
        "Schedule Meetings",
        "6 Intent Topics & Intent Filters",
        "Enrichment for data & CRM",
      ],
    },
    {
      name: "Professional",
      description: "Explore the Apollo platform to find leads, manage pipeline & close deals",
      price: billing === "annual" ? "$79" : "$95",
      credits: "48,000",
      button: "Buy now",
      secondaryButton: "Learn about add-on credits",
      buttonColor: "bg-black text-white hover:bg-gray-800",
      tag: "Most Popular",
      features: [
        "Unlimited Sequences",
        "Prospecting, Gmail & Salesforce Extension",
        "Advanced Filters",
        "CRM Integrations",
        "Unlimited Round Robin Meetings",
        "6 Intent Topics & Intent Filters",
        "Enrichment for data & CRM",
        "US Dialer",
        "5 Mailboxes per user",
        "Automated Workflows",
        "AI Research Intelligence",
        "Call Recordings & AI Insights (4,000 mins)",
        "Pre-built Advanced Reports & Dashboards",
      ],
    },
    {
      name: "Organization",
      description: "Explore the Apollo platform to find leads, manage pipeline & close deals",
      price: billing === "annual" ? "$119" : "$139",
      credits: "72,000",
      button: "Buy now",
      buttonColor: "bg-[#EBF113] text-black hover:bg-yellow-500",
      secondaryButton: "Talk to Sales",
      features: [
        "Unlimited Sequences",
        "Prospecting, Gmail & Salesforce Extension",
        "Advanced Filters",
        "CRM Integrations",
        "Unlimited Round Robin Meetings",
        "12 Intent Topics & Intent Filters",
        "Enrichment for data & CRM",
        "US Dialer & International Dialer",
        "15 Mailboxes per user",
        "Automated Workflows",
        "AI Research Intelligence",
        "Call Recordings & AI Insights (8,000 mins)",
        "Pre-built Advanced Reports & Dashboards",
        "Customizable Reports & Dashboards",
        "Advanced Security Configurations",
        "Single Sign-on (SSO)",
      ],
    },
  ];

  return (
    <div className="px-4 py-4">
      <div className="w-full bg-white py-12 px-4 md:px-12 rounded-md">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        {/* Left: Heading */}
        <h1 className="text-3xl md:text-4xl font-medium max-w-xl">
          Everything you need to grow your business
        </h1>

        {/* Right: Text + Toggle */}
        <div className="flex flex-col items-start md:items-start gap-4">
          <p className="text-gray-600 max-w-sm text-sm md:text-base">
            Build pipeline, close more deals, and enrich data with
            industry-leading B2B data and AI-powered tools.
          </p>

          <ToggleSwitch billing={billing} setBilling={setBilling} />
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-gray-500 text-sm mt-6">
        Prices exclude any applicable taxes.
      </p>
    </div>
    </div>
  );
};

export default PricingPage;
