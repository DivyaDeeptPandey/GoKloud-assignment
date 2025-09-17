import React, { useState } from "react";
import { motion } from "framer-motion";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-12 px-4 md:px-12 rounded-md"
      >
        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6"
        >
          {/* Left: Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-medium max-w-xl"
          >
            Everything you need to grow your business
          </motion.h1>

          {/* Right: Text + Toggle */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start md:items-start gap-4"
          >
            <p className="text-gray-600 max-w-sm text-sm md:text-base">
              Build pipeline, close more deals, and enrich data with
              industry-leading B2B data and AI-powered tools.
            </p>

            <ToggleSwitch billing={billing} setBilling={setBilling} />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-6 max-w-8xl mx-auto items-stretch"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Prices exclude any applicable taxes.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default PricingPage;