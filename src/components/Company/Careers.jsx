import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaUserGraduate, FaMoneyBillWave, FaHeart, FaUsers, FaLightbulb } from "react-icons/fa";
import careers1 from "../../assets/careers1.jpg";
import careers3 from "../../assets/careers4.jpeg";

const Careers = () => {
  // Animation References
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  const isTextInView2 = useInView(textRef2, { once: true, amount: 0.2 });
  const isTextInView3 = useInView(textRef3, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-[85vh]">
        <img
          src={careers1}
          alt="People walking and discussing"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay with Text Content */}
      <div className="relative z-2 flex items-center justify-start h-[85vh] px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="bg-white bg-opacity-90 p-6 md:p-10 lg:p-16 rounded-lg max-w-lg sm:max-w-xl md:max-w-2xl dark:bg-blue-300 dark:bg-opacity-90"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Careers at Logiicdev
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 md:mt-6">
            Innovate Your Future With Us
          </p>
          <button className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 dark:bg-blue-900 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
            <Link to="/searchJobs">Search Jobs</Link>
          </button>
        </motion.div>
      </div>

      {/* Why Choose Logiicdev Section */}
      <motion.section
        ref={textRef2}
        initial="hidden"
        animate={isTextInView2 ? "visible" : "hidden"}
        variants={textVariants}
        className="py-16 px-6 md:px-16 bg-white dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Brilliance Today, Impact Tomorrow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            "The Logiicdev team creates pioneering technologies that enhance the connected world, making it safer, smarter, and more secure. We're looking for innovative, passionate, and talented individuals like you to join us in shaping the future."
          </p>
        </div>

        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Career Areas",
              description:
                "Explore our diverse business segments and collaborative functional areas, offering insight into how we work together to drive innovation.",
              icon: <FaBriefcase className="text-3xl text-yellow-500" />,
            },
            {
              title: "Team Member Development and Growth",
              description:
                "Learn about our commitment to skill development through a range of learning opportunities designed to enhance your growth and expand your capabilities.",
              icon: <FaUserGraduate className="text-3xl text-yellow-500" />,
            },
            {
              title: "Compensation and Benefits",
              description:
                "Discover competitive programs aimed at attracting top talent, driving performance, and advancing your career.",
              icon: <FaMoneyBillWave className="text-3xl text-yellow-500" />,
            },
            {
              title: "Corporate Values and Team Member Engagement",
              description:
                "An introduction to our core values, which serve as the foundation of our exceptional company culture.",
              icon: <FaHeart className="text-3xl text-yellow-500" />,
            },
            {
              title: "Team Member Demographics",
              description:
                "A transparent look at our workforce demographics, including insights into management diversity, gender representation, age distribution, and recent hires.",
              icon: <FaUsers className="text-3xl text-yellow-500" />,
            },
            {
              title: "Innovative Projects",
              description:
                "Join us in working on cutting-edge projects that push the boundaries of technology and create lasting impact.",
              icon: <FaLightbulb className="text-3xl text-yellow-500" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-slate-700 shadow-lg rounded-lg text-center"
              initial="hidden"
              animate={isTextInView2 ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Students and New Graduates Section */}
      <motion.div
        ref={textRef3}
        initial="hidden"
        animate={isTextInView3 ? "visible" : "hidden"}
        variants={textVariants}
        className="flex flex-col md:flex-row items-center bg-gray-50 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-0 md:space-x-10 dark:bg-slate-700"
      >
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
          <img
            src={careers3}
            alt="Students working together"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 lg:w-3/5 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Students and New Graduates
          </h2>
          <p className="text-gray-600 text-lg dark:text-gray-200">
            Discover the real-world opportunities and hands-on experiences offers to students, recent graduates, and early-career professionals. Collaborate with industry and innovators, working on cutting-edge technologies that drive the future."
          </p>
          <Link
            to="/opportunities"
            className="text-yellow-600 text-xl md:text-lg font-semibold dark:text-blue-400 hover:underline"
          >
            Opportunities for Students and New Graduates &gt;
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Careers;
