import {React,  useEffect, useState } from 'react';
import { getProduct, getProductById } from '../api/FetchApi';
import Produk from '../components/Produk/Produk';
import DesignerInfo from '../components/Produk/DesignerInfo';
import ProdukDetail from '../components/Produk/ProdukDetail';
import ReviewPreview from '../components/review/ReviewPreview';
import UserReview from '../components/review/UserReview';
import Headers from '../components/Headers';
import Footers from '../components/Footers';


const MainPage = ()  =>  {
  
  const id = '67e43b85f7b866622a0d0ef7';
  const [product, setProduct] = useState({});
 
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [sizeFit, setSizeFit] = useState({});
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
        const size_fit = response.data.sizeFit;
        setReviews(reviews);
        setSizeFit(size_fit);
        setReviewCount(reviews.length);
        setSizeUser(reviews[0].size_user);
        setLikes(reviews[0].ThumbUp_rate);
        setDesc(reviews[0].review_text);
        setUserImage(reviews[0].image_user);
        
        console.log(sizeFit.small);
      } catch (error) {
        console.log(error);
      };
    };

    fetchData();
  }, []);

  if (!product) {
    return <p>Loading...</p>; // Tampilkan loading jika produk belum ada
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Headers/>
      <Produk produkName={product.name} produkImage={product.image} produkRating={product.rating} produkReview={product.review} />
      <DesignerInfo />
      <ProdukDetail />
      <ReviewPreview reviewCount={reviewCount} value1={parseInt(sizeFit.small)} value2={parseInt(sizeFit.trueToSize)} value3={parseInt(sizeFit.large)} />
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
      <Footers price={product.price}/>
    </div>
  )
}

export default MainPage