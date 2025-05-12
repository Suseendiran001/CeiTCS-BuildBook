import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, Routes, Route } from 'react-router-dom';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  ArrowDownTrayIcon, 
  KeyIcon, 
  CreditCardIcon,
  BellIcon,
  UserIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// Import client dashboard sub-pages (will create these later)
// import ClientOverview from './Overview';
// import ClientPurchases from './Purchases';
// import ClientDownloads from './Downloads';
// import ClientLicenses from './Licenses';
// import ClientBilling from './Billing';
// import ClientSupport from './Support';
// import ClientSettings from './Settings';

// Sample user data
const USER = {
  name: 'John Anderson',
  email: 'john.anderson@example.com',
  company: 'TechCorp Solutions',
  accountType: 'Business',
  joinDate: 'May 2023',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
};

// Sample purchases data
const PURCHASES = [
  {
    id: 'ORD-2023-05',
    product: 'Employee Management System',
    date: '2023-05-08',
    status: 'Active',
    expiryDate: '2024-05-08',
    version: '3.2.1',
    price: '$1,299'
  },
  {
    id: 'ORD-2023-04', 
    product: 'Payroll Management System',
    date: '2023-05-07',
    status: 'Active',
    expiryDate: '2024-05-07',
    version: '4.1.2',
    price: '$1,499'
  },
  {
    id: 'ORD-2023-02',
    product: 'Document Management System',
    date: '2023-05-05',
    status: 'Active',
    expiryDate: '2024-05-05',
    version: '2.2.0',
    price: '$799'
  }
];

// Sample downloads data
const DOWNLOADS = [
  {
    id: 1,
    product: 'Employee Management System',
    version: '3.2.1',
    size: '45.2 MB',
    lastUpdated: '2023-04-15',
    platform: 'Windows/Mac/Linux',
    downloadUrl: '#'
  },
  {
    id: 2,
    product: 'Payroll Management System',
    version: '4.1.2',
    size: '38.7 MB',
    lastUpdated: '2023-04-10',
    platform: 'Windows/Mac/Linux',
    downloadUrl: '#'
  },
  {
    id: 3,
    product: 'Document Management System',
    version: '2.2.0',
    size: '22.5 MB',
    lastUpdated: '2023-04-05',
    platform: 'Windows/Mac/Linux',
    downloadUrl: '#'
  }
];

// Sample licenses data
const LICENSES = [
  {
    id: 'LIC-2023-EMS-001',
    product: 'Employee Management System',
    type: 'Business',
    maxUsers: 50,
    issuedDate: '2023-05-08',
    expiryDate: '2024-05-08',
    status: 'Active'
  },
  {
    id: 'LIC-2023-PMS-001',
    product: 'Payroll Management System',
    type: 'Enterprise',
    maxUsers: 100,
    issuedDate: '2023-05-07',
    expiryDate: '2024-05-07',
    status: 'Active'
  },
  {
    id: 'LIC-2023-DMS-001',
    product: 'Document Management System',
    type: 'Standard',
    maxUsers: 25,
    issuedDate: '2023-05-05',
    expiryDate: '2024-05-05',
    status: 'Active'
  }
];

