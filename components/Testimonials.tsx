export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Enthusiast',
      content: 'I\'ve ordered from TechStore three times now, and every purchase exceeded my expectations. The product quality is outstanding, and shipping was super fast. Will definitely be back!',
      avatar: '👩',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'As someone who buys a lot of tech gear, I can say TechStore has some of the best prices I\'ve seen. Plus their customer support actually responds when you need them. 10/10.',
      avatar: '👨',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Grad Student',
      content: 'Found the perfect laptop bag here at a price that didn\'t break my student budget. It\'s been six months and it still looks brand new. Highly recommend checking them out!',
      avatar: '👩‍🎓',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Loved by Thousands
          </h2>
          <p className="text-gray-600">See what our customers are saying</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-5">
                <div className="text-4xl mr-4 flex-shrink-0">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-0.5">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="mt-2 text-yellow-400 text-sm">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
