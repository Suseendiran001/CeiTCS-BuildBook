import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  StarIcon,
  ArrowDownTrayIcon,
  ShoppingCartIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  ServerIcon,
  CpuChipIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Employee Management System',
    slug: 'employee-management',
    category: 'HR',
    version: '3.2.1',
    rating: 4.8,
    reviews: 145,
    price: 1299,
    description: 'Comprehensive solution for managing employee information, onboarding, performance tracking, and HR workflows.',
    features: [
      'Complete employee profiles and documentation',
      'Automated onboarding and offboarding processes',
      'Performance review system with customizable KPIs',
      'Leave management and approval workflows',
      'Employee self-service portal',
      'Reporting and analytics dashboard'
    ],
    tags: ['HR', 'Employee Data', 'Performance', 'Onboarding'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 4GB RAM, 2 CPU cores',
      database: 'MongoDB',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  },
  {
    id: 2,
    name: 'Attendance Management System',
    slug: 'attendance-management',
    category: 'HR',
    version: '2.5.0',
    rating: 4.6,
    reviews: 98,
    price: 899,
    description: 'Track employee attendance, work hours, and time-off with advanced reporting and integration capabilities.',
    features: [
      'Multiple clock-in methods (biometric, QR code, geofencing)',
      'Real-time attendance tracking and notifications',
      'Shift scheduling and rotation management',
      'Overtime calculation and approval workflow',
      'Time-off and leave management',
      'Compliance reporting and audit trails'
    ],
    tags: ['HR', 'Attendance', 'Time Tracking', 'Scheduling'],
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 2GB RAM, 1 CPU core',
      database: 'MongoDB',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  },
  {
    id: 3,
    name: 'Payroll Management System',
    slug: 'payroll-management',
    category: 'Finance',
    version: '4.1.2',
    rating: 4.9,
    reviews: 210,
    price: 1499,
    description: 'Automate salary calculations, tax deductions, and payslip generation with compliance for multiple tax jurisdictions.',
    features: [
      'Automated salary processing and calculations',
      'Tax management for multiple jurisdictions',
      'Direct deposit and payment processing',
      'Payslip generation and distribution',
      'Integration with accounting software',
      'Statutory compliance and reporting'
    ],
    tags: ['Finance', 'Payroll', 'Accounting', 'Tax'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 4GB RAM, 2 CPU cores',
      database: 'MongoDB',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  },
  {
    id: 4,
    name: 'Material Management System',
    slug: 'material-management',
    category: 'Inventory',
    version: '3.0.5',
    rating: 4.7,
    reviews: 175,
    price: 1199,
    description: 'Efficiently track inventory, supplies, and assets with real-time updates and automated reordering.',
    features: [
      'Real-time inventory tracking and monitoring',
      'Barcode and QR code scanning capabilities',
      'Automated reordering and supplier management',
      'Asset tracking and maintenance scheduling',
      'Multi-location inventory management',
      'Reporting and analytics for stock optimization'
    ],
    tags: ['Inventory', 'Asset Management', 'Supply Chain', 'Procurement'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 4GB RAM, 2 CPU cores',
      database: 'MongoDB',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  },
  {
    id: 5,
    name: 'Payment Gateway',
    slug: 'payment-gateway',
    category: 'Finance',
    version: '2.3.0',
    rating: 4.8,
    reviews: 156,
    price: 1099,
    description: 'Secure and reliable payment processing solution for online transactions and invoicing.',
    features: [
      'Multiple payment method support',
      'Secure transaction processing',
      'Automated recurring billing',
      'Invoicing and payment tracking',
      'Fraud detection and prevention',
      'Comprehensive reporting dashboard'
    ],
    tags: ['Finance', 'Payments', 'E-commerce', 'Security'],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 2GB RAM, 1 CPU core',
      database: 'MongoDB',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  },
  {
    id: 6,
    name: 'Data/Code Bridge',
    slug: 'data-code-bridge',
    category: 'Development',
    version: '2.0.1',
    rating: 4.9,
    reviews: 128,
    price: 1399,
    description: 'Advanced code conversion software for seamless integration between different programming languages and data formats.',
    features: [
      'Cross-language code conversion and translation',
      'Automated syntax and structure mapping',
      'Data format conversion between JSON, XML, CSV and more',
      'Integration with popular IDEs and development tools',
      'Custom conversion rule definitions',
      'Code quality and optimization suggestions'
    ],
    tags: ['Development', 'Code Conversion', 'Integration', 'Programming', 'Data Transformation'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    demoAvailable: true,
    techSpecs: {
      deployment: 'On-premise or Cloud',
      resources: 'Minimum 8GB RAM, 4 CPU cores',
      database: 'SQLite/PostgreSQL',
      os: 'Windows, macOS, Linux',
      browsers: 'Chrome, Firefox, Safari, Edge'
    }
  }
];

// Available categories for filtering
const CATEGORIES = [
  { name: 'All Categories', value: 'all' },
  { name: 'HR', value: 'HR' },
  { name: 'Finance', value: 'Finance' },
  { name: 'Inventory', value: 'Inventory' },
  { name: 'Development', value: 'Development' }
];

// Price ranges for filtering
const PRICE_RANGES = [
  { name: 'All Prices', value: 'all' },
  { name: 'Under $1,000', value: 'under-1000' },
  { name: '$ 1,000 - $1,500', value: '1000-1500' },
  { name: 'Over $1,500', value: 'over-1500' }
];

function ProductCard({ product }) {
  return (    <motion.div 
      className="overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg group hover:shadow-xl w-full h-full flex flex-col border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    ><div className="relative h-52 overflow-hidden">        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
        />        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">          <h3 className="text-3xl font-bold text-white">{product.name}</h3>
        </div>
      </div>
        <div className="p-5 flex flex-col flex-grow border-t border-gray-100"><p className="mb-4 text-sm text-gray-600 line-clamp-3 flex-grow">
          {product.description}
        </p>          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            {product.demoAvailable && (              
              <a 
                href={
                  product.name === "Employee Management System" 
                    ? "https://ceitcs-ems.vercel.app/" 
                    : product.name === "Material Management System"
                    ? "https://materialistic-management.vercel.app/"
                    : product.name === "Attendance Management System"
                    ? "https://employe-system-black.vercel.app/"
                    : product.name === "Payroll Management System"
                    ? "https://ceitcs-payroll-system.vercel.app/"
                    : product.name === "Payment Gateway"
                    ? "https://payment-phi-blond.vercel.app/"
                    : product.name === "Data/Code Bridge"
                    ? "https://ai-frontend-0nsc.onrender.com/"
                    : "#"
                }
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-2 text-primary-600 transition-all duration-300 border border-primary-100 rounded-lg hover:bg-primary-50 hover:shadow-md flex items-center gap-1" 
                title="Try Demo"
              >
                <ArrowsPointingOutIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Demo</span>
              </a>
            )}
          </div>          
          <div>
            <button className="px-3 py-2 text-white transition-all duration-300 rounded-lg bg-primary-600 hover:bg-primary-700 hover:shadow-md flex items-center gap-1">
              <ShoppingCartIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Add</span>
            </button>
          </div>
        </div>        
        <Link 
          to={`/products/${product.slug}`} 
          className="flex items-center justify-center gap-2 w-full py-2.5 mt-4 text-center text-primary-700 transition-colors duration-300 rounded-lg border border-primary-300 hover:bg-primary-50 font-medium group-hover:bg-primary-50"
        >
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Filter products based on search, category, and price range
  const filteredProducts = PRODUCTS.filter(product => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    // Category filter
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Price range filter
    let matchesPrice = true;
    if (selectedPriceRange === 'under-1000') {
      matchesPrice = product.price < 1000;
    } else if (selectedPriceRange === '1000-1500') {
      matchesPrice = product.price >= 1000 && product.price <= 1500;
    } else if (selectedPriceRange === 'over-1500') {
      matchesPrice = product.price > 1500;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="py-10 bg-gray-50">
      <div className="container px-4 mx-auto">        {/* Hero Banner */}
        <div className="relative p-10 mb-12 overflow-hidden text-white rounded-xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-900">
          <div className="relative z-10 max-w-2xl">
            <motion.h1 
              className="mb-4 text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Enterprise-Grade Software Solutions
            </motion.h1>
            <motion.p 
              className="mb-6 text-lg text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Browse through our premium collection of business applications designed to streamline operations and boost productivity.
            </motion.p>
            <motion.div 
              className="flex flex-col max-w-lg sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex-grow">
                <MagnifyingGlassIcon className="absolute top-0 left-0 w-5 h-5 mt-3 ml-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M42.8,-73.1C55.9,-66.1,67.4,-54.8,73.4,-41.1C79.4,-27.4,80,-11.4,77.9,3.6C75.8,18.6,71,32.6,61.6,42C52.3,51.4,38.3,56.2,24.1,61.5C9.9,66.8,-4.6,72.6,-19.5,72.3C-34.4,72,-49.7,65.6,-61.1,54.2C-72.5,42.8,-80,26.4,-81,9.8C-82,-6.8,-76.5,-23.7,-67.3,-36.8C-58,-50,-45,-59.4,-31.6,-66.5C-18.2,-73.6,-4.6,-78.5,9.2,-78.4C22.9,-78.3,41.9,-73.3,53.8,-64.9C65.7,-56.6,69.7,-44.8,67,-31.3C64.3,-17.9,55,-2.7,52.9,13.9C50.8,30.6,56,48.7,50.2,59.6C44.4,70.4,27.7,73.9,10.4,77.1C-6.9,80.3,-24.8,83.2,-40.3,77.7C-55.8,72.3,-68.8,58.5,-76.9,41.9C-85,25.3,-88.2,5.9,-87,-13.9C-85.8,-33.7,-80.2,-53.9,-67.7,-63.6C-55.2,-73.4,-35.8,-72.7,-18.9,-77.8C-2,-82.8,13.3,-93.6,27.8,-91.9C42.4,-90.3,56.2,-76.2,42.8,-73.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64">
            <motion.div 
              className="sticky p-4 bg-white rounded-lg shadow-md top-24"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-600" />
              </div>

              {/* Categories */}
              <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="mb-2 text-md font-semibold text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.value}`}
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={() => setSelectedCategory(category.value)}
                        className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                      />
                      <label htmlFor={`category-${category.value}`} className="ml-2 text-sm text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="mb-2 text-md font-semibold text-gray-900">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <div key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`price-${range.value}`}
                        name="price"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={() => setSelectedPriceRange(range.value)}
                        className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                      />
                      <label htmlFor={`price-${range.value}`} className="ml-2 text-sm text-gray-700">
                        {range.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="mb-2 text-md font-semibold text-gray-900">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Rating (Highest)</option>
                </select>
              </div>

              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                  setSortBy('name');
                }}
                className="w-full px-4 py-2 mt-4 text-sm font-medium text-primary-600 bg-primary-50 rounded-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Reset Filters
              </button>
            </motion.div>
          </div>

          {/* Products Grid */}          <div className="flex-1">            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'} Found
              </h2>
              <div className="text-sm text-gray-600">
                Showing {sortedProducts.length} of {PRODUCTS.length} products
              </div>
            </div>{sortedProducts.length > 0 ? (              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="h-full flex">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-lg shadow">
                <MagnifyingGlassIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">No Products Found</h3>
                <p className="text-gray-600">
                  We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="px-4 py-2 mt-4 text-sm font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlight Section */}
        <section className="mt-16">
          <div className="text-center">
            <motion.h2 
              className="mb-2 text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Our Software
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto mb-12 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our enterprise-grade solutions are designed with your business needs in mind, offering a seamless experience from purchase to implementation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 mb-4 text-white bg-primary-600 rounded-lg w-fit">
                <ArrowDownTrayIcon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Easy Installation</h3>
              <p className="text-gray-600">
                Download and set up our software with minimal technical knowledge using our streamlined installation wizards.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 mb-4 text-white bg-primary-600 rounded-lg w-fit">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Secure Licensing</h3>
              <p className="text-gray-600">
                Our robust licensing system ensures your software is protected while providing flexible deployment options.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-3 mb-4 text-white bg-primary-600 rounded-lg w-fit">
                <ServerIcon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Flexible Deployment</h3>
              <p className="text-gray-600">
                Choose between on-premise installation or cloud-based solutions depending on your infrastructure requirements.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-3 mb-4 text-white bg-primary-600 rounded-lg w-fit">
                <CpuChipIcon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Regular Updates</h3>
              <p className="text-gray-600">
                Benefit from continuous improvements and new features with our automatic update system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="p-8 mt-16 text-white rounded-lg bg-gradient-to-r from-secondary-600 to-secondary-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-2 text-2xl font-bold">Can't find what you're looking for?</h2>
              <p className="text-secondary-100">
                Contact our team for a personalized consultation on finding the right software solution for your business.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3 font-medium text-secondary-800 transition-colors duration-300 bg-white rounded-md hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default ProductsPage;
