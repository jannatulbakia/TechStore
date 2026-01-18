import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: 'Electronics', icon: '📱', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Accessories', icon: '🎧', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Gadgets', icon: '⌚', gradient: 'from-emerald-500 to-teal-500' },
    { name: 'Computers', icon: '💻', gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/items"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="relative z-10">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
