import React, { useState } from "react";
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

  return (
    <div className="px-4 py-4">
      <section className="py-16 px-4 lg:px-12 bg-white rounded-md">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold mb-12">Compare plans</h2>

        {/* Table */}
        <table className="w-full">
          {/* Table Head */}
          <thead className="border-t border-b">
            <tr>
              <th className="text-left py-6 px-4 text-3xl font-medium">Execution</th>
              {plans.map((plan, idx) => (
                <th key={idx} className="text-center py-6 px-4 text-lg font-medium">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row, idx) => (
              <React.Fragment key={idx}>
                <tr
                  className={`even:bg-[#F7F5F2] ${row.details ? "cursor-pointer border-l-2" : ""}`}
                  onClick={() => row.details && toggleRow(idx)}
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
                        <Check className="w-5 h-5 mx-auto text-black" />
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>

                {/* Expanded details row */}
                {row.details && expandedRow === idx && (
                  <tr className="even:bg-[#F7F5F2]">
                    <td colSpan={plans.length + 1} className="py-4 px-4 text-sm text-gray-600 border-l-2">
                      {row.details}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ComparePlans;
