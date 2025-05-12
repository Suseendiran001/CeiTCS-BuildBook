import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRightIcon,
  ArrowLongRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CubeIcon,
  ClockIcon,
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  }
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
};

// Add a floating background element that moves with scroll
const FloatingBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.4, 0.6, 0.2]);

  return (
    <motion.div
      className="fixed -z-10 top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y, rotate, scale }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y: y, rotate: rotate, scale: scale }}
      />
    </motion.div>
  );
};

const ProductCard = ({ title, description, image, category, to }) => (
  <motion.div
    className="relative overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg group hover:shadow-xl w-full h-full flex flex-col border border-gray-100"
    whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.99 }}
    variants={fadeInUp}
  >
    <div className="relative h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </div>    <div className="relative p-6 flex flex-col flex-grow">      
      <span className="px-3 py-1 text-xs font-semibold text-white bg-primary-600 rounded-full inline-block self-start mb-2">{category}</span>
      <h3 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">{title}</h3>
      <p className="text-gray-600 flex-grow text-sm mt-2">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center mt-4 text-sm font-medium transition-all duration-300 text-primary-600 hover:text-primary-800"
      >
        <span>Explore details</span>
        <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    className="relative p-6 transition-all duration-300 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg group"
    variants={itemVariants}
    whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
  >
    <div className="flex items-center mb-4 space-x-3">
      <div className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
    <div className="absolute top-0 left-0 w-0 h-1 transition-all duration-300 bg-gradient-to-r from-primary-600 to-secondary-500 group-hover:w-full"></div>
  </motion.div>
);

