import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun, Search } from 'lucide-react';
import HomePage from './pages/HomePage';
import CelebritiesPage from './pages/CelebritiesPage';
import CelebrityDetailPage from './pages/CelebrityDetailPage';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors">
          {/* Header */}
          <header className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-12">
                <Link to="/">
                  <h1 className="text-2xl font-serif tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
                    VÉRIXA
                  </h1>
                </Link>
                <nav className="flex gap-8">
                  <Link
                    to="/"
                    className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    Discover
                  </Link>
                  <a href="#" className="text-sm tracking-wide uppercase text-gray-400">
                    Following
                  </a>
                  <Link
                    to="/celebrities"
                    className="text-sm tracking-wide uppercase text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Celebrities
                  </Link>
                  <a href="#" className="text-sm tracking-wide uppercase text-gray-400">
                    Profile
                  </a>
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

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/celebrities" element={<CelebritiesPage />} />
            <Route path="/celebrities/:slug" element={<CelebrityDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
