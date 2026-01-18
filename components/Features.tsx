export default function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On orders over $100',
      bg: 'bg-blue-50'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Encrypted & protected',
      bg: 'bg-indigo-50'
    },
    {
      icon: '↩️',
      title: 'Easy Returns',
      description: '30-day hassle-free returns',
      bg: 'bg-purple-50'
    },
    {
      icon: '💬',
      title: 'Always Here',
      description: 'Customer support 24/7',
      bg: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bg} p-6 rounded-xl border border-white hover:shadow-md transition-all duration-300 group`}>
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
