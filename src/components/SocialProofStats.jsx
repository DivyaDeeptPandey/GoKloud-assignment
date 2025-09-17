import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const AwardsSection = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="px-4"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#F7F5F2] rounded-lg shadow p-8 md:px-12 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left side: headline + stars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold mb-4"
          >
            The most loved sales <br /> platform on the planet
          </motion.h2>

          {/* Stars */}
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-2"
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                variants={starVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <FaStar className="text-purple-500 w-6 h-6" />
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm"
          >
            4.7/5 based on 9,015 reviews | GDPR Compliant
          </motion.p>
        </motion.div>

        {/* Right side: badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[...Array(4)].map((_, index) => (
            <motion.img
              key={index}
              variants={badgeVariants}
              whileHover="hover"
              src="/images/badge1.svg"
              alt={[
                "Top 100 Highest Satisfaction Products",
                "Top 50 Sales Products",
                "Top 100 Best Software Products",
                "Top 50 Small Business Products"
              ][index]}
              className="h-28 cursor-pointer"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AwardsSection;