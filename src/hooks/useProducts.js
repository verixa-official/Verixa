import { useState, useEffect } from 'react';
import dealsData from '../data/deals.json';

/**
 * Data access layer for products
 * 
 * IMPORTANT: This hook isolates all data fetching logic.
 * When migrating to Supabase:
 * 1. Replace the import with Supabase client
 * 2. Replace the setTimeout with actual Supabase query
 * 3. Keep the same return interface { products, loading }
 * 
 * Example future implementation:
 * 
 * import { supabase } from '../lib/supabase';
 * 
 * export const useProducts = () => {
 *   const [products, setProducts] = useState([]);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchProducts = async () => {
 *       const { data, error } = await supabase
 *         .from('products')
 *         .select('*')
 *         .order('created_at', { ascending: false });
 *       
 *       if (!error) setProducts(data);
 *       setLoading(false);
 *     };
 *     
 *     fetchProducts();
 *   }, []);
 * 
 *   return { products, loading };
 * };
 */

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay for realistic UX
    setTimeout(() => {
      setProducts(dealsData.products);
      setLoading(false);
    }, 100);
  }, []);

  return { products, loading };
};
