import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnpNMjYgMjZjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yek0xNiAxNmMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="relative container mx-auto px-5 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-sm text-indigo-200 mb-6">
            New arrivals every week
          </div>
          <h1 className="heading-font text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tech that makes
            <span className="block text-indigo-400 mt-2">your life better</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Curated selection of premium tech products. From everyday essentials to cutting-edge innovations, we've got what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/items"
              className="px-8 py-3.5 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="px-8 py-3.5 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
