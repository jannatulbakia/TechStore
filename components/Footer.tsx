import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-24 border-t border-slate-800">
      <div className="container mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="heading-font text-2xl font-bold text-white mb-4">TechStore</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium tech products curated for modern living. Quality you can trust, prices you'll love.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/items" className="text-sm hover:text-white transition-colors duration-200">All Products</Link>
              </li>
              <li>
                <Link href="/login" className="text-sm hover:text-white transition-colors duration-200">Account</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Electronics</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Accessories</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Best Sellers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Get Help</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">support@techstore.com</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">+1 (555) 123-4567</li>
              <li className="text-gray-500">Mon-Fri, 9am-6pm EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
