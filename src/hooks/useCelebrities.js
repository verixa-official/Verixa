import { useState, useEffect } from 'react';
import celebritiesData from '../data/celebrities.json';

/**
 * Data access layer for celebrities
 * 
 * IMPORTANT: Isolates data fetching logic for easy migration to Supabase.
 * 
 * Future Supabase implementation:
 * 
 * export const useCelebrities = () => {
 *   const [celebrities, setCelebrities] = useState([]);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchCelebrities = async () => {
 *       const { data, error } = await supabase
 *         .from('celebrities')
 *         .select('*')
 *         .order('created_at', { ascending: false });
 *       
 *       if (!error) setCelebrities(data);
 *       setLoading(false);
 *     };
 *     fetchCelebrities();
 *   }, []);
 * 
 *   return { celebrities, loading };
 * };
 */

export const useCelebrities = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCelebrities(celebritiesData.celebrities);
      setLoading(false);
    }, 100);
  }, []);

  return { celebrities, loading };
};

/**
 * Get a single celebrity by slug
 * 
 * Future Supabase implementation:
 * 
 * export const useCelebrity = (slug) => {
 *   const [celebrity, setCelebrity] = useState(null);
 *   const [brands, setBrands] = useState([]);
 *   const [products, setProducts] = useState([]);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchCelebrity = async () => {
 *       const { data: celebrityData } = await supabase
 *         .from('celebrities')
 *         .select('*')
 *         .eq('slug', slug)
 *         .single();
 *       
 *       const { data: brandsData } = await supabase
 *         .from('brands')
 *         .select('*')
 *         .eq('celebrity_id', celebrityData.id);
 *       
 *       const { data: productsData } = await supabase
 *         .from('products')
 *         .select('*')
 *         .eq('celebrity_id', celebrityData.id);
 *       
 *       setCelebrity(celebrityData);
 *       setBrands(brandsData);
 *       setProducts(productsData);
 *       setLoading(false);
 *     };
 *     
 *     fetchCelebrity();
 *   }, [slug]);
 * 
 *   return { celebrity, brands, products, loading };
 * };
 */

export const useCelebrity = (slug) => {
  const [celebrity, setCelebrity] = useState(null);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundCelebrity = celebritiesData.celebrities.find(c => c.slug === slug);
      
      if (foundCelebrity) {
        const celebrityBrands = celebritiesData.brands.filter(
          b => b.celebrity_id === foundCelebrity.id
        );
        
        const celebrityProducts = celebritiesData.products.filter(
          p => p.celebrity_id === foundCelebrity.id
        );
        
        setCelebrity(foundCelebrity);
        setBrands(celebrityBrands);
        setProducts(celebrityProducts);
      }
      
      setLoading(false);
    }, 100);
  }, [slug]);

  return { celebrity, brands, products, loading };
};
