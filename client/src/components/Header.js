import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { 
  ChevronDownIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  BellIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-base font-medium text-gray-700 transition duration-300 rounded-md hover:bg-gray-100 hover:text-primary-600"
  >
    {children}
  </Link>
);

function Header() {
  // Mock user authentication state (replace with actual auth logic later)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for testing
  const [userRole, setUserRole] = useState('client'); // Set to 'client' or 'admin' for testing
  const [cartItemCount, setCartItemCount] = useState(3); // For testing
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto font-nunito">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div 
                className="text-2xl font-bold text-primary-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                CeiTCS BuildBook
              </motion.div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/solutions">Solutions</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <motion.div 
              className="p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </motion.div>

            <motion.div 
              className="p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BellIcon className="w-5 h-5" />
            </motion.div>            <motion.div 
              className="relative p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/cart">
                <ShoppingCartIcon className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-primary-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </motion.div>

            {/* User Menu */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-600 transition duration-300 rounded-full hover:bg-gray-100">
                <motion.div 
                  className="p-2 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <UserIcon className="w-5 h-5" />
                </motion.div>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >                <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {isAuthenticated ? (
                    <>                      <div className="px-4 py-3">
                        <p className="text-base">Signed in as</p>
                        <p className="text-base font-medium text-gray-900 truncate">
                          john.anderson@example.com
                        </p>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link                              to="/dashboard"
                              className={`${
                                active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-base`}
                            >
                              Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link                              to="/dashboard/purchases"
                              className={`${
                                active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-base`}
                            >
                              My Purchases
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link                              to="/dashboard/downloads"
                              className={`${
                                active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-base`}
                            >
                              Downloads
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        {userRole === 'admin' && (
                          <Menu.Item>
                            {({ active }) => (
                              <Link                                to="/admin"
                                className={`${
                                  active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                                } group flex items-center px-4 py-2 text-base`}
                              >
                                Admin Panel
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) => (
                            <Link                              to="/dashboard/settings"
                              className={`${
                                active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                              } group flex items-center px-4 py-2 text-base`}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button                              onClick={() => setIsAuthenticated(false)}
                              className={`${
                                active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                              } group flex w-full items-center px-4 py-2 text-base`}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </>
                  ) : (
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link                            to="/login"
                            className={`${
                              active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                            } group flex items-center px-4 py-2 text-base`}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link                            to="/register"
                            className={`${
                              active ? 'bg-gray-100 text-primary-600' : 'text-gray-700'
                            } group flex items-center px-4 py-2 text-base`}
                          >
                            Register
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
