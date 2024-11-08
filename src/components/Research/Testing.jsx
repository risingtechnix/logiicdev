import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCogs, FaLightbulb, FaUsers } from 'react-icons/fa'; // Icons for each section
import simulation1 from "../../assets/simulationAndTesting1.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

function Testing() {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const cardRef2 = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });
  const isTextInView2 = useInView(textRef2, { once: true, amount: 0.2 });
  const isTextInView3 = useInView(textRef3, { once: true, amount: 0.2 });
  const isTextInView4 = useInView(textRef4, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
  const isCardInView2 = useInView(cardRef2, { once: true, amount: 0.2 });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

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
    <section className="bg-gray-100 dark:bg-slate-900">
      <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
        {/* Text Content */}
        <motion.div
          className="space-y-6 pl-4 ml-6 text-gray-800 dark:text-white"
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <span className="bg-[#ffcc00] text-black text-sm font-medium px-3 py-1 rounded-full">
            Simulation and Testing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Simulation and Testing : Advanced Solutions by Logiicdev{" "}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Electronic research house Logiicdev specialises in advanced
            simulation and AI testing research. Our engineers and researchers
            create accurate, customised simulation model, and test bench. Our
            solutions let you validate designs, predict performance, and
            troubleshoot issues before final design.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative xl:p-5"
          ref={imageRef}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img
            src={simulation1}
            alt="Team at work"
            className="w-3/4 md:w-2/3 lg:w-xl h-auto mx-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
          {/* Adjusted decorative element */}
          <div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
        </motion.div>
      </div>

      {/* Why Choose us */}

      <section className="py-12  text-gray-800 dark:text-white xl:mt-10">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <motion.h2 className="text-4xl font-bold text-center mb-8" ref={textRef3}
          initial="hidden"
          animate={isTextInView3 ? "visible" : "hidden"}
          variants={textVariants}>
          Why Choose Us?
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={cardRef}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          variants={cardVariants}>
          
          {/* Card 1: Tailored Simulation and AI Testing Platforms */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCogs className="text-3xl text-yellow-500 mr-4" />
              <h3 className="text-2xl font-semibold">Tailored Simulation & AI Testing</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Project-specific platforms designed to meet unique needs in simulation and AI testing.
            </p>
          </div>

          {/* Card 2: Innovative Approach */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-3xl text-yellow-500 mr-4" />
              <h3 className="text-2xl font-semibold">Innovative Approach</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Researching and integrating new technologies to keep you ahead in the industry.
            </p>
          </div>

          {/* Card 3: Experienced Team */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl text-yellow-500 mr-4" />
              <h3 className="text-2xl font-semibold">Experienced Team</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Skilled engineers specializing in simulation modeling, AI testing, ML, and data analysis.
            </p>
          </div>
        </motion.div>
        <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mt-20"
            ref={textRef4}
            initial="hidden"
            animate={isTextInView4 ? "visible" : "hidden"}
            variants={textVariants}
          >
            Explore how Logiicdev's world-class simulation and AI testing solutions can boost electronic design project innovation and efficiency. Contact us today to discuss your needs and options!
          </motion.p>
      </div>
    </section>
    </section>
  );
}

export default Testing;
