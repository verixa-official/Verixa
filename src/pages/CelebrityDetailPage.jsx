import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCelebrity } from '../hooks/useCelebrities';

const CelebrityDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { celebrity, brands, products, loading } = useCelebrity(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-800 h-12 w-1/3 mb-8" />
            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="bg-gray-200 dark:bg-gray-800 aspect-square" />
              <div className="space-y-4">
                <div className="bg-gray-200 dark:bg-gray-800 h-8 w-3/4" />
                <div className="bg-gray-200 dark:bg-gray-800 h-4 w-full" />
                <div className="bg-gray-200 dark:bg-gray-800 h-4 w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!celebrity) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Celebrity not found</h1>
          <button
            onClick={() => navigate('/celebrities')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Back to Celebrities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <button
            onClick={() => navigate('/celebrities')}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 uppercase tracking-wide"
          >
            ← Back to Celebrities
          </button>

          <div className="grid grid-cols-2 gap-16 items-center">
            <img
              src={celebrity.image}
              alt={celebrity.name}
              className="w-full aspect-square object-cover"
            />

            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                  {celebrity.descriptor}
                </p>
                <h1 className="text-6xl font-serif leading-tight mb-6">
                  {celebrity.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {celebrity.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      {brands.length > 0 && (
        <section className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto px-8 py-16">
            <h2 className="text-sm font-medium tracking-widest uppercase mb-8">
              Brands
            </h2>
            
            <div className="space-y-6">
              {brands.map((brand) => (
                <div key={brand.id} className="space-y-2">
                  <h3 className="text-3xl font-serif">{brand.name}</h3>
                  {brand.description && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {brand.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-sm font-medium tracking-widest uppercase mb-8">
            Products
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No products available yet.
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => {
                const productBrand = brands.find(b => b.id === product.brand_id);
                
                return (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="relative mb-3 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        {productBrand && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {productBrand.name}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-light whitespace-nowrap">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CelebrityDetailPage;
