import {React,  useEffect, useState } from 'react';
import { getProduct, getProductById } from '../api/FetchApi';
import Produk from '../components/Produk/Produk';


const MainPage = ()  =>  {
    
  const [product, setProduct] = useState({});
  const id = '67e2a83ca0bfff6e57fa634e'

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching product...");
        const response = await getProductById(id);
        setProduct(response.data);
        console.log(response.data.name);
        console.log(response);
      } catch (error) {
        console.log(error);
      };
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; // Tampilkan loading jika produk belum ada
  }

  return (
    <>
      <Produk produkName={product.name} produkImage={product.image} produkRating={product.rating} produkReview={product.review} />

    </>
  )
}

export default MainPage