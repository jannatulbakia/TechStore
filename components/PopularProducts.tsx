'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export default function PopularProducts() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setItems(data.slice(0, 4));
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch items:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Customer Favorites
          </h2>
          <p className="text-gray-600">Our most popular picks this month</p>
        </div>
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-500">Loading products...</p>
          </div>
        ) : items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!item.inStock && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs text-indigo-600 font-medium uppercase tracking-wide">{item.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        ) : null}
        {items.length > 0 && (
        <div className="text-center mt-12">
          <Link
            href="/items"
            className="inline-block px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
