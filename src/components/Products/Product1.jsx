import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import OmniPowerProduct from "../../assets/OmniPowerProduct.png";
import CheckIcon from "../../assets/Check icon.png";
import TranToTech from "../../assets/TransitionToTech.png";
import OmniChart from "../../assets/OmniPowerChart.png";
import WhyOmniPower from "../../assets/WhyOmniPower.png";
import OmniPowerDiagram from "../../assets/OmnipowerDiagram.png";


function Product1() {
  const refe = useRef(null);
  const refe2 = useRef(null);
  const refe3 = useRef(null);
  const refe4 = useRef(null);
  const refe5 = useRef(null);
  const refe6 = useRef(null);
  const isInView = useInView(refe, { once: true, amount: 0.2 });
  const isInView2 = useInView(refe2, { once: true, amount: 0.2 });
  const isInView3 = useInView(refe3, { once: true, amount: 0.2 });
  const isInView4 = useInView(refe4, { once: true, amount: 0.2 });
  const isInView5 = useInView(refe5, { once: true, amount: 0.2 });
  const isInView6 = useInView(refe6, { once: true, amount: 0.2 });

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Cards = [
    {
      title: "Output Characteristics:",
      points: [
        "Output Voltage: 0.8-48V",
        "Output Power: 200W Max",
        "Voltage/Current Ranges:2.5-12V @ 0.1-12A12-24V @ 0.1-8A24-48V @ 0.1-5A",
        "Operating Modes: Constant Current (CC), Constant Voltage (CV), Constant Resistance (CR), Constant Power (CP), Pulsed",
      ],
    },
    {
      title: "Functional Features:",
      points: [
        "Inverter Noise Injection: 0.5-6MHz",
        "Cell Compatibility: Supports 1-6 Cells, modular design for expansion up to 126 cells",
        "Electrochemical Impedance Spectroscopy (EIS)",
        "High-Speed Pulse Mode",
      ],
    },
    {
      title: "User Interface:",
      points: [
        "PC-Based User Interface (UI) with Al Model integration for enhanced control and optimization",
      ],
    },
  ];

  return (
    <section>
      <motion.div
        className="flex flex-col items-center justify-evenly min-h-80 md:min-h-96 bg-purple-300 md:py-32 sm:p-10 rounded-lg md:m-10 dark:bg-[#D4F0F0]"
        initial={{ opacity: 0, y: -50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animation on mount
        exit={{ opacity: 0, y: 50 }} // Animation on unmount
        transition={{ duration: 0.5 }} // Transition timing
      >
        {/* Title Section */}
        <motion.h1
          className="text-3xl leading-relaxed md:mb-14 md:text-6xl font-semibold text-black text-center mb-6 md:leading-relaxed"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Product: OmniPower - Unleash <br /> Your Power-lab Potential
        </motion.h1>

        {/* Search Bar Section */}
        <motion.div
          className="relative w-full max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full pl-10 py-3 md:py-6 md:pl-20 md:text-lg pr-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
          />
          <span className="absolute left-3 md:left-10 top-1/2 transform -translate-y-1/2 text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-8 md:w-8 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </span>
        </motion.div>
      </motion.div>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <motion.div
            ref={refe}
            className="space-y-6 pl-4 ml-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
              Omnipower
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Omnipower: The Patented AI-Powered Motherboard for Advanced Energy
              Applications
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-300 ">
              Omnipower is a patented motherboard engineered exclusively for
              power applications in generation, transmission, storage, and
              energy consumption. Designed with AI capabilities, it serves as a
              specialized testing solution for batteries and power regulators.
              Similar to a computer motherboard in versatility, Omnipower
              enables bi-directional (zero-loss) operation, full digitization,
              and seamless integration of AI/ML technologies for testing,
              monitoring, grading, and predictive analysis. With features like
              real-time monitoring of critical battery parameters and digital
              twin technology, OP enhances battery performance, sustainability,
              and efficiency.
            </p>
            <p className="text-gray-600 text-lg dark:text-gray-300">
              Whether you're developing ICs or systems, the broad portfolio of
              our offerings enables you to select the model that fits your
              needs.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            ref={refe}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img
              src={OmniPowerProduct} // Replace with your actual image path
              alt="Team at work"
              className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
            />
            {/* Adjusted decorative element */}
            <div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Card Components */}

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Output Characteristics */}
        {Cards.map((card, index) => (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 dark:bg-purple-950 dark:text-white"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger animation when card comes into view
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold mb-4" key={index}>
              {card.title}
            </h2>
            <hr className="border-dashed border-purple-800 border-t-2 mb-6 dark:border-purple-400" />
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
          </motion.div>
        ))}
      </div>

      {/* Battery quote */}

      <motion.div
        ref={refe2}
        className="flex justify-center items-center p-6 mt-10"
        initial="hidden"
        animate={isInView2 ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="relative text-center max-w-4xl">
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-purple-400 mx-auto "></div>
          <div className="absolute top-1 left-0 right-0 h-2 bg-violet-500 mx-auto w-1/2"></div>

          {/* Main text */}
          <p className="text-2xl  leading-relaxed font-bold text-pink-800 px-6 py-5 dark:text-blue-200">
            Liberating you from cumbersome lab equipment. Experience the freedom
            to test your batteries effortlessly, all within the compact confines
            of our desktop testing toolbox.
          </p>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-purple-400 mx-auto "></div>
          <div className="absolute bottom-1 left-0 right-0 h-2 bg-violet-500 mx-auto w-1/2"></div>
        </div>
      </motion.div>

      {/* OmniPower Diagram */}
      <motion.div
        className="flex flex-col items-center justify-evenly min-h-80 md:min-h-96  md:py-20 sm:p-10 rounded-lg"
        ref={refe3}
        initial="hidden"
        animate={isInView3 ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <img
          src={OmniPowerDiagram}
          alt=""
          className="shadow-lg rounded-lg bg-white"
        />
      </motion.div>

      {/* Images */}
      {/* <motion.div
        className=" mt-8 rounded-2xl p-6 shadow-lg max-w-lg md:max-w-4xl mx-auto mb-8"
        ref={refe3}
        initial="hidden"
        animate={isInView3 ? "visible" : "hidden"}
        variants={imageVariants}
      >
        {/* Main Product Image */}
      {/* <img
          src={TranToTech} // Add the correct image path here
          alt="Transition to Technology"
          className="mx-auto rounded-lg"
        />
      </motion.div> */}
      {/* <motion.div
        className=" mt-20 rounded-2xl p-6 mx-auto shadow-lg max-w-lg md:max-w-4xl mb-8"
        ref={refe4}
        initial="hidden"
        animate={isInView4 ? "visible" : "hidden"}
        variants={imageVariants}
      >
        {/* Main Product Image */}
      {/* <img
          src={OmniChart} // Add the correct image path here
          alt="Transition to Technology"
          className="mx-auto rounded-lg"
        />
      </motion.div>  */}

      {/* Social Impact of Omnipower */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-16 sm:m-10 lg:gap-24">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center lg:justify-start mb-8 lg:mb-0"
          ref={refe4}
          initial="hidden"
          animate={isInView4 ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img
            src="src/assets/PositiveImpactOmniPower.png" // Replace with your image path
            alt="Project Planning"
            className="w-64 sm:w-96 lg:w-[25rem] xl:w-[45rem] h-auto object-cover rounded-lg bg-white shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-left lg:pl-16" ref={refe4}
        initial="hidden"
        animate={isInView4 ? "visible" : "hidden"}
        variants={textVariants}>
          {/* Tag */}
          <span className="bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4 lg:text-base">
            Social Impact
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Omnipower Vision
          </h1>

          {/* Subheading */}
          <p className="text-gray-700 text-sm sm:text-base lg:text-xl mb-6 dark:text-gray-200">
            To reshape the future of battery testing and mobility through
            cutting-edge AI and promote long-term sustainability for circular
            value chain.
          </p>

          {/* BatteryValue image */}
          <img
            src="src/assets/BatteryValue.png"
            alt=""
            className="rounded-lg xl:w-auto 2xl:h-[230px]"
          />
        </motion.div>
      </section>

      {/* Why OmniPower */}

      <motion.div
        className="text-center"
        ref={refe5}
        initial="hidden"
        animate={isInView5 ? "visible" : "hidden"}
        variants={textVariants}
      >
        <h2 className="text-2xl py- md:text-5xl font-bold md:leading-snug text-gray-800 pt-20 mb-4 dark:text-white">
          Why OmniPower ? <br /> The Future Standard in Battery Testing
        </h2>
      </motion.div>
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-16 sm:m-10"
        ref={refe5}
        initial="hidden"
        animate={isInView5 ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={WhyOmniPower} // Replace with your image path
            alt="Why OmniPower"
            className="w-64 sm:w-96 lg:w-[20rem] xl:w-[36rem] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left lg:pl-12"
          ref={refe6}
          initial="hidden"
          animate={isInView6 ? "visible" : "hidden"}
          variants={textVariants}
        >
          {/* Text */}
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 leading-loose dark:text-gray-200">
            Leading companies like Tesla, Samsung, LG Chemistry, and CATL are
            making significant investments in testing infrastructure and
            manufacturing facilities, including Gigafactories, at comparable
            rates. Despite the projected 60% reduction in battery sales prices
            from $200 per kWh in 2020 to $75 per kWh by 2030, testing costs are
            expected to remain consistent. This underscores the pivotal role of
            test equipment in the battery industry’s success, positioning it as
            a decisive factor over manufacturing operations.
          </p>
        </motion.div>
      </motion.section>
    </section>
  );
}

export default Product1;
