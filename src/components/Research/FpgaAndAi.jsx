import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FPGA2 from "../../assets/FPGA1.jpg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

function FpgaAndAi() {
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
    <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-slate-900">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6 pl-4 ml-6 text-gray-800 dark:text-white"
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <span className="bg-[#ffcc00] text-black text-sm font-medium px-3 py-1 rounded-full">
            FPGA and AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            FPGA and AI: The Solutions for High-Performance Applications
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong>
              Logiicdev pioneers FPGA and AI processing solutions:
            </strong>{" "}
            Our goal as a leading electronic design house is to empower
            industries with high-performance, scalable, and customisable
            solutions that innovate AI applications, machine learning, embedded
            systems, and real-time processing.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <strong>Our FPGA Design and AI Processing Expertise:</strong>{" "}
            Flexibility and performance make FPGA technology ideal for
            high-speed processing. Expert engineers and researchers design
            custom FPGA solutions for complex automotive, telecommunications,
            aerospace, and healthcare applications. We use FPGAs to improve
            processing speed, latency, and real-time data handling for your
            project. To build robust, scalable neural networks, predictive
            analytics, computer vision, and natural language processing
            solutions, we optimise algorithms and integrate AI with hardware. We
            create powerful, sustainable, and affordable AI systems by
            prioritising power efficiency and customisation.
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
            src={FPGA2}
            alt="Team at work"
            className="w-full h-auto mx-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
          {/* Adjusted decorative element */}
          <div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
        </motion.div>
      </div>

      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-slate-900">
        <div className="max-w-full mx-auto text-center space-y-10">
          {/* Header */}
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white"
            ref={textRef2}
            initial="hidden"
            animate={isTextInView2 ? "visible" : "hidden"}
            variants={textVariants}
          >
            Why Choose Logiicdev?
          </motion.h2>

          {/* Key Points */}
          <div className="flex flex-col md:flex-row justify-center gap-8 text-left">
            {/* Fast PoC */}
            <motion.div
              className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              ref={cardRef}
              initial="hidden"
              animate={isCardInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                Fast PoC
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                KPI based evaluation conception design to streamline
                development.
              </p>
            </motion.div>

            {/* Customised Solutions */}
            <motion.div
              className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md "
              ref={cardRef}
              initial="hidden"
              animate={isCardInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                Customised Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                FPGA and AI designs tailored for your specific project needs.
              </p>
            </motion.div>

            {/* Innovative Approach */}
            <motion.div
              className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              ref={cardRef}
              initial="hidden"
              animate={isCardInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                Innovative Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constant research into new technologies for cutting-edge
                solutions.
              </p>
            </motion.div>
          </div>

          {/* Support Message */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            ref={textRef3}
            initial="hidden"
            animate={isTextInView3 ? "visible" : "hidden"}
            variants={textVariants}
          >
            We support your project from concept and design to prototyping,
            testing, and deployment. Our world-class electronic design and
            AI-driven FPGA solutions can accelerate innovation. Talk to
            Logiicdev about realizing your vision today!
          </motion.p>
        </div>
      </section>

      {/* Coming soon projects */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-slate-900">
        <div className="max-w-full mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
            ref={textRef4}
            initial="hidden"
            animate={isTextInView4 ? "visible" : "hidden"}
            variants={textVariants}
          >
            Our Upcoming Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            ref={cardRef2}
            initial="hidden"
            animate={isCardInView2 ? "visible" : "hidden"}
            variants={cardVariants}
          >
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                  Project 1: FPGA based 5G Cobots Bridge
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging FPGA technology to power 5G-enabled collaborative
                  robots (cobots) for advanced industrial automation and
                  real-time connectivity.
                </p>
              </div>
              <img
                src={project1} // Update this path as needed
                alt="FPGA based 5G Cobots bridge"
                className="w-full object-cover"
              />
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                  Project 2: FPGA based 2D Machine Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Implementing FPGA-based 2D machine vision systems to enhance
                  precision and speed in visual data processing for industrial
                  applications.
                </p>
              </div>
              <img
                src={project2} // Update this path as needed
                alt="FPGA based 2D Machine Vision"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default FpgaAndAi;
