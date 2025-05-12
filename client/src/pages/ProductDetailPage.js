import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon, 
  ChevronRightIcon, 
  ShoppingCartIcon, 
  ArrowDownTrayIcon, 
  ComputerDesktopIcon,
  ServerIcon,
  CpuChipIcon,
  GlobeAltIcon,
  WindowIcon,
  CheckIcon,
  ShareIcon,
  ArrowUpIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

// Reusing the product data from ProductsPage
// In a real application, you would fetch this from an API
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
    longDescription: `The Employee Management System is a comprehensive solution designed to streamline all aspects of employee management. From onboarding new hires to tracking performance and managing HR workflows, this system provides a central hub for all employee-related activities.

With our intuitive interface, HR teams can easily maintain employee records, track performance metrics, manage leave requests, and generate insightful reports. The system integrates seamlessly with other HR tools and provides a self-service portal for employees to access their information and submit requests.

Designed with scalability in mind, the Employee Management System can support organizations of all sizes, from startups to large enterprises, making it the ideal solution for growing businesses.`,
    features: [
      'Complete employee profiles and documentation',
      'Automated onboarding and offboarding processes',
      'Performance review system with customizable KPIs',
      'Leave management and approval workflows',
      'Employee self-service portal',
      'Reporting and analytics dashboard',
      'Document management for employee files',
      'Role-based access control',
      'Email notifications for important events',
      'Custom workflow creation for HR processes'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1551434678-bf2c25b895c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1551434678-dc607184a26e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1551434678-b3f8a58562d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Reduce HR administrative workload by up to 70%',
      'Streamline onboarding process and improve new hire experience',
      'Ensure compliance with labor regulations and company policies',
      'Improve employee engagement and satisfaction',
      'Generate insightful reports for better workforce planning'
    ],
    faq: [
      {
        question: 'Can I integrate this with my existing payroll system?',
        answer: 'Yes, our Employee Management System provides API integration with most popular payroll systems, ensuring seamless data flow between platforms.'
      },
      {
        question: 'Is the system compliant with data protection regulations?',
        answer: 'Absolutely. Our system is designed with privacy and security in mind, complying with GDPR, CCPA, and other major data protection regulations.'
      },
      {
        question: 'Can I customize the system to match our company processes?',
        answer: 'Yes, the system offers extensive customization options for workflows, forms, and reports to align with your specific company processes.'
      },
      {
        question: 'How often are updates released?',
        answer: 'We release major updates quarterly and minor updates monthly, ensuring you always have access to the latest features and security patches.'
      },
      {
        question: 'What kind of support is included with the purchase?',
        answer: 'All purchases include 24/7 email support, business hours phone support, and access to our comprehensive knowledge base and tutorial videos.'
      }
    ]
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
    longDescription: `The Attendance Management System is a powerful tool designed to accurately track employee attendance, work hours, and time-off. With multiple clock-in methods including biometric, QR code, and geofencing, this system ensures accurate attendance tracking regardless of where your employees are working from.

Real-time notifications alert managers to attendance issues, while automated reporting simplifies compliance and payroll processing. The system integrates seamlessly with other HR tools and offers a user-friendly interface for both employees and administrators.

Whether you're managing a small team or a large workforce across multiple locations, our Attendance Management System provides the flexibility and features you need to ensure accurate time tracking and attendance management.`,
    features: [
      'Multiple clock-in methods (biometric, QR code, geofencing)',
      'Real-time attendance tracking and notifications',
      'Shift scheduling and rotation management',
      'Overtime calculation and approval workflow',
      'Time-off and leave management',
      'Compliance reporting and audit trails',
      'Mobile app for on-the-go access',
      'Integration with payroll systems',
      'Automated absence tracking',
      'Customizable attendance policies'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1551434678-bf2c25b895c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1551434678-dc607184a26e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Reduce time theft and buddy punching with advanced verification methods',
      'Automate attendance tracking to eliminate manual record keeping',
      'Ensure compliance with labor laws and overtime regulations',
      'Streamline payroll processing with accurate time data',
      'Improve workforce management with detailed attendance analytics'
    ],
    faq: [
      {
        question: 'Does the system work for remote employees?',
        answer: 'Yes, our Attendance Management System includes geofencing, mobile app clock-in, and web-based options that are perfect for remote or distributed teams.'
      },
      {
        question: 'Can I set up different attendance policies for different departments?',
        answer: 'Absolutely. The system allows for department-specific or even role-specific attendance policies, working hours, and shift schedules.'
      },
      {
        question: 'How does the biometric verification work?',
        answer: 'Our system supports various biometric verification methods including fingerprint scanning, facial recognition, and iris scanning, depending on your hardware capabilities.'
      },
      {
        question: 'Can employees see their attendance records?',
        answer: 'Yes, employees have access to a self-service portal where they can view their attendance records, time-off balances, and submit time-off requests.'
      },
      {
        question: 'Is there a mobile app available?',
        answer: 'Yes, we offer mobile apps for both iOS and Android, allowing employees to clock in/out, request time off, and view their attendance records on the go.'
      }
    ]
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
    longDescription: `The Payroll Management System is a comprehensive solution designed to automate and streamline all aspects of payroll processing. From salary calculations and tax deductions to payslip generation and statutory compliance, this system handles the complexities of payroll management with ease.

Our system supports multiple tax jurisdictions and is regularly updated to ensure compliance with changing tax laws and regulations. It integrates seamlessly with your existing accounting software and HR systems, eliminating the need for duplicate data entry and reducing the risk of errors.

With powerful reporting capabilities and audit trails, the Payroll Management System provides complete visibility into your payroll processes, helping you make informed decisions and ensuring compliance with regulatory requirements.`,
    features: [
      'Automated salary processing and calculations',
      'Tax management for multiple jurisdictions',
      'Direct deposit and payment processing',
      'Payslip generation and distribution',
      'Integration with accounting software',
      'Statutory compliance and reporting',
      'Employee self-service portal for payslip access',
      'Multi-currency support for international operations',
      'Comprehensive audit trails for compliance',
      'Advanced security features for sensitive financial data'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Reduce payroll processing time by up to 80%',
      'Eliminate calculation errors and ensure accurate payments',
      'Ensure compliance with tax laws and regulatory requirements',
      'Streamline year-end processing and tax filing',
      'Improve employee satisfaction with accurate and timely payments'
    ],
    faq: [
      {
        question: 'Can the system handle multiple pay frequencies?',
        answer: 'Yes, our Payroll Management System supports various pay frequencies including weekly, bi-weekly, semi-monthly, and monthly payroll cycles.'
      },
      {
        question: 'How does the system stay updated with tax laws?',
        answer: 'We provide regular updates to the system to ensure compliance with changing tax laws and regulations across multiple jurisdictions.'
      },
      {
        question: 'Can employees access their payslips online?',
        answer: 'Yes, the system includes an employee self-service portal where employees can securely access and download their current and historical payslips.'
      },
      {
        question: 'Is the system suitable for international businesses?',
        answer: 'Absolutely. Our Payroll Management System supports multiple currencies and tax jurisdictions, making it ideal for businesses with international operations.'
      },
      {
        question: 'How secure is the payroll data?',
        answer: 'We implement bank-level security measures including encryption, role-based access control, and audit trails to ensure the security and confidentiality of sensitive payroll data.'
      }
    ]
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
    longDescription: `The Material Management System is a comprehensive solution designed to streamline inventory management and asset tracking. This powerful system provides real-time visibility into your inventory levels, automates reordering processes, and helps optimize stock levels to reduce costs.

With advanced tracking capabilities, including barcode and QR code scanning, the system enables efficient inventory counts, reduces human error, and provides accurate data for decision-making. The multi-location support allows businesses to manage inventory across multiple warehouses, stores, or facilities from a centralized platform.

Whether you're managing raw materials, finished goods, or company assets, the Material Management System provides the tools and insights you need to maintain optimal inventory levels, reduce carrying costs, and prevent stockouts.`,
    features: [
      'Real-time inventory tracking and monitoring',
      'Barcode and QR code scanning capabilities',
      'Automated reordering and supplier management',
      'Asset tracking and maintenance scheduling',
      'Multi-location inventory management',
      'Reporting and analytics for stock optimization',
      'Batch and serial number tracking',
      'Mobile app for warehouse operations',
      'Integration with procurement and accounting systems',
      'Inventory forecasting and demand planning'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1595246007497-83905e7631c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1583302729076-1166faeb2a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Reduce inventory carrying costs by up to 30%',
      'Prevent stockouts and production delays',
      'Improve inventory accuracy with barcode scanning',
      'Optimize inventory levels based on usage patterns',
      'Streamline warehouse operations and reduce labor costs'
    ],
    faq: [
      {
        question: 'Can the system manage inventory across multiple locations?',
        answer: 'Yes, our Material Management System is designed to handle multiple warehouses, stores, or facilities, giving you a centralized view of your inventory across all locations.'
      },
      {
        question: 'Does the system support different units of measurement?',
        answer: 'Absolutely. The system supports various units of measurement and conversion between units, making it suitable for different types of inventory items.'
      },
      {
        question: 'Can it handle perishable inventory with expiry dates?',
        answer: 'Yes, the system includes batch and expiry date tracking, ensuring that perishable items are used before expiration and enabling FEFO (First Expired, First Out) inventory management.'
      },
      {
        question: 'Is there a mobile app for warehouse staff?',
        answer: 'Yes, we provide a mobile app that allows warehouse staff to perform inventory counts, receive goods, and process orders using mobile devices with barcode scanning capabilities.'
      },
      {
        question: 'Can the system generate purchase orders automatically?',
        answer: 'Yes, the system can be configured to automatically generate purchase orders when inventory levels fall below specified reorder points, streamlining the procurement process.'
      }
    ]
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
    longDescription: `The Payment Gateway is a comprehensive payment processing solution designed for businesses of all sizes. Whether you're running an e-commerce store, a subscription service, or handling invoicing for clients, our gateway provides secure, reliable payment processing.

With support for multiple payment methods, including credit cards, digital wallets, and bank transfers, this system offers flexibility for both merchants and customers. Advanced fraud detection algorithms help protect your business and customers from unauthorized transactions.

The intuitive dashboard provides real-time insights into your payment activities, making it easy to track transactions, manage refunds, and generate reports. Our automated recurring billing feature is perfect for subscription-based businesses, ensuring timely payments without manual intervention.`,
    features: [
      'Multiple payment method support',
      'Secure transaction processing',
      'Automated recurring billing',
      'Invoicing and payment tracking',
      'Fraud detection and prevention',
      'Comprehensive reporting dashboard',
      'API for custom integration',
      'Multi-currency support',
      'Payment page customization',
      'Customer data vault'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1559067096-49ebca3406aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Increase conversion rates with smooth checkout experiences',
      'Reduce cart abandonment with flexible payment options',
      'Protect your business with advanced fraud detection',
      'Streamline operations with automated billing and invoicing',
      'Gain insights with comprehensive payment analytics'
    ],
    faq: [
      {
        question: 'How secure is the payment processing?',
        answer: 'Our payment gateway utilizes industry-standard encryption and is PCI DSS compliant, ensuring the highest level of security for all transactions.'
      },
      {
        question: 'Can I customize the checkout page?',
        answer: 'Yes, you can fully customize the checkout page to match your brand\'s look and feel, creating a seamless experience for your customers.'
      },
      {
        question: 'What payment methods are supported?',
        answer: 'We support credit/debit cards (Visa, Mastercard, Amex), digital wallets (Apple Pay, Google Pay), bank transfers, and can add support for local payment methods as needed.'
      },
      {
        question: 'How are refunds processed?',
        answer: 'Refunds can be processed easily through the admin dashboard, with options for full or partial refunds. The process is automated and typically completes within 3-5 business days.'
      },
      {
        question: 'Is there a transaction fee?',
        answer: 'The software itself doesn\'t charge transaction fees. You\'ll only pay the standard payment processor fees. Our pricing is a flat rate for the software license.'
      }
    ]
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
    longDescription: `Data/Code Bridge is a revolutionary software solution designed to simplify code conversion and data transformation tasks across different programming languages and data formats. It serves as a vital link for developers and data scientists who work in multi-language environments or need to migrate legacy systems to modern platforms.

Our intelligent mapping engine analyzes source code structure and semantics to produce clean, optimized code in the target language while preserving functionality and logic. The software supports bidirectional conversion between popular languages including Java, C#, Python, JavaScript, TypeScript, and more, eliminating the need for manual rewriting and reducing potential errors.

Beyond code conversion, Data/Code Bridge excels at transforming data between formats like JSON, XML, CSV, YAML, and database structures, making it indispensable for data integration projects. The intuitive interface allows users to define custom conversion rules and templates to handle specific project requirements, while the built-in code quality analyzer ensures the converted code meets industry standards.`,
    features: [
      'Cross-language code conversion and translation',
      'Automated syntax and structure mapping',
      'Data format conversion between JSON, XML, CSV and more',
      'Integration with popular IDEs and development tools',
      'Custom conversion rule definitions',
      'Code quality and optimization suggestions',
      'Batch processing for multiple files',
      'API for programmatic access',
      'Version control integration',
      'Detailed conversion reports and logging'
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
    },
    screenshots: [
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ],
    benefits: [
      'Reduce development time by up to 70% when migrating between languages',
      'Minimize errors and bugs through automated conversion processes',
      'Simplify integration between systems using different technologies',
      'Preserve business logic when updating legacy applications',
      'Streamline data exchange between diverse platforms and formats'
    ],
    faq: [
      {
        question: 'How accurate is the code conversion?',
        answer: 'Our conversion engine achieves 90-95% accuracy for most common programming patterns and constructs. The remaining portions usually involve platform-specific features that may require manual adjustment, which the tool clearly identifies.'
      },
      {
        question: 'Can it handle complex object-oriented code structures?',
        answer: 'Yes, Data/Code Bridge is designed to understand and maintain complex object-oriented patterns including inheritance, polymorphism, interfaces, and design patterns across different languages.'
      },
      {
        question: 'Does it support database query conversion?',
        answer: 'Absolutely! The tool can convert between different SQL dialects (MySQL, PostgreSQL, SQL Server, Oracle) as well as translate between SQL and NoSQL query formats.'
      },
      {
        question: 'How does licensing work for the converted code?',
        answer: 'The converted code belongs entirely to you. Our tool doesn\'t add any proprietary marks or restrictions to the output code, and you retain full rights to use it as you wish.'
      },
      {
        question: 'Can it integrate with our CI/CD pipeline?',
        answer: 'Yes, Data/Code Bridge provides a comprehensive API and command-line interface that can be easily incorporated into automated workflows, including CI/CD pipelines for continuous conversion and validation.'
      }
    ]
  }
];

function ProductDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [shareTooltip, setShareTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const detailsRef = useRef(null);

  // Find the product based on the slug
  const product = PRODUCTS.find(p => p.slug === slug);

  // Set up scroll event to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to details section
  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle share product
  const handleShareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShareTooltip(true);
      setTimeout(() => setShareTooltip(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="p-5 text-center">
          <div className="w-16 h-16 mb-4 mx-auto border-t-4 border-b-4 border-primary-600 rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container p-8 mx-auto text-center">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="mt-4">The product you are looking for does not exist.</p>
        <Link 
          to="/products"
          className="inline-block px-4 py-2 mt-8 text-white rounded-md bg-primary-600 hover:bg-primary-700"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Implement actual cart functionality
  };
  const handleStartDemo = () => {
    console.log(`Starting demo for ${product.name}`);
    
    // Open the appropriate demo URL based on the product name
    let demoUrl = "#";
      if (product.name === "Employee Management System") {
      demoUrl = "https://ceitcs-ems.vercel.app/";
    } else if (product.name === "Material Management System") {
      demoUrl = "https://materialistic-management.vercel.app/";
    } else if (product.name === "Attendance Management System") {
      demoUrl = "https://employe-system-black.vercel.app/";
    } else if (product.name === "Payroll Management System") {
      demoUrl = "https://ceitcs-payroll-system.vercel.app/";
    } else if (product.name === "Payment Gateway") {
      demoUrl = "https://payment-phi-blond.vercel.app/";
    } else if (product.name === "Data/Code Bridge") {
      demoUrl = "https://frontend1-wiod.onrender.com/";
    }
    
    // Open the demo in a new tab
    if (demoUrl !== "#") {
      window.open(demoUrl, "_blank");
    }
  };return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-pattern-grid"></div>
      <div className="container px-5 mx-auto max-w-7xl relative z-10">
        {/* Breadcrumbs with share button */}
        <nav className="mb-6 flex justify-between items-center">
          <ol className="flex text-sm text-gray-600">
            <li className="flex items-center">
              <Link to="/" className="hover:text-primary-600 transition-colors duration-200">Home</Link>
              <ChevronRightIcon className="w-4 h-4 mx-2" />
            </li>
            <li className="flex items-center">
              <Link to="/products" className="hover:text-primary-600 transition-colors duration-200">Products</Link>
              <ChevronRightIcon className="w-4 h-4 mx-2" />
            </li>
            <li className="text-primary-600 font-medium">{product.name}</li>
          </ol>
          <button 
            onClick={handleShareProduct}
            aria-label="Share product"
            className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 relative"
          >
            <ShareIcon className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">Share</span>
            {shareTooltip && (
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Link copied!
              </span>
            )}
          </button>
        </nav>        {/* Hero Section */}
        <div className="relative mb-8 overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 rounded-2xl shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-pattern-dots"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-0 text-center md:text-left"
            >              <div className="flex items-center justify-center md:justify-start mb-2 space-x-3">
                <span className="px-2 py-0.5 text-xs font-semibold text-primary-800 bg-white rounded-full shadow-sm backdrop-blur-sm">{product.category}</span>
                <span className="px-2 py-0.5 text-xs font-semibold text-white bg-primary-600 bg-opacity-70 backdrop-blur-sm rounded-full shadow-sm">Version {product.version}</span>
              </div>
              <h1 className="mb-3 text-4xl font-extrabold text-white drop-shadow-sm tracking-tight">{product.name}</h1>              <div className="flex items-center justify-center md:justify-start mb-3">
                <div className="flex items-center" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-300 fill-current drop-shadow-sm' : 'text-white text-opacity-30'}`} 
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs font-medium text-white">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="max-w-xl text-white text-opacity-90 line-clamp-2 text-sm leading-relaxed font-light">{product.description}</p>
              <div className="mt-4 md:mt-4 hidden md:block">
                <button 
                  onClick={scrollToDetails}
                  className="inline-flex items-center text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 group text-sm"
                  aria-label="View product details"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm px-5 py-2 rounded-lg">
                <div className="text-3xl font-extrabold text-white drop-shadow-sm">${product.price}</div>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center px-6 py-2 font-medium text-primary-700 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl w-full"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
              {product.demoAvailable && (
                <button
                  onClick={handleStartDemo}
                  className="flex items-center justify-center px-4 py-2 font-medium text-white transition-all duration-300 border border-white border-opacity-50 rounded-lg hover:bg-white hover:bg-opacity-20 hover:shadow-md w-full text-sm"
                  aria-label={`Try demo of ${product.name}`}
                >
                  Try Live Demo
                </button>
              )}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-8" id="details" ref={detailsRef}>
          {/* Divider with shadow */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>
          
          {/* Product Details */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">              {/* Tab Navigation */}
              <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <nav className="flex border-b border-gray-200" role="tablist" aria-label="Product Information Tabs">
                  {['overview', 'features', 'specs', 'faq'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      role="tab"
                      aria-selected={activeTab === tab}
                      aria-controls={`${tab}-panel`}
                      id={`${tab}-tab`}
                      className={`py-4 px-6 text-sm font-medium flex-1 text-center transition-all duration-200 ${
                        activeTab === tab
                          ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50 font-semibold'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
                {/* Tab Content */}                
                <motion.div 
                  className="p-8"
                  key={activeTab}
                  id={`${activeTab}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${activeTab}-tab`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div>
                      <p className="mb-8 text-gray-700 leading-relaxed text-base">
                        {product.longDescription || product.description}
                      </p>

                      <h3 className="mb-6 text-xl font-semibold text-gray-900 border-l-4 border-primary-500 pl-3">Key Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">                        {product.benefits ? product.benefits.map((benefit, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start p-5 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{benefit}</span>
                          </motion.div>
                        )) : (
                          <div className="flex items-start p-5 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100">
                            <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">Streamline your business operations with our comprehensive software solution.</span>
                          </div>
                        )}
                      </div>                      <div className="mt-10">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900 border-l-4 border-primary-500 pl-3">Product Tags</h3>
                        <div className="flex flex-wrap gap-3">
                          {product.tags && product.tags.map((tag, index) => (
                            <span key={index} className="px-4 py-2 text-sm bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 border border-primary-200 rounded-full hover:bg-primary-200 hover:text-primary-800 transition-all duration-300 cursor-default shadow-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}                  {/* Features Tab */}
                  {activeTab === 'features' && (
                    <div>
                      <p className="mb-8 text-gray-700 bg-gradient-to-r from-blue-50 to-primary-50 p-5 rounded-lg border-l-4 border-primary-500 shadow-sm">
                        Explore the full range of features and capabilities that {product.name} offers to streamline your business operations.
                      </p>

                      <div className="grid grid-cols-1 gap-5">
                        {product.features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start p-5 transition-all duration-300 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gradient-to-br from-primary-50 to-white hover:shadow-md group"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.07 }}
                          >
                            <CheckIcon className="w-6 h-6 mr-4 text-green-500 flex-shrink-0 group-hover:text-primary-600 transition-colors duration-300" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}                  {/* Technical Specs Tab */}
                  {activeTab === 'specs' && (
                    <div>
                      <p className="mb-8 text-gray-700 bg-gradient-to-r from-blue-50 to-primary-50 p-5 rounded-lg border-l-4 border-primary-500 shadow-sm">
                        Review the technical requirements and specifications for installing and running {product.name}.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">                        <div className="flex items-start p-5 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
                          <ServerIcon className="w-7 h-7 mr-4 text-primary-600 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg mb-1">Deployment Options</h3>
                            <p className="text-gray-700">{product.techSpecs.deployment}</p>
                          </div>
                        </div>                        <div className="flex items-start p-5 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
                          <CpuChipIcon className="w-7 h-7 mr-4 text-primary-600 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg mb-1">System Requirements</h3>
                            <p className="text-gray-700">{product.techSpecs.resources}</p>
                          </div>
                        </div>                        
                        
                        <div className="flex items-start p-5 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
                          <WindowIcon className="w-7 h-7 mr-4 text-primary-600 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg mb-1">Supported OS</h3>
                            <p className="text-gray-700">{product.techSpecs.os}</p>
                          </div>
                        </div>

                        <div className="flex items-start p-5 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
                          <GlobeAltIcon className="w-7 h-7 mr-4 text-primary-600 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg mb-1">Browsers</h3>
                            <p className="text-gray-700">{product.techSpecs.browsers}</p>
                          </div>
                        </div>

                        <div className="flex items-start p-5 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
                          <ComputerDesktopIcon className="w-7 h-7 mr-4 text-primary-600 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-300" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg mb-1">Database</h3>
                            <p className="text-gray-700">{product.techSpecs.database}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}                  {/* FAQ Tab */}
                  {activeTab === 'faq' && (
                    <div>
                      <p className="mb-8 text-gray-700 bg-gradient-to-r from-blue-50 to-primary-50 p-5 rounded-lg border-l-4 border-primary-500 shadow-sm">
                        Find answers to common questions about {product.name}.
                      </p>

                      <div className="space-y-5">
                        {product.faq ? product.faq.map((item, index) => (
                          <motion.div 
                            key={index} 
                            className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-primary-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50 group"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                          >
                            <h3 className="mb-3 font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-lg">{item.question}</h3>
                            <p className="text-gray-700">{item.answer}</p>
                          </motion.div>
                        )) : (
                          <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-white to-gray-50">
                            <h3 className="mb-3 font-semibold text-gray-900 text-lg">How do I install this software?</h3>
                            <p className="text-gray-700">
                              Installation is straightforward with our installation wizard. Once purchased, you'll receive download instructions and an installation guide. Our support team is available to assist if needed.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>              </div>
            </div>
              {/* Sidebar - Purchase Box */}
            <div className="lg:w-1/3">
              <div className="sticky top-20">                <motion.div 
                  className="p-5 bg-white border border-gray-100 rounded-xl shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-primary-100">
                    <h3 className="text-lg font-bold text-gray-900">Purchase Details</h3>
                    <span className="text-xl font-bold text-primary-700">${product.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="px-2 py-1 bg-gray-50 rounded-md text-xs">
                      <span className="text-gray-500">Category: </span>
                      <span className="font-medium text-gray-900">{product.category}</span>
                    </div>
                    <div className="px-2 py-1 bg-gray-50 rounded-md text-xs">
                      <span className="text-gray-500">Version: </span>
                      <span className="font-medium text-gray-900">{product.version}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Quantity:</span>
                      <div className="flex items-center bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 text-gray-600 transition-colors duration-300 rounded-md hover:bg-gray-200 flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          min="1"
                          className="w-10 h-8 text-center bg-transparent border-none focus:outline-none focus:ring-0 text-md font-medium"
                          aria-label="Quantity"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 text-gray-600 transition-colors duration-300 rounded-md hover:bg-gray-200 flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between py-2 mb-3 text-lg font-bold border-t border-b border-gray-100">
                      <span>Total:</span>
                      <span className="text-primary-700">${(product.price * quantity).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mb-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full flex items-center justify-center px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transform hover:-translate-y-1"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCartIcon className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                    
                    {product.demoAvailable && (
                      <button
                        onClick={handleStartDemo}
                        className="w-full flex items-center justify-center px-4 py-2 font-medium border border-primary-300 text-primary-700 transition-all duration-300 rounded-lg bg-gradient-to-r from-white to-primary-50 hover:bg-primary-100 hover:shadow-md"
                        aria-label={`Try demo of ${product.name}`}
                      >
                        Try Live Demo
                      </button>
                    )}
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckIcon className="w-4 h-4 mr-1 text-green-500" />
                        <span>Secure checkout</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckIcon className="w-4 h-4 mr-1 text-green-500" />
                        <span>Free support</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckIcon className="w-4 h-4 mr-1 text-green-500" />
                        <span>Updates included</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckIcon className="w-4 h-4 mr-1 text-green-500" />
                        <span>Money-back guarantee</span>
                      </div>
                    </div>
                  </div>                </motion.div>

                {/* Technical Support */}
                <div className="p-4 mt-3 bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl border border-primary-100 shadow-md">
                  <div className="flex items-center mb-2">
                    <CodeBracketIcon className="w-4 h-4 mr-2 text-primary-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Need Technical Support?</h3>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="#"
                      className="flex-1 px-2 py-1.5 text-xs bg-white text-primary-700 border border-primary-200 rounded-md flex items-center justify-center hover:bg-primary-50 transition-colors duration-300"
                    >
                      <span>Documentation</span>
                    </a>
                    <a
                      href="#"
                      className="flex-1 px-2 py-1.5 text-xs bg-white text-primary-700 border border-primary-200 rounded-md flex items-center justify-center hover:bg-primary-50 transition-colors duration-300"
                    >
                      <span>Contact Support</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 z-50"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

export default ProductDetailPage;
