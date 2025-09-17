import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const ComparePlans = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const plans = ["FREE", "BASIC", "PROFESSIONAL", "ORGANIZATION"];

  const rows = [
    { label: "Email", values: ["1", "1", "5", "15"] },
    { label: "Daily Email Sending Limit", values: ["250", "250", "Unlimited", "Unlimited"] },
    { 
      label: "Email Integration", 
      values: ["Gmail & Microsoft", "All Email Providers", "All Email Providers", "All Email Providers"],
      details: "Supports Gmail, Outlook, Office 365, and IMAP providers."
    },
    { 
      label: "Track Website Visitors", 
      values: ["10 New Visitors Daily", "10 New Visitors Daily", "250 New Visitors Daily", "500 New Visitors Daily"],
      details: "Track anonymous visitors on your website and enrich them with company data."
    },
    { label: "AI Email Composer", values: ["5,000 / Month", "250,000 / Month", "800,000 / Month", "1,000,000 / Month"] },
    { label: "Chrome Extension", values: ["check", "check", "check", "check"]},
    { label: "Meetings", values: ["check", "check", "check", "check"] },
    { 
      label: "Conversations", 
      values: ["", "", "check", "check"],
      details: "Includes email, chat, and meeting conversation tracking for better engagement."
    },
    { label: "US Dialer", values: ["", "", "check", "check"] },
  ];

  const toggleRow = (idx) => {
    setExpandedRow(expandedRow === idx ? null : idx);
  };

  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
  const rowVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } };
  const detailVariants = { hidden: { opacity: 0, height: 0 }, visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } } };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="px-4 py-4"
    >
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-16 px-4 lg:px-12 bg-white rounded-md"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12"
        >
          Compare plans
        </motion.h2>

        {/* Scrollable Container */}
        <div className="overflow-x-auto">
          <motion.table
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full min-w-[700px]" // ✅ ensures scroll if smaller screen
          >
            {/* Table Head */}
            <thead className="border-t border-b">
              <motion.tr variants={itemVariants}>
                <th className="text-left py-6 px-4 text-3xl font-medium">Execution</th>
                {plans.map((plan, idx) => (
                  <motion.th
                    key={idx}
                    variants={itemVariants}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center py-6 px-4 text-lg font-medium"
                  >
                    {plan}
                  </motion.th>
                ))}
              </motion.tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rows.map((row, idx) => (
                <React.Fragment key={idx}>
                  <motion.tr
                    variants={rowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: idx * 0.05 }}
                    className={`even:bg-[#F7F5F2] ${row.details ? "cursor-pointer border-l-2" : ""}`}
                    onClick={() => row.details && toggleRow(idx)}
                    whileHover={row.details ? { backgroundColor: "#f0f0f0" } : {}}
                  >
                    <td className="py-5 px-4 text-sm text-gray-800 flex items-center justify-between">
                      {row.label}
                      {row.details && (
                        expandedRow === idx ? (
                          <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )
                      )}
                    </td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className="py-5 px-4 text-center text-sm text-gray-700"
                      >
                        {val === "check" ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          >
                            <Check className="w-5 h-5 mx-auto text-black" />
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 + idx * 0.02 }}
                          >
                            {val}
                          </motion.span>
                        )}
                      </td>
                    ))}
                  </motion.tr>

                  {/* Expanded details row */}
                  {row.details && expandedRow === idx && (
                    <motion.tr
                      initial="hidden"
                      animate="visible"
                      variants={detailVariants}
                      className="even:bg-[#F7F5F2]"
                    >
                      <td colSpan={plans.length + 1} className="py-4 px-4 text-sm text-gray-600 border-l-2">
                        {row.details}
                      </td>
                    </motion.tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ComparePlans;