function HomePage() {
  // Initialize animation controls
  const controls = useAnimation();

  useEffect(() => {
    // Start all animations when component mounts
    controls.start("visible");
  }, [controls]);

  // Parallax scroll effect for hero background
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);  // Sample product data
  const products = [
    {
      id: 1,
      title: "Employee Management System",
      description: "Comprehensive solution for managing employee information, performance, and lifecycle.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "HR",
      to: "/products/employee-management"
    },
    {
      id: 2,
      title: "Attendance Management System",
      description: "Track employee attendance, work hours, and time-off with advanced reporting.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "HR",
      to: "/products/attendance-management"
    },
    {
      id: 3,
      title: "Payroll Management System",
      description: "Automate salary calculations, tax deductions, and payslip generation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Finance",
      to: "/products/payroll-management"
    },
    {
      id: 4,
      title: "Material Management System",
      description: "Efficiently track inventory, supplies, and assets with real-time updates.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Inventory",
      to: "/products/material-management"
    },
    {
      id: 5,
      title: "Payment Gateway",
      description: "Secure and reliable payment processing solution for online transactions and invoicing.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Finance",
      to: "/products/payment-gateway"
    }
  ];
  return (
    <div className="relative overflow-hidden">
      <FloatingBackground />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="2" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="0" cy="0" r="1" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="0" cy="100" r="1" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="100" cy="0" r="1" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="100" cy="100" r="1" fill="rgba(255, 255, 255, 0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
          {/* Abstract shapes */}
          <div className="absolute top-20 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-32 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto pt-2">
          <div className="flex flex-col items-center text-center mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 mb-8 text-sm font-semibold tracking-wider uppercase bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
            >
              <span className="text-secondary-300">Enterprise-Grade</span> Software Solutions
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              Empower Your Business with <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary-300">Premium Software Solutions</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary-500/20 -z-10 skew-x-3"></span>
              </span>
            </motion.h1>

            <motion.p
              className="max-w-2xl mb-10 text-xl text-primary-100/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Discover, purchase, and implement powerful business applications
              designed to streamline operations and boost productivity.
            </motion.p>

            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >              <motion.div>
                <Link
                  to="/products"
                  className="flex items-center px-7 py-3.5 text-lg font-medium text-primary-700 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-50 hover:transform hover:translateY(-2px) group"
                >
                  <span>Browse Products</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div>
                <Link
                  to="/register"
                  className="flex items-center px-7 py-3.5 text-lg font-medium text-primary-700 transition-all duration-300 border border-white/50 rounded-lg backdrop-blur-sm bg-white shadow-lg hover:bg-gray-50 hover:transform hover:translateY(-2px) group"
                >                  
                <span>Create Account</span>
                <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute left-10 top-1/4 hidden lg:block">
            <motion.div
              className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="absolute right-10 bottom-1/3 hidden lg:block">
            <motion.div
              className="w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>        
        {/* Enhanced Wave SVG */}
        <div className="absolute -bottom-16 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,149.3C560,160,640,224,720,218.7C800,213,880,139,960,122.7C1040,107,1120,149,1200,181.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>        
        </div>      </section>      
      {/* Featured Products Section */}
      <section className="pt-12 pb-12 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="product-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" className="text-primary-300/20" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#product-grid)" />
            </svg>
          </div>
        </div>        
        {/* Simple background gradient */}        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-secondary-50/30 -z-10"></div>        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 mt-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >              <span
                className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary-700 uppercase bg-primary-100 rounded-full mb-5"
              >
                Our Solutions
              </span>              <h2
                className="mb-5 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 md:text-4xl lg:text-5xl"
              >
                Our Featured Products
              </h2><p
                className="max-w-2xl mx-auto mb-10 text-lg text-gray-600"
              >
                Enterprise-grade solutions designed to streamline your business operations.
              </p>
            </motion.div>
          </div>          {/* Product Cards Grid */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="h-full flex"
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >            <div className="inline-block">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-primary-600 rounded-lg shadow-md hover:shadow-lg hover:bg-primary-700 group"
              >
                <span>View All Products</span>
                <ChevronRightIcon className="w-5 h-5 ml-3 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>      {/* Features Section */}
      <section className="py-12 -mt-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-50 z-0"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full filter blur-3xl opacity-70 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-secondary-100 to-secondary-50 rounded-full filter blur-3xl opacity-70 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-8">
            <motion.span
              className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-secondary-700 uppercase bg-secondary-100 rounded-full mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Choose CeiTCS BuildBook
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto mb-0 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our platform offers a seamless experience from discovery to implementation of business software solutions.
            </motion.p>
          </div>          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeatureItem
              icon={<RocketLaunchIcon className="w-6 h-6" />}
              title="Instant Deployment"
              description="Download and set up software instantly with our streamlined installation process."
            />
            <FeatureItem
              icon={<UserGroupIcon className="w-6 h-6" />}
              title="Enterprise Support"
              description="Get professional installation and continuous technical support for all products."
            />
            <FeatureItem
              icon={<SparklesIcon className="w-6 h-6" />}
              title="Try Before You Buy"
              description="Test full-featured demos to ensure the software fits your specific needs."
            />
            <FeatureItem
              icon={<CubeIcon className="w-6 h-6" />}
              title="Customizable Solutions"
              description="Tailor our software to match your unique business processes and workflows."
            />
            <FeatureItem
              icon={<ClockIcon className="w-6 h-6" />}
              title="Regular Updates"
              description="Benefit from continuous improvements and new features with automatic updates."
            />
            <FeatureItem
              icon={<ShieldCheckIcon className="w-6 h-6" />}
              title="Secure Licensing"
              description="Protect your investment with our robust licensing and validation system."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 via-secondary-700 to-secondary-800 z-0"></div>
        <div className="absolute inset-0 opacity-25 z-10">
          <svg className="absolute right-0 top-0 h-full opacity-20" width="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="white" strokeWidth="2">
              <circle cx="200" cy="200" r="50" />
              <circle cx="200" cy="200" r="100" />
              <circle cx="200" cy="200" r="150" />
              <circle cx="200" cy="200" r="200" />
            </g>
          </svg>
          <svg className="absolute left-0 bottom-0 h-full opacity-20" width="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="white" strokeWidth="2">
              <circle cx="200" cy="200" r="50" />
              <circle cx="200" cy="200" r="100" />
              <circle cx="200" cy="200" r="150" />
              <circle cx="200" cy="200" r="200" />
            </g>
          </svg>
        </div>

        <div className="container px-4 mx-auto relative z-20">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <motion.span
              className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-white/20 backdrop-blur-sm rounded-full mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get Started Today
            </motion.span>

            <motion.h2
              className="mb-6 text-3xl font-bold text-white sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 50
              }}
            >
              Ready to Transform Your Business?
            </motion.h2>

            <motion.p
              className="mb-10 text-xl text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of businesses that have improved their operations with our software solutions.
              Take the first step towards greater efficiency and productivity today.
            </motion.p>

            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >              <motion.div>
                <Link
                  to="/register"
                  className="flex items-center px-8 py-4 text-lg font-medium text-secondary-700 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:transform hover:translateY(-2px) group"
                >
                  <span>Get Started Now</span>
                  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div>
                <Link
                  to="/contact"
                  className="flex items-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 border border-white/50 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 shadow-lg hover:transform hover:translateY(-2px) group"
                >
                  <span>Contact Sales</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white opacity-50"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <motion.span
              className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary-700 uppercase bg-primary-100 rounded-full mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Advanced Technology
            </motion.span>
            <motion.h2
              className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Cutting-Edge Solutions for Modern Businesses
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our software leverages cutting-edge technologies for optimal performance, security, and scalability.
            </motion.p>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <RocketLaunchIcon className="w-8 h-8 text-primary-500" />, label: "Fast Performance" },
                    { icon: <ShieldCheckIcon className="w-8 h-8 text-primary-500" />, label: "Enterprise Security" },
                    { icon: <CubeIcon className="w-8 h-8 text-primary-500" />, label: "Modular Design" },
                    { icon: <SparklesIcon className="w-8 h-8 text-primary-500" />, label: "Smart Features" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-xl"
                      whileHover={{ boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.icon}
                      <span className="mt-2 font-medium text-gray-700">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-xl text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-white p-2 rounded-full">
                      <SparklesIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Cutting-Edge Innovation</h4>
                      <p className="text-sm text-white/80">Always at the forefront of technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -z-10 -translate-x-1/4 -translate-y-1/4 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -z-10 translate-x-1/4 translate-y-1/4 animate-blob animation-delay-2000"></div>
            </motion.div>
            <div className="space-y-5">
              {[
                {
                  title: "Cloud-Native Architecture",
                  description: "Built for the cloud with scalable, resilient microservices architecture.",
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" /></svg>
                },
                {
                  title: "AI-Powered Analytics",
                  description: "Leverage machine learning to gain actionable insights from your business data.",
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                },
                {
                  title: "Seamless Integration",
                  description: "Easily connect with your existing systems and third-party services.",
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1zM13 12a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zm1 2v1h1v-1h-1z" clipRule="evenodd" /></svg>
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:transform hover:translateY(-2px) transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <Link
                  to="/about-technology"
                  className="inline-flex items-center px-5 py-3 text-base font-medium text-primary-600 transition-all duration-300 border border-primary-600 rounded-lg hover:bg-primary-50 hover:transform hover:translateY(-2px) group"
                >
                  <span>Learn About Our Technology</span>
                  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
