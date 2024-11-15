import React from "react";
import { motion } from "framer-motion";
import CheckIcon from "../../assets/Check icon.png";
import { Link } from "react-router-dom";

function SearchJobs() {
  const Cards = [
    {
      title: "PYTHON DEVELOPER",
      points: [
        "R&D Algorithm development",
        "AI/ML scripting",
        "Chart, Data Science",
        "Mathematical API",
        "Self-learner",
        "Numeric processing",
      ],
    },
    {
      title: "FPGA DEVELOPER",
      points: [
        "HDL development",
        "Simulations, synthesis, integration",
        "Code optimisation",
        "Requirements definition",
        "Implementation and verification",
        "Documentation",
      ],
    },
    {
      title: "AI Algorithm Developer",
      points: [
        "R&D Algorithm development",
        "AI/ML models",
        "Train, validate, and optimize",
        "Debug and troubleshoot issues",
        "Implementation and verification",
        "Deploy models into environments",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="bg-[#FEFFF2] py-12 dark:bg-[#181c32]">
      {/* Heading and Subheading */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Find Your Next Career Opportunity
        </h2>
        <p className="text-gray-600 text-sm sm:text-base dark:text-white">
          Explore a world of opportunities with Logiicdev. Whether you’re a
          student, recent graduate, or experienced professional, discover roles
          that align with your skills and passion.
        </p>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Output Characteristics */}
        {Cards.map((card, index) => (
          <motion.div
            className="bg-yellow-100 rounded-lg shadow-lg p-6  dark:bg-[#D4F0F0] "
            custom={index}
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger animation when card comes into view
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold mb-4">{card.title}</h2>
            <hr className="border-dashed border-[#ffcc00] border-t-2 mb-6 dark:border-purple-400" />
            {card.points.map((point, idx) => (
              <ul className="space-y-2">
                <li className="flex items-center mb-4">
                  <img
                    src={CheckIcon}
                    key={idx}
                    alt="Check"
                    className="w-5 h-5 mr-6"
                  />
                  {point}
                </li>
              </ul>
            ))}
            <Link to="/contact">
              <button className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 dark:bg-blue-900 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
                <a href="mailto:contact@logiicdev.eu">Get Connected</a>
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SearchJobs;
