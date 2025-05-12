import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeftOnRectangleIcon,
  UsersIcon, 
  Cog6ToothIcon, 
  ShoppingBagIcon, 
  ArchiveBoxIcon,
  ChartBarIcon,
  BellIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Sample data for dashboard
const STATS = [
  { name: 'Total Products', value: 8, change: '+12%', icon: <ArchiveBoxIcon className="w-6 h-6" /> },
  { name: 'Active Clients', value: 246, change: '+18%', icon: <UsersIcon className="w-6 h-6" /> },
  { name: 'Monthly Revenue', value: '$28,426', change: '+5.4%', icon: <ChartBarIcon className="w-6 h-6" /> },
  { name: 'Pending Orders', value: 12, change: '-3%', icon: <ShoppingBagIcon className="w-6 h-6" /> }
];

// Sample products for the table
const PRODUCTS = [
  { id: 1, name: 'Employee Management System', category: 'HR', version: '3.2.1', price: '$1,299', sales: 87, status: 'Active' },
  { id: 2, name: 'Attendance Management System', category: 'HR', version: '2.5.0', price: '$899', sales: 64, status: 'Active' },
  { id: 3, name: 'Payroll Management System', category: 'Finance', version: '4.1.2', price: '$1,499', sales: 92, status: 'Active' },
  { id: 4, name: 'Material Management System', category: 'Inventory', version: '3.0.5', price: '$1,199', sales: 76, status: 'Active' },
  { id: 5, name: 'Document Management System', category: 'Admin', version: '2.2.0', price: '$799', sales: 52, status: 'Active' },
];

// Sample recent orders
const RECENT_ORDERS = [
  { id: 'ORD-2023-05', client: 'TechCorp Inc.', product: 'Employee Management System', date: '2023-05-08', total: '$1,299', status: 'Completed' },
  { id: 'ORD-2023-04', client: 'Global Solutions', product: 'Payroll Management System', date: '2023-05-07', total: '$1,499', status: 'Processing' },
  { id: 'ORD-2023-03', client: 'Innovate LLC', product: 'Material Management System', date: '2023-05-06', total: '$1,199', status: 'Pending' },
  { id: 'ORD-2023-02', client: 'Digital Ventures', product: 'Document Management System', date: '2023-05-05', total: '$799', status: 'Completed' },
  { id: 'ORD-2023-01', client: 'NextGen Enterprises', product: 'Attendance Management System', date: '2023-05-04', total: '$899', status: 'Completed' },
];

function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { name: 'Dashboard', icon: <ChartBarIcon className="w-5 h-5" />, value: 'dashboard' },
    { name: 'Products', icon: <ArchiveBoxIcon className="w-5 h-5" />, value: 'products' },
    { name: 'Clients', icon: <UsersIcon className="w-5 h-5" />, value: 'clients' },
    { name: 'Orders', icon: <ShoppingBagIcon className="w-5 h-5" />, value: 'orders' },
    { name: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" />, value: 'settings' },
  ];

  return (
    <div className="bg-primary-800 text-white w-64 h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <h1 className="text-xl font-bold">CeiTCS Admin</h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
                activeTab === item.value 
                  ? 'bg-primary-700 text-white' 
                  : 'text-primary-100 hover:bg-primary-700'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button className="flex items-center w-full px-4 py-2 text-primary-100 transition-colors duration-300 rounded-lg hover:bg-primary-700">
          <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 rounded-full hover:bg-gray-100">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">3</span>
        </button>
        
        <div className="flex items-center">
          <div className="w-8 h-8 overflow-hidden bg-gray-200 rounded-full mr-2">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Admin" 
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm font-medium text-gray-700">Admin User</span>
        </div>
      </div>
    </header>
  );
}

function DashboardTab() {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.name}
            className="p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-md ${
                stat.name === 'Pending Orders' ? 'bg-yellow-100 text-yellow-800' : 'bg-primary-100 text-primary-800'
              }`}>
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-gray-500">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <motion.div
        className="mb-8 overflow-hidden bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <Link 
            to="/admin/orders" 
            className="text-sm font-medium text-primary-600 hover:text-primary-800"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Client</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.product}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.total}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Products Overview */}
      <motion.div
        className="overflow-hidden bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Products Overview</h2>
          <Link 
            to="/admin/products" 
            className="text-sm font-medium text-primary-600 hover:text-primary-800"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Version</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Sales</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.version}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.sales}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}

function ProductsTab() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
        <button className="flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-md shadow-sm bg-primary-600 hover:bg-primary-700">
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add New Product
        </button>
      </div>

      <motion.div
        className="overflow-hidden bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
              />
            </div>
            
            <div className="flex space-x-4">
              <select className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Inventory">Inventory</option>
                <option value="Admin">Admin</option>
              </select>
              
              <select className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Version</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Sales</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{product.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.version}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.sales}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-800 mr-4">Edit</button>
                    <button className="text-sm font-medium text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">8</span> products
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 border border-gray-300 rounded-md bg-primary-50 text-primary-700">
              1
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function ClientsTab() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Clients Management</h1>
      <p className="text-gray-700">Client management interface will be implemented here.</p>
    </div>
  );
}

function OrdersTab() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Orders Management</h1>
      <p className="text-gray-700">Order management interface will be implemented here.</p>
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Settings</h1>
      <p className="text-gray-700">Settings interface will be implemented here.</p>
    </div>
  );
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 ml-64">
        <Header />
        
        <main className="p-8 mt-16">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'clients' && <ClientsTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
