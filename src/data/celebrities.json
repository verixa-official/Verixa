import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCelebrities } from '../hooks/useCelebrities';

const CelebritiesPage = () => {
  const navigate = useNavigate();
  const { celebrities, loading } = useCelebrities();

  const handleCelebrityClick = (slug) => {
    navigate(`/celebrities/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-serif mb-4">Celebrities</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover the visionaries behind the brands we love
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-800 aspect-[3/4] mb-4" />
                <div className="bg-gray-200 dark:bg-gray-800 h-6 w-2/3 mb-2" />
                <div className="bg-gray-200 dark:bg-gray-800 h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {celebrities.map((celebrity) => (
              <div
                key={celebrity.id}
                onClick={() => handleCelebrityClick(celebrity.slug)}
                className="group cursor-pointer"
              >
                <div className="relative mb-4 overflow-hidden">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-serif mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {celebrity.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {celebrity.descriptor}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CelebritiesPage;
