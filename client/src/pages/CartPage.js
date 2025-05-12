import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrashIcon, 
  ShoppingCartIcon, 
  ShieldCheckIcon,
  CreditCardIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

// Sample cart items - in a real app, this would come from a state management store
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: 'Employee Management System',
    price: 1299,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    license: 'Standard'
  },
  {
    id: 3,
    name: 'Payroll Management System',
    price: 1499,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    license: 'Professional'
  }
];

function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Add tax (assuming 7% tax rate)
  const taxRate = 0.07;
  const tax = subtotal * taxRate;
  
  // Apply discount if coupon is applied
  const discount = couponApplied ? couponDiscount : 0;
  
  // Calculate total
  const total = subtotal + tax - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    // In a real app, this would validate the coupon code with an API
    if (couponCode.toUpperCase() === 'WELCOME20') {
      setCouponApplied(true);
      setCouponDiscount(subtotal * 0.2); // 20% discount
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleClearCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
    setCouponCode('');
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Your Cart</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span>Cart</span>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Cart Items */}
            <motion.div 
              className="w-full lg:w-2/3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">Shopping Cart ({cartItems.length} items)</h2>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col py-6 md:flex-row">
                      <div className="w-full md:w-24 h-24 bg-gray-200 rounded-md mb-4 md:mb-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 md:ml-6">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-600">License: {item.license}</p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <p className="text-lg font-bold text-gray-900">${item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <button 
                              className="w-8 h-8 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              min="1"
                              className="w-12 h-8 mx-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                            />
                            <button 
                              className="w-8 h-8 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="flex items-center text-red-600 hover:text-red-800"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <TrashIcon className="w-5 h-5 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    to="/products" 
                    className="flex items-center text-primary-600 hover:text-primary-800"
                  >
                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                    Continue Shopping
                  </Link>
                  
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => setCartItems([])}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Order Summary */}
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (20%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-6">
                  <label htmlFor="coupon" className="block mb-2 text-sm font-medium text-gray-700">
                    Coupon Code
                  </label>
                  {!couponApplied ? (
                    <div className="flex">
                      <input
                        type="text"
                        id="coupon"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 text-white bg-primary-600 rounded-r-md hover:bg-primary-700"
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2 text-sm text-green-800 bg-green-100 rounded-md">
                      <div className="flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2" />
                        <span>Coupon WELCOME20 applied!</span>
                      </div>
                      <button
                        onClick={handleClearCoupon}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <p className="mt-2 text-xs text-gray-500">Try code "WELCOME20" for 20% off</p>
                </div>
                
                <Link
                  to="/checkout"
                  className="flex items-center justify-center w-full px-6 py-3 mt-8 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  <LockClosedIcon className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </Link>
                
                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="mb-4 text-sm font-medium text-gray-700">We Accept</h3>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 border border-gray-200 rounded-md">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-6" />
                    </div>
                    <div className="p-2 border border-gray-200 rounded-md">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" className="h-6" />
                    </div>
                    <div className="p-2 border border-gray-200 rounded-md">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-6" />
                    </div>
                    <div className="p-2 border border-gray-200 rounded-md">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="American Express" className="h-6" />
                    </div>
                  </div>
                </div>
                
                {/* Security Notice */}
                <div className="flex items-center mt-6 text-sm text-gray-600">
                  <LockClosedIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="p-8 text-center bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <ShoppingCartIcon className="w-20 h-20 mx-auto text-gray-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="mb-8 text-gray-600">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="px-6 py-3 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
            >
              Browse Products
            </Link>
          </motion.div>
        )}
        
        {/* Product Suggestions */}
        {cartItems.length > 0 && (
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* These would be dynamically generated based on user preferences or related products */}
              <div className="p-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-40 mb-4 overflow-hidden bg-gray-200 rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Material Management System" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">Material Management System</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  Efficiently track inventory, supplies, and assets with real-time updates and automated reordering.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">$1,199</span>
                  <button className="text-primary-600 hover:text-primary-800">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="p-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-40 mb-4 overflow-hidden bg-gray-200 rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Customer Relationship Management" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">Customer Relationship Management</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  Manage customer interactions, track sales opportunities, and improve customer service.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">$1,599</span>
                  <button className="text-primary-600 hover:text-primary-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}

export default CartPage;