// Sample notifications
const NOTIFICATIONS = [
  {
    id: 1,
    title: 'License Expiring Soon',
    message: 'Your Employee Management System license expires in 30 days.',
    date: '2 days ago',
    isRead: false,
    type: 'warning'
  },
  {
    id: 2,
    title: 'New Version Available',
    message: 'A new version of Payroll Management System (v4.1.3) is available for download.',
    date: '1 week ago',
    isRead: true,
    type: 'info'
  },
  {
    id: 3,
    title: 'Purchase Confirmed',
    message: 'Your purchase of Document Management System has been confirmed.',
    date: '2 weeks ago',
    isRead: true,
    type: 'success'
  }
];

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { name: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/dashboard' },
    { name: 'Purchases', icon: <ShoppingBagIcon className="w-5 h-5" />, path: '/dashboard/purchases' },
    { name: 'Downloads', icon: <ArrowDownTrayIcon className="w-5 h-5" />, path: '/dashboard/downloads' },
    { name: 'Licenses', icon: <KeyIcon className="w-5 h-5" />, path: '/dashboard/licenses' },
    { name: 'Billing', icon: <CreditCardIcon className="w-5 h-5" />, path: '/dashboard/billing' },
    { name: 'Support', icon: <QuestionMarkCircleIcon className="w-5 h-5" />, path: '/dashboard/support' },
    { name: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" />, path: '/dashboard/settings' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-xl font-bold text-primary-600">CeiTCS BuildBook</Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
              <img src={USER.avatar} alt={USER.name} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">{USER.name}</h3>
              <p className="text-xs text-gray-500">{USER.company}</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === item.name.toLowerCase() 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(item.name.toLowerCase())}
            >
              <span className={`mr-3 ${
                activeTab === item.name.toLowerCase() ? 'text-primary-700' : 'text-gray-500 group-hover:text-primary-700'
              }`}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Header({ notifications }) {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-900">Client Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="relative p-1 text-gray-600 transition-colors duration-300 rounded-full hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <BellIcon className="w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 z-10 w-80 mt-2 overflow-hidden bg-white rounded-md shadow-lg">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Notifications</h3>
                <button className="text-sm text-primary-600 hover:text-primary-800">
                  Mark all as read
                </button>
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {notification.type === 'warning' && (
                              <div className="p-1 text-yellow-600 bg-yellow-100 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                            )}
                            {notification.type === 'info' && (
                              <div className="p-1 text-blue-600 bg-blue-100 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            )}
                            {notification.type === 'success' && (
                              <div className="p-1 text-green-600 bg-green-100 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                            <p className="mt-1 text-xs text-gray-500">{notification.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No notifications
                  </div>
                )}
              </div>
              
              <div className="p-2 text-center border-t border-gray-200">
                <Link to="/dashboard/notifications" className="text-sm text-primary-600 hover:text-primary-800">
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <Link to="/dashboard/settings" className="text-gray-600 hover:text-primary-600">
            <Cog6ToothIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}

// Overview tab content
function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="p-6 text-white rounded-lg bg-gradient-to-r from-primary-700 to-primary-900">
        <h2 className="text-2xl font-bold">Welcome back, {USER.name}!</h2>
        <p className="mt-2 text-primary-100">
          Manage your software purchases, licenses, and downloads all in one place.
        </p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4 text-blue-600 bg-blue-100 rounded-full">
              <ShoppingBagIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Purchases</p>
              <p className="text-2xl font-semibold text-gray-900">{PURCHASES.length}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4 text-green-600 bg-green-100 rounded-full">
              <ArrowDownTrayIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Downloads</p>
              <p className="text-2xl font-semibold text-gray-900">{DOWNLOADS.length}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4 text-purple-600 bg-purple-100 rounded-full">
              <KeyIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Licenses</p>
              <p className="text-2xl font-semibold text-gray-900">{LICENSES.length}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 mr-4 text-yellow-600 bg-yellow-100 rounded-full">
              <BellIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Notifications</p>
              <p className="text-2xl font-semibold text-gray-900">{NOTIFICATIONS.length}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Purchases */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Purchases</h2>
          <Link to="/dashboard/purchases" className="text-sm font-medium text-primary-600 hover:text-primary-800">
            View all
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {PURCHASES.slice(0, 3).map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{purchase.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{purchase.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{purchase.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{purchase.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/dashboard/purchases/${purchase.id}`} className="text-primary-600 hover:text-primary-800">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent Downloads */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Downloads</h2>
          <Link to="/dashboard/downloads" className="text-sm font-medium text-primary-600 hover:text-primary-800">
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOWNLOADS.slice(0, 3).map((download) => (
            <div key={download.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50">
              <h3 className="mb-2 text-lg font-medium text-gray-900">{download.product}</h3>
              <div className="mb-4 space-y-1">
                <p className="text-sm text-gray-500">Version: {download.version}</p>
                <p className="text-sm text-gray-500">Size: {download.size}</p>
                <p className="text-sm text-gray-500">Updated: {download.lastUpdated}</p>
              </div>
              <a
                href={download.downloadUrl}
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Purchases tab content
function PurchasesTab() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Your Purchases</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Purchase Date</th>
                <th className="px-6 py-3">Expiry Date</th>
                <th className="px-6 py-3">Version</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {PURCHASES.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{purchase.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{purchase.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{purchase.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{purchase.expiryDate}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{purchase.version}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{purchase.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <Link to={`/dashboard/downloads`} className="text-primary-600 hover:text-primary-800">
                        Download
                      </Link>
                      <Link to={`/dashboard/purchases/${purchase.id}`} className="text-primary-600 hover:text-primary-800">
                        Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Downloads tab content
function DownloadsTab() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Software Downloads</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOWNLOADS.map((download) => (
            <div key={download.id} className="overflow-hidden border border-gray-200 rounded-lg hover:shadow-md">
              <div className="p-6">
                <h3 className="mb-2 text-lg font-medium text-gray-900">{download.product}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Version:</span>
                    <span className="text-sm font-medium text-gray-900">{download.version}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">File Size:</span>
                    <span className="text-sm font-medium text-gray-900">{download.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Last Updated:</span>
                    <span className="text-sm font-medium text-gray-900">{download.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Platform:</span>
                    <span className="text-sm font-medium text-gray-900">{download.platform}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <a
                    href={download.downloadUrl}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                    Download Latest Version
                  </a>
                  <Link
                    to={`/dashboard/downloads/${download.id}/history`}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Previous Versions
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Licenses tab content
function LicensesTab() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Your Licenses</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">License ID</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Max Users</th>
                <th className="px-6 py-3">Issue Date</th>
                <th className="px-6 py-3">Expiry Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {LICENSES.map((license) => (
                <tr key={license.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{license.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{license.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{license.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{license.maxUsers}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{license.issuedDate}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{license.expiryDate}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {license.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-primary-600 hover:text-primary-800">
                        View Key
                      </button>
                      <Link to={`/dashboard/licenses/${license.id}`} className="text-primary-600 hover:text-primary-800">
                        Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Billing tab content
function BillingTab() {
  // Sample billing data
  const BILLING_HISTORY = [
    {
      id: 'INV-2023-05',
      date: '2023-05-08',
      amount: '$1,299',
      status: 'Paid',
      method: 'Credit Card (**** 4242)',
      product: 'Employee Management System'
    },
    {
      id: 'INV-2023-04',
      date: '2023-05-07',
      amount: '$1,499',
      status: 'Paid',
      method: 'Credit Card (**** 4242)',
      product: 'Payroll Management System'
    },
    {
      id: 'INV-2023-02',
      date: '2023-05-05',
      amount: '$799',
      status: 'Paid',
      method: 'PayPal',
      product: 'Document Management System'
    }
  ];

  const PAYMENT_METHODS = [
    {
      id: 1,
      type: 'Credit Card',
      cardType: 'Visa',
      last4: '4242',
      expiryDate: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'PayPal',
      email: 'john.anderson@example.com',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Current Payment Methods */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Payment Methods</h2>
          <button className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700">
            Add Payment Method
          </button>
        </div>

        <div className="space-y-4">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                {method.type === 'Credit Card' ? (
                  <div className="p-2 mr-4 text-white bg-blue-600 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                ) : (
                  <div className="p-2 mr-4 text-white bg-blue-600 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900">
                    {method.type === 'Credit Card' 
                      ? `${method.cardType} ending in ${method.last4}` 
                      : `PayPal (${method.email})`}
                  </p>
                  {method.type === 'Credit Card' && (
                    <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
                  )}
                  {method.isDefault && (
                    <span className="inline-flex items-center px-2 py-0.5 mt-1 text-xs font-medium text-primary-800 bg-primary-100 rounded">
                      Default
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!method.isDefault && (
                  <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 rounded hover:bg-gray-100">
                    Set as Default
                  </button>
                )}
                <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 rounded hover:bg-gray-100">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm text-red-600 transition-colors duration-300 rounded hover:bg-red-50">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Billing History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Invoice ID</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Payment Method</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {BILLING_HISTORY.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{invoice.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{invoice.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{invoice.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{invoice.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-500">{invoice.method}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-primary-600 hover:text-primary-800">
                        Download
                      </button>
                      <button className="text-primary-600 hover:text-primary-800">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Support tab content
function SupportTab() {
  // ...existing code...
}

// Settings tab content
function SettingsTab() {
  // Sample user profile data (from the USER constant at the top)
  const [formData, setFormData] = useState({
    name: USER.name,
    email: USER.email,
    company: USER.company,
    phone: '+1 (555) 123-4567',
    address: '123 Business St, Tech City, TC 12345',
    avatar: USER.avatar
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    productUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    orderConfirmations: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prevNotifications => ({
      ...prevNotifications,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (would connect to API in real implementation)
    alert('Profile updated successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Profile Settings</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="w-24 h-24 overflow-hidden rounded-full">
              <img 
                src={formData.avatar} 
                alt={formData.name} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                Change Avatar
              </button>
              <p className="mt-2 text-xs text-gray-500">
                Recommended: Square JPG, PNG, or GIF, at least 200x200 pixels.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block mb-1 text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-700">Business Address</label>
              <textarea
                id="address"
                name="address"
                rows="2"
                value={formData.address}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
      {/* Account Security */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Account Security</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-base font-medium text-gray-900">Change Password</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block mb-1 text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your current password"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block mb-1 text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your new password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Confirm your new password"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="mb-3 text-base font-medium text-gray-900">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Add an extra layer of security to your account.</p>
                <p className="mt-1 text-xs text-gray-500">Currently disabled</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700">
                Enable 2FA
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="mb-3 text-base font-medium text-gray-900">Active Sessions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Windows 11 - Chrome</p>
                  <p className="text-xs text-gray-500">Current session - Last active: Now</p>
                  <p className="text-xs text-gray-500">IP: 192.168.1.1 - Location: New York, USA</p>
                </div>
                <div>
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    Current
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">macOS - Safari</p>
                  <p className="text-xs text-gray-500">Last active: 2 days ago</p>
                  <p className="text-xs text-gray-500">IP: 192.168.1.2 - Location: New York, USA</p>
                </div>
                <button className="px-3 py-1 text-sm text-red-600 transition-colors duration-300 rounded hover:bg-red-50">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Preferences */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Notification Preferences</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Email Updates</h3>
              <p className="text-sm text-gray-500">Receive general updates about your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="emailUpdates"
                checked={notifications.emailUpdates}
                onChange={handleNotificationChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Product Updates</h3>
              <p className="text-sm text-gray-500">Receive notifications when products you own have updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="productUpdates"
                checked={notifications.productUpdates}
                onChange={handleNotificationChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Security Alerts</h3>
              <p className="text-sm text-gray-500">Receive notifications about security issues or suspicious activity</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="securityAlerts"
                checked={notifications.securityAlerts}
                onChange={handleNotificationChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Marketing Emails</h3>
              <p className="text-sm text-gray-500">Receive promotional emails and special offers</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="marketingEmails"
                checked={notifications.marketingEmails}
                onChange={handleNotificationChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Order Confirmations</h3>
              <p className="text-sm text-gray-500">Receive confirmations for orders and purchases</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="orderConfirmations"
                checked={notifications.orderConfirmations}
                onChange={handleNotificationChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end pt-4 mt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
          >
            Save Preferences
          </button>
        </div>
      </div>
      
      {/* Account Management */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-red-600">Account Management</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="mb-2 text-base font-medium text-gray-900">Export Account Data</h3>
            <p className="mb-3 text-sm text-gray-600">Download all data associated with your account including purchases, licenses, and personal information.</p>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
              Export Data
            </button>
          </div>
          
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <h3 className="mb-2 text-base font-medium text-red-700">Delete Account</h3>
            <p className="mb-3 text-sm text-red-600">Permanently delete your account and all associated data. This action cannot be undone.</p>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header notifications={NOTIFICATIONS} />
        
        <main className="flex-1 overflow-y-auto p-6">          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'purchases' && <PurchasesTab />}
          {activeTab === 'downloads' && <DownloadsTab />}
          {activeTab === 'licenses' && <LicensesTab />}
          {activeTab === 'billing' && <BillingTab />}
          {activeTab === 'support' && <SupportTab />}
          {activeTab === 'settings' && <SettingsTab />}
          
          {/* Alternatively, we could use React Router for nested routes:
          <Routes>
            <Route index element={<OverviewTab />} />
            <Route path="purchases" element={<PurchasesTab />} />
            <Route path="downloads" element={<DownloadsTab />} />
            <Route path="licenses" element={<LicensesTab />} />
            <Route path="billing" element={<div>Billing Information Content</div>} />
            <Route path="support" element={<div>Support Content</div>} />
            <Route path="settings" element={<div>Settings Content</div>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          */}
        </main>
      </div>
    </div>
  );
}

export default ClientDashboard;
