import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-5 lg:px-8 text-center">
        <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4">
          Ready to Upgrade Your Tech?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
          Join thousands of satisfied customers. Start exploring our curated collection of premium tech products today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/items"
            className="px-8 py-3.5 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Browse Products
          </Link>
          <Link
            href="/login"
            className="px-8 py-3.5 border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}
