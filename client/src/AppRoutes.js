import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboard from './pages/admin/Dashboard';

// Import these pages when they are created
// import AdminProducts from './pages/admin/Products';
// import AdminOrders from './pages/admin/Orders';
// import AdminClients from './pages/admin/Clients';
import ClientDashboard from './pages/client/Dashboard';
// import ClientPurchases from './pages/client/Purchases';
// import ClientDownloads from './pages/client/Downloads';

function AppRoutes() {
  // Mock authentication state (replace with actual auth logic later)
  // For development purposes, set these to true to access protected routes
  const isAuthenticated = true; // Set to true for testing
  const userRole = 'client'; // Set to 'client' or 'admin' for testing

  // Protected route component
  const ProtectedRoute = ({ element, allowedRoles }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }

    return element;
  };

  return (
    <Router>
      <Routes>        {/* Public routes */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/products" element={<MainLayout><ProductsPage /></MainLayout>} />
        <Route path="/products/:slug" element={<MainLayout><ProductDetailPage /></MainLayout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
        
        {/* Protected routes */}
        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute 
              element={<MainLayout><CheckoutPage /></MainLayout>} 
              allowedRoles={['client', 'admin']} 
            />
          } 
        />
        
        {/* Admin routes */}
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute 
              element={<AdminDashboard />} 
              allowedRoles={['admin']} 
            />
          } 
        />
          {/* Protected client routes */}
        <Route 
          path="/dashboard/*" 
          element={
            <ProtectedRoute 
              element={<ClientDashboard />} 
              allowedRoles={['client', 'admin']} 
            />
          } 
        />
        {/* <Route 
          path="/purchases" 
          element={
            <ProtectedRoute 
              element={<MainLayout><ClientPurchases /></MainLayout>} 
              allowedRoles={['client', 'admin']} 
            />
          } 
        />
        <Route 
          path="/downloads" 
          element={
            <ProtectedRoute 
              element={<MainLayout><ClientDownloads /></MainLayout>} 
              allowedRoles={['client', 'admin']} 
            />
          } 
        /> */}
        
        {/* Protected admin routes */}
        {/* <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute 
              element={<AdminDashboard />} 
              allowedRoles={['admin']} 
            />
          } 
        /> */}
        
        {/* Shopping routes */}
        {/* <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute 
              element={<MainLayout><CheckoutPage /></MainLayout>} 
              allowedRoles={['client', 'admin']} 
            />
          } 
        /> */}
        
        {/* Catch-all route */}
        <Route path="*" element={<MainLayout><div className="container p-8 mx-auto text-center"><h1 className="text-4xl font-bold">Page Not Found</h1><p className="mt-4">The page you are looking for does not exist.</p></div></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
