import {React,  useEffect, useState } from 'react';
import { getProduct, getProductById } from '../api/FetchApi';
import Produk from '../components/Produk/Produk';
import DesignerInfo from '../components/Produk/DesignerInfo';
import ProdukDetail from '../components/Produk/ProdukDetail';
import ReviewPreview from '../components/review/ReviewPreview';
import UserReview from '../components/review/UserReview';
import { Diversity1 } from '@mui/icons-material';

const MainPage = ()  =>  {
    
  const [product, setProduct] = useState({});
  const id = '67e2a83ca0bfff6e57fa634e'
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [sizeUser, setSizeUser] = useState({});
  const [likes, setLikes] = useState(0);
  const [desc, setDesc] = useState('');
  const [userImage, setUserImage] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching product...");
        const response = await getProductById(id);
        setProduct(response.data);
        const reviews = response.data.reviews;
        setReviews(reviews);
        setReviewCount(reviews.length);
        setSizeUser(reviews[0].size_user);
        setLikes(reviews[0].ThumbUp_rate);
        setDesc(reviews[0].review_text);
        setUserImage(reviews[0].image_user)
        console.log(reviews[0].size_user.height);
        console.log(reviews[0].ThumbUp_rate);
        console.log(reviews[0].image_user);
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
    <div classname='flex flex-col justify-center items-center'>
      <Produk produkName={product.name} produkImage={product.image} produkRating={product.rating} produkReview={product.review} />
      <DesignerInfo />
      <ProdukDetail />
      <ReviewPreview reviewCount={reviewCount} value1={2} value2={80} value3={10} />
      <UserReview ratings={product.rating} 
      height={sizeUser.height} 
      weight={sizeUser.weight} 
      bust={sizeUser.bust} 
      waist={sizeUser.waist} 
      hips={sizeUser.hips} 
      likes={likes}
      desc={desc}
      userImage={userImage}
      />
    </div>
  )
}

export default MainPage