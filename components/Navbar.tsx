'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

export default function Navbar() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await api.fetch(api.endpoints.authStatus);
      const data = await response.json();
      setAuthenticated(data.authenticated);
    } catch (err) {
      // Not authenticated
    }
  };

  const handleLogout = async () => {
    try {
      await api.fetch(api.endpoints.logout, {
        method: 'POST',
      });
      setAuthenticated(false);
      router.push('/');
    } catch (err) {
      // Handle error
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="heading-font text-2xl font-bold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors duration-200">
            TechStore
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-all duration-200">
              Home
            </Link>
            <Link href="/items" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-all duration-200">
              Products
            </Link>
            {authenticated && (
              <Link href="/add-item" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-all duration-200">
                Add Item
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {authenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
