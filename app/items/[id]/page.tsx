'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { api } from '@/lib/api';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchItem(Number(params.id));
    }
  }, [params.id]);

  const fetchItem = async (id: number) => {
    try {
      const response = await api.fetch(api.endpoints.item(id));
      if (!response.ok) throw new Error('Failed to fetch item');
      const data = await response.json();
      setItem(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading item details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Item not found'}</p>
          <button
            onClick={() => router.push('/items')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Items
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-8 py-12">
        <button
          onClick={() => router.back()}
          className="mb-6 text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-96 md:h-[600px] bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-10">
              <span className="text-xs text-indigo-600 font-medium uppercase tracking-wide">{item.category}</span>
              <h1 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">{item.name}</h1>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
              </div>
              <div className="mb-8">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  item.inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.inStock ? '✓ In Stock' : 'Out of Stock'}
                </span>
              </div>
              <button
                disabled={!item.inStock}
                className={`w-full py-3.5 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  item.inStock
                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {item.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
