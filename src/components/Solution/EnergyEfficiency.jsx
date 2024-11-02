import React from "react";
import { motion } from "framer-motion";

const EnergyEfficiency = () => {

//Animation
const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Section 1: Header */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundColor: "Black" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Dark overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Harnessing the Power of AI, Cloud, and IoT for Energy Efficiency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl"
          >
            The rapid integration of AI, Cloud, and IoT technologies is
            transforming industries worldwide, bringing both innovation and
            challenges, particularly in energy consumption and sustainability.
            As businesses evolve, the need for energy-efficient solutions
            becomes crucial.{" "}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg"
          >
            Learn More
          </motion.button>
        </div>
      </div>

      {/* Section 2: Challenges and Opportunities */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation when card comes into view
        variants={textVariants}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
          Turning Challenges into Opportunities
        </h2>
        <p className="text-gray-700 text-lg">
          At Logiicdev, we view the growing energy demands as an opportunity for
          agencies and consultants to enhance operations. The push for smarter,
          connected environments requires solutions that optimize energy use and
          reduce waste.
        </p>
        <ul className="space-y-4 pl-6 list-disc">
          <li className="text-gray-700 text-lg">
            <strong>Optimize Building and Plant Efficiency:</strong> Leverage
            advanced technologies to ensure facilities operate at peak
            efficiency, minimizing environmental impact.
          </li>
          <li className="text-gray-700 text-lg">
            <strong>Enhance Data Center Operations:</strong> Enable precise
            monitoring and management of energy usage in data centers, ensuring
            sustainability.
          </li>
        </ul>
      </motion.div>

      {/* Section 3: Innovative Solutions */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation when card comes into view
        variants={textVariants}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
          Innovative Solutions for Efficiency
        </h2>
        <p className="text-gray-700 text-lg">
          Logiicdev leads in developing tailored platforms and solutions for
          energy efficiency professionals, including:
        </p>
        <ul className="space-y-4 pl-6 list-disc">
          <li className="text-gray-700 text-lg">
            <strong>Custom Sites and Configurable Tests:</strong> Create
            personalized platforms to optimize energy efficiency based on
            specific client needs.
          </li>
          <li className="text-gray-700 text-lg">
            <strong>Advanced Data Capture:</strong> Integrate mobile apps and
            IoT devices for real-time data collection to identify
            inefficiencies.
          </li>
          <li className="text-gray-700 text-lg">
            <strong>Comprehensive Analysis:</strong> Provide in-depth tools for
            monitoring and analysis, ensuring accurate, actionable solutions.
          </li>
        </ul>
      </motion.div>

      {/* Section 4: Delivering Sustainable Results */}
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }} // Trigger animation when card comes into view
       variants={textVariants}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
          Delivering Sustainable Results
        </h2>
        <p className="text-gray-700 text-lg">
          Our commitment extends beyond tools; we deliver sustainable results
          that add long-term value. By implementing our solutions, businesses
          can achieve cost savings, operational efficiency, and a more
          sustainable future.
        </p>
        <ul className="space-y-4 pl-6 list-disc">
          <li className="text-gray-700 text-lg">
            <strong>Proactive Energy Management:</strong> Use insights from our
            analytics to optimize operations across multiple sites.
          </li>
          <li className="text-gray-700 text-lg">
            <strong>Scalable Solutions:</strong> Our platforms adapt to the
            growing demand for energy-efficient solutions, from single buildings
            to vast data centers.
          </li>
        </ul>
      </motion.div>

      {/* Section 5: Conclusion */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation when card comes into view
        variants={textVariants}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
        Your Partner in Energy Efficiency
        </h2>
        <p className="text-gray-700 text-lg">
        Partner with Logiicdev for expert-driven solutions that meet the
          complexities of modern energy management, driving the future of energy
          efficiency for a sustainable tomorrow.
        </p>
        <ul className="space-y-4 pl-6 list-disc">
          <li className="text-gray-700 text-lg">
            <strong>Future-Focused Approach:</strong> Invest in sustainable practices that prepare your business for long-term efficiency and regulatory compliance.
          </li>
          <li className="text-gray-700 text-lg">
            <strong>Collaborative Partnership:</strong> Work with us as a dedicated partner committed to achieving your energy efficiency goals.
          </li>
        </ul>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-800">
          Your Partner in Energy Efficiency
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          Partner with Logiicdev for expert-driven solutions that meet the
          complexities of modern energy management, driving the future of energy
          efficiency for a sustainable tomorrow.
        </p>
      </motion.div> */}
    </div>
  );
};

export default EnergyEfficiency;
