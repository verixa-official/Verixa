import React, { useState } from 'react';
import { Moon, Sun, Search } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

const HomePage = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const { products, loading } = useProducts();

  const featuredProduct = products.find(p => p.is_featured);
  const newArrivals = products.filter(p => !p.is_featured);

  const filteredProducts = newArrivals.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-serif tracking-tight">VÉRIXA</h1>
              <nav className="flex gap-8">
                <a href="#" className="text-sm font-medium tracking-wide uppercase">Discover</a>
                <a href="#" className="text-sm tracking-wide uppercase text-gray-400">Following</a>
                <a href="#" className="text-sm tracking-wide uppercase text-gray-400">Creators</a>
                <a href="#" className="text-sm tracking-wide uppercase text-gray-400">Profile</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Search size={20} />
              </button>
              <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium tracking-wide uppercase">
                Join
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
            </div>
          </div>
        </header>

        {/* Featured Product */}
        {featuredProduct && (
          <section className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-[1400px] mx-auto px-8 py-16">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <h2 className="text-xs font-medium tracking-widest uppercase">Trending This Week</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-16 items-center">
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-red-500">
                      {featuredProduct.featured_label}
                    </span>
                    <h3 className="text-5xl font-serif leading-tight">
                      {featuredProduct.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {featuredProduct.featured_description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-light">${featuredProduct.price.toLocaleString()}</span>
                    <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity">
                      Get Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* New Arrivals */}
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-medium tracking-widest uppercase">New Arrivals</h2>
              <div className="flex gap-6">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    activeFilter === 'all' ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setActiveFilter('home')}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    activeFilter === 'home' ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => setActiveFilter('style')}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    activeFilter === 'style' ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                  }`}
                >
                  Style
                </button>
                <button 
                  onClick={() => setActiveFilter('tech')}
                  className={`text-sm tracking-wide uppercase transition-colors ${
                    activeFilter === 'tech' ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                  }`}
                >
                  Tech
                </button>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 dark:bg-gray-800 aspect-[3/4] mb-3" />
                    <div className="bg-gray-200 dark:bg-gray-800 h-4 w-3/4 mb-2" />
                    <div className="bg-gray-200 dark:bg-gray-800 h-3 w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="relative mb-3 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.is_trending && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-white dark:bg-black text-black dark:text-white text-[10px] font-medium tracking-widest uppercase">
                          Trending
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {product.brand}
                        </p>
                      </div>
                      <span className="text-sm font-light whitespace-nowrap">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
