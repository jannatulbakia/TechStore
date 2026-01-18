export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              About TechStore
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">More than just a store—we're your tech partners</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Started in 2020, TechStore began with a simple idea: make great technology accessible to everyone. We noticed that finding quality tech products often meant choosing between overpriced name brands or questionable knockoffs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we work directly with manufacturers and carefully curate every product in our catalog. Each item goes through our quality review process to ensure it meets our standards for durability, performance, and value.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl border border-indigo-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">Why Shop With Us?</h3>
              <ul className="space-y-3.5">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-0.5 text-lg">✓</span>
                  <span className="text-gray-700">Curated selection from trusted manufacturers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-0.5 text-lg">✓</span>
                  <span className="text-gray-700">Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-0.5 text-lg">✓</span>
                  <span className="text-gray-700">Fast, reliable shipping worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-0.5 text-lg">✓</span>
                  <span className="text-gray-700">Dedicated support team ready to help</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
