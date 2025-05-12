import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CreditCardIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  InformationCircleIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

// Sample cart items - in a real app, this would come from a state management store or context
const CART_ITEMS = [
  {
    id: 1,
    name: 'Employee Management System',
    price: 1299,
    quantity: 1,
    license: 'Standard'
  },
  {
    id: 3,
    name: 'Payroll Management System',
    price: 1499,
    quantity: 1,
    license: 'Professional'
  }
];

// Step components
function BillingStep({ formData, handleChange, nextStep }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900">Billing Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="companyName" className="block mb-1 text-sm font-medium text-gray-700">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.companyName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-700">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
          <div>
            <label htmlFor="city" className="block mb-1 text-sm font-medium text-gray-700">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="country" className="block mb-1 text-sm font-medium text-gray-700">
              Country *
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="BR">Brazil</option>
              <option value="IN">India</option>
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block mb-1 text-sm font-medium text-gray-700">
              Postal Code *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.postalCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="sameAsBilling"
            name="sameAsBilling"
            checked={formData.sameAsBilling}
            onChange={(e) => handleChange({ target: { name: 'sameAsBilling', value: e.target.checked } })}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="sameAsBilling" className="ml-2 text-sm text-gray-700">
            My billing and license information are the same
          </label>
        </div>
        
        {!formData.sameAsBilling && (
          <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="mb-4 text-sm font-medium text-gray-700">License Information</h3>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="licenseCompany" className="block mb-1 text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="licenseCompany"
                  name="licenseCompany"
                  value={formData.licenseCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="licenseEmail" className="block mb-1 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="licenseEmail"
                  name="licenseEmail"
                  value={formData.licenseEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function PaymentStep({ formData, handleChange, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number should be 16 digits';
    }
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (formData.expiryDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date should be in MM/YY format';
    }
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV should be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  // Format credit card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    handleChange({ target: { name: 'cardNumber', value: formattedValue } });
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };

  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    handleChange({ target: { name: 'expiryDate', value: formattedValue } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900">Payment Information</h2>
      
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <div className="flex items-start">
          <InformationCircleIcon className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            This is a demo checkout. No actual payment will be processed. Use any credit card number for testing.
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-4 text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <div className="grid grid-cols-4 gap-4">
            <div className={`p-4 border rounded-md cursor-pointer text-center ${
              formData.paymentMethod === 'creditCard' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-200'
            }`}
            onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'creditCard' } })}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8 mx-auto mb-2" />
              <span className="text-sm">Credit Card</span>
            </div>
            
            <div className={`p-4 border rounded-md cursor-pointer text-center ${
              formData.paymentMethod === 'paypal' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-200'
            }`}
            onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'paypal' } })}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-8 mx-auto mb-2" />
              <span className="text-sm">PayPal</span>
            </div>
            
            <div className={`p-4 border rounded-md cursor-pointer text-center ${
              formData.paymentMethod === 'bankTransfer' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-200'
            }`}
            onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'bankTransfer' } })}
            >
              <svg className="h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm">Bank Transfer</span>
            </div>
            
            <div className={`p-4 border rounded-md cursor-pointer text-center ${
              formData.paymentMethod === 'invoice' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-200'
            }`}
            onClick={() => handleChange({ target: { name: 'paymentMethod', value: 'invoice' } })}
            >
              <svg className="h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-6 8v4h6v-4H7z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm">Invoice</span>
            </div>
          </div>
        </div>
        
        {formData.paymentMethod === 'creditCard' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="cardName" className="block mb-1 text-sm font-medium text-gray-700">
                Cardholder Name *
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Name as it appears on card"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.cardName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.cardName && (
                <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block mb-1 text-sm font-medium text-gray-700">
                Card Number *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <CreditCardIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="expiryDate" className="block mb-1 text-sm font-medium text-gray-700">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="cvv" className="block mb-1 text-sm font-medium text-gray-700">
                  CVV *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="4"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.cvv ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ShieldCheckIcon className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                {errors.cvv && (
                  <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {formData.paymentMethod === 'paypal' && (
          <div className="p-6 mb-6 text-center border border-gray-200 rounded-md bg-gray-50">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-12 mx-auto mb-4" />
            <p className="mb-4 text-gray-700">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>
        )}
        
        {formData.paymentMethod === 'bankTransfer' && (
          <div className="p-6 mb-6 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Bank Transfer Details</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">Bank: <span className="font-medium">CeiTCS National Bank</span></p>
              <p className="text-sm text-gray-700">Account Name: <span className="font-medium">CeiTCS Software Solutions</span></p>
              <p className="text-sm text-gray-700">Account Number: <span className="font-medium">123456789</span></p>
              <p className="text-sm text-gray-700">Routing Number: <span className="font-medium">987654321</span></p>
              <p className="text-sm text-gray-700">Reference: <span className="font-medium">Your Order ID will be provided</span></p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Please include your order ID as a reference when making the bank transfer. Your software will be available for download once payment is confirmed.
            </p>
          </div>
        )}
        
        {formData.paymentMethod === 'invoice' && (
          <div className="p-6 mb-6 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Invoice Payment</h3>
            <p className="mb-4 text-gray-700">
              An invoice will be sent to your billing email address. Your software will be available for download once payment is confirmed.
            </p>
            
            <div className="mb-4">
              <label htmlFor="purchaseOrderNumber" className="block mb-1 text-sm font-medium text-gray-700">
                Purchase Order Number (Optional)
              </label>
              <input
                type="text"
                id="purchaseOrderNumber"
                name="purchaseOrderNumber"
                value={formData.purchaseOrderNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <p className="text-sm text-gray-600">
              Payment terms: 30 days from invoice date.
            </p>
          </div>
        )}
        
        <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) => handleChange({ target: { name: 'agreeToTerms', value: e.target.checked } })}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
              I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-800">Terms of Service</Link>, <Link to="/privacy" className="text-primary-600 hover:text-primary-800">Privacy Policy</Link>, and <Link to="/license" className="text-primary-600 hover:text-primary-800">Software License Agreement</Link>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="mt-1 text-sm text-red-600">You must agree to the terms to continue</p>
          )}
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 text-gray-700 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Back to Billing
          </button>
          
          <button
            type="submit"
            className="px-6 py-2 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
          >
            Review Order
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function ReviewStep({ formData, cart, handleSubmit, prevStep }) {
  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const taxRate = 0.07;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-6 text-xl font-bold text-gray-900">Review Your Order</h2>
      
      <div className="p-6 mb-6 border border-gray-200 rounded-md bg-gray-50">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Order Summary</h3>
        
        <div className="mb-4 overflow-hidden border border-gray-200 rounded-md">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">License</th>
                <th className="px-6 py-3">Qty</th>
                <th className="px-6 py-3 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cart.map((item) => (
                <tr key={item.id} className="bg-white">
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.license}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4 text-right">${(item.price * item.quantity).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan="3" className="px-6 py-3 text-right font-medium">Subtotal</td>
                <td className="px-6 py-3 text-right">${subtotal.toLocaleString()}</td>
              </tr>
              <tr>
                <td colSpan="3" className="px-6 py-3 text-right font-medium">Tax (7%)</td>
                <td className="px-6 py-3 text-right">${tax.toFixed(2)}</td>
              </tr>
              <tr className="bg-gray-50">
                <td colSpan="3" className="px-6 py-3 text-right font-bold">Total</td>
                <td className="px-6 py-3 text-right font-bold">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div className="p-6 border border-gray-200 rounded-md bg-gray-50">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Billing Information</h3>
          <address className="not-italic">
            <p className="mb-2 font-medium">{formData.fullName}</p>
            <p className="mb-2">{formData.companyName}</p>
            <p className="mb-2">{formData.address}</p>
            <p className="mb-2">{formData.city}, {formData.postalCode}</p>
            <p className="mb-2">{formData.country}</p>
            <p className="mb-2">{formData.email}</p>
            {formData.phoneNumber && <p>{formData.phoneNumber}</p>}
          </address>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-md bg-gray-50">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Payment Method</h3>
          {formData.paymentMethod === 'creditCard' && (
            <div>
              <p className="mb-2 font-medium">Credit Card</p>
              <p className="mb-2">Card ending in {formData.cardNumber.slice(-4)}</p>
              <p className="mb-2">Expires: {formData.expiryDate}</p>
              <p>Cardholder: {formData.cardName}</p>
            </div>
          )}
          
          {formData.paymentMethod === 'paypal' && (
            <div>
              <p className="mb-2 font-medium">PayPal</p>
              <p>You will be redirected to PayPal to complete your payment</p>
            </div>
          )}
          
          {formData.paymentMethod === 'bankTransfer' && (
            <div>
              <p className="mb-2 font-medium">Bank Transfer</p>
              <p>Please make payment to the bank account details provided</p>
            </div>
          )}
          
          {formData.paymentMethod === 'invoice' && (
            <div>
              <p className="mb-2 font-medium">Invoice</p>
              <p>An invoice will be sent to your email address</p>
              {formData.purchaseOrderNumber && (
                <p className="mt-2">PO Number: {formData.purchaseOrderNumber}</p>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 mb-6 border border-gray-200 rounded-md bg-yellow-50">
        <div className="flex items-start">
          <InformationCircleIcon className="w-5 h-5 mr-2 text-yellow-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-yellow-800">Important Information</p>
            <p className="text-sm text-yellow-700">
              By completing this purchase, you acknowledge that access to the software will be provided immediately after payment is confirmed, and the standard 30-day refund policy applies.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={prevStep}
          className="px-6 py-2 text-gray-700 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Back to Payment
        </button>
        
        <button
          onClick={handleSubmit}
          className="flex items-center px-6 py-2 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
        >
          <LockClosedIcon className="w-5 h-5 mr-2" />
          Place Order
        </button>
      </div>
    </motion.div>
  );
}

function ConfirmationStep({ orderId }) {
  return (
    <motion.div
      className="p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-white bg-green-500 rounded-full">
        <CheckCircleIcon className="w-12 h-12" />
      </div>
      
      <h2 className="mb-4 text-3xl font-bold text-gray-900">Order Confirmed!</h2>
      <p className="mb-2 text-lg text-gray-600">Thank you for your purchase</p>
      <p className="mb-6 text-gray-600">Order ID: <span className="font-medium">{orderId}</span></p>
      
      <p className="mb-8 text-gray-600">
        We've sent a confirmation email to your inbox with details about your purchase and download instructions.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link 
          to="/downloads" 
          className="px-6 py-2 text-white transition duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
        >
          Go to Downloads
        </Link>
        
        <Link 
          to="/" 
          className="px-6 py-2 text-gray-700 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Return to Home
        </Link>
      </div>
    </motion.div>
  );
}

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing information
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    sameAsBilling: true,
    licenseCompany: '',
    licenseEmail: '',
    
    // Payment information
    paymentMethod: 'creditCard',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    purchaseOrderNumber: '',
    agreeToTerms: false
  });
  
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a random order ID
      const randomOrderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(randomOrderId);
      setStep(4);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container px-4 mx-auto">
        {step < 4 && (
          <div className="mb-8">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Checkout</h1>
            
            {/* Checkout Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-center">
                {['Billing', 'Payment', 'Review'].map((label, index) => (
                  <React.Fragment key={label}>
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        step > index + 1 
                          ? 'bg-green-500 text-white' 
                          : step === index + 1 
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step > index + 1 ? (
                          <CheckCircleIcon className="w-6 h-6" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span className={`mt-2 text-sm ${
                        step === index + 1 ? 'font-medium text-primary-600' : 'text-gray-600'
                      }`}>
                        {label}
                      </span>
                    </div>
                    
                    {index < 2 && (
                      <div className={`w-24 h-1 mx-4 ${
                        step > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-md">
              {step === 1 && (
                <BillingStep 
                  formData={formData} 
                  handleChange={handleChange} 
                  nextStep={nextStep} 
                />
              )}
              
              {step === 2 && (
                <PaymentStep 
                  formData={formData} 
                  handleChange={handleChange} 
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              
              {step === 3 && (
                <ReviewStep 
                  formData={formData}
                  cart={CART_ITEMS}
                  handleSubmit={handleSubmit}
                  prevStep={prevStep}
                />
              )}
              
              {step === 4 && (
                <ConfirmationStep orderId={orderId} />
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          {step < 4 && (
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-xl font-bold text-gray-900">Order Summary</h2>
                
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {CART_ITEMS.map((item) => (
                        <tr key={item.id} className="bg-white">
                          <td className="px-4 py-3">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.license} License × {item.quantity}</p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">${(item.price * item.quantity).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${CART_ITEMS.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span className="font-medium text-gray-900">
                      ${(CART_ITEMS.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.07).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">
                        ${(CART_ITEMS.reduce((acc, item) => acc + item.price * item.quantity, 0) * 1.07).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 mt-6 border border-gray-200 rounded-md bg-gray-50">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Secure Checkout</p>
                      <p className="text-sm text-gray-600">
                        Your payment information is secure. We use industry-standard encryption to protect your data.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-4 py-3 mt-6 text-sm bg-gray-100 rounded-md">
                  <span>Need help?</span>
                  <Link to="/contact" className="text-primary-600 hover:text-primary-800">
                    Contact Support
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
