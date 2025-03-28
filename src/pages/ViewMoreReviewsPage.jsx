import React, { useState, useEffect } from 'react';
import ReviewHeader from '../components/ReviewHeader';
import UserReview from '../components/review/UserReview';
import ReviewFilter from '../components/review/ReviewFilter';
import { fetchReviews } from '../api/FetchReviewsApi';

const ViewMoreReviewsPage = () => {
  // Hardcoded product ID sesuai permintaan
  const productId = "67e43b85f7b866622a0d0ef7";
  
  const [reviews, setReviews] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedRating, setSelectedRating] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Format data review
  const formatReview = (review) => ({
    id: review._id,
    rating: review.rating,
    text: review.review_text,
    sizeUser: review.size_user,
    likes: review.ThumbUp_rate,
    userImage: review.image_user,
    date: review.createdAt,
    picture: review.picture,
    hasMedia: review.picture !== ""
  });

  // Fetch data berdasarkan filter
  const loadReviews = async (filterType, rating = null) => {
    try {
      setIsLoading(true);
      let data = [];

      switch (filterType) {
        case 'newest':
          data = await fetchReviews.newest(productId);
          break;
        case 'rating':
          data = await fetchReviews.byRating(productId, rating);
          break;
        case 'photos':
          data = await fetchReviews.withPictures(productId);
          break;
        default:
          data = await fetchReviews.all(productId);
      }

      setReviews(data.map(formatReview));
    } catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update data saat filter berubah
  useEffect(() => {
    loadReviews(activeFilter, selectedRating);
  }, [activeFilter, selectedRating]);

  if (isLoading) {
    return <div className="text-center py-8">Loading reviews...</div>;
  }

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <ReviewHeader reviewCount={reviews.length} />
      
      <div className="w-[389px] px-4 py-2">
        <ReviewFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onRatingSelect={setSelectedRating}
        />

        {reviews.length === 0 ? (
          <p className="text-center py-4">No reviews found</p>
        ) : (
          <div className="space-y-4 mt-2">
            {reviews.map((review) => (
              <UserReview 
                key={review.id}
                ratings={review.rating}
                height={review.sizeUser.height}
                weight={review.sizeUser.weight}
                bust={review.sizeUser.bust}
                waist={review.sizeUser.waist}
                hips={review.sizeUser.hips}
                likes={review.likes}
                desc={review.text}
                userImage={review.userImage}
                picture={review.picture}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMoreReviewsPage;

// nnnnnl
// import React, { useState, useEffect } from 'react';
// import ReviewHeader from '../components/ReviewHeader';
// import UserReview from '../components/review/UserReview';
// import ReviewFilter from '../components/review/ReviewFilter';
// import { getProductById } from '../api/FetchApi';

// const ViewMoreReviewsPage = () => {
//   // ID produk yang tetap (sesuai permintaan)
//   const id = "67e43b85f7b866622a0d0ef7";
  
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Format data review sesuai kebutuhan komponen
//   const formatReviewData = (rawReviews) => {
//     return rawReviews.map(review => ({
//       id: review._id,
//       rating: review.rating,
//       text: review.review_text,
//       sizeUser: review.size_user,
//       likes: review.ThumbUp_rate,
//       userImage: review.image_user,
//       date: review.createdAt,
//       hasMedia: review.picture !== ""
//     }));
//   };

//   // Fetch data menggunakan getProductById
//   const fetchReviews = async () => {
//     try {
//       setIsLoading(true);
//       const response = await getProductById(id); // Menggunakan ID yang sudah ditetapkan
      
//       if (response && response.data && response.data.reviews) {
//         const formattedReviews = formatReviewData(response.data.reviews);
//         setReviews(formattedReviews);
//         setFilteredReviews(formattedReviews);
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Filter dan sorting
//   const applyFilter = (filterType) => {
//     let result = [...reviews];
    
//     switch (filterType) {
//       case 'newest':
//         result.sort((a, b) => new Date(b.date) - new Date(a.date));
//         break;
//       case 'rating':
//         if (selectedRating) {
//           result = reviews.filter(review => review.rating === selectedRating);
//         }
//         break;
//       case 'photos':
//         result = reviews.filter(review => review.hasMedia);
//         break;
//       default:
//         break;
//     }
    
//     setFilteredReviews(result);
//     setActiveFilter(filterType);
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   if (isLoading) {
//     return <div className="text-center py-8">Loading reviews...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center bg-white min-h-screen">
//       <ReviewHeader reviewCount={reviews.length} />
      
//       <div className="w-[389px] px-4 py-2">
//         <ReviewFilter 
//           activeFilter={activeFilter}
//           onFilterChange={applyFilter}
//           onRatingSelect={setSelectedRating}
//         />

//         <div className="space-y-4 mt-2">
//           {filteredReviews.map((review) => (
//             <UserReview 
//               key={review.id}
//               ratings={review.rating}
//               height={review.sizeUser.height}
//               weight={review.sizeUser.weight}
//               bust={review.sizeUser.bust}
//               waist={review.sizeUser.waist}
//               hips={review.sizeUser.hips}
//               likes={review.likes}
//               desc={review.text}
//               userImage={review.userImage}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMoreReviewsPage;

// kkkkk
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ReviewHeader from '../components/ReviewHeader';
// import UserReview from '../components/review/UserReview';
// import ReviewFilter from '../components/review/ReviewFilter';

// const apiUrl = 'https://like-deena-team1revounext-24ba131b.koyeb.app/api/products';

// const ViewMoreReviewsPage = () => {
//   const { id } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Format data review
//   const formatReviewData = (rawReviews) => {
//     return rawReviews.map(review => ({
//       id: review._id,
//       rating: review.rating,
//       text: review.review_text,
//       sizeUser: review.size_user,
//       likes: review.ThumbUp_rate,
//       userImage: review.image_user,
//       date: review.createdAt,
//       hasMedia: review.picture !== ""
//     }));
//   };

//   // Fetch data berdasarkan filter
//   const fetchReviews = async (filterType, rating) => {
//     try {
//       setIsLoading(true);
//       let response;

//       switch (filterType) {
//         case 'newest':
//           response = await axios.get(`${apiUrl}/${id}/sorted`);
//           break;
//         case 'rating':
//           response = await axios.get(`${apiUrl}/${id}/${rating}`);
//           break;
//         case 'photos':
//           response = await axios.get(`${apiUrl}/${id}/picture`);
//           break;
//         default: // 'all'
//           response = await axios.get(`${apiUrl}/${id}`);
//       }

//       const formattedReviews = formatReviewData(response.data.reviews || []);
//       setReviews(formattedReviews);
//       setFilteredReviews(formattedReviews);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handler untuk perubahan filter
//   const handleFilterChange = (filterType) => {
//     if (filterType === 'rating' && selectedRating) {
//       fetchReviews('rating', selectedRating);
//     } else {
//       fetchReviews(filterType);
//     }
//     setActiveFilter(filterType);
//   };

//   // Load data awal
//   useEffect(() => {
//     fetchReviews('all');
//   }, [id]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading reviews...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center bg-white min-h-screen">
//       <ReviewHeader reviewCount={reviews.length} />
      
//       <div className="w-[389px] px-4 py-2">
//         <ReviewFilter 
//           activeFilter={activeFilter}
//           onFilterChange={handleFilterChange}
//           onRatingSelect={setSelectedRating}
//         />

//         {filteredReviews.length === 0 ? (
//           <p className="text-center py-4">No reviews found</p>
//         ) : (
//           <div className="space-y-4 mt-2">
//             {filteredReviews.map((review) => (
//               <UserReview 
//                 key={review.id}
//                 ratings={review.rating}
//                 height={review.sizeUser.height}
//                 weight={review.sizeUser.weight}
//                 bust={review.sizeUser.bust}
//                 waist={review.sizeUser.waist}
//                 hips={review.sizeUser.hips}
//                 likes={review.likes}
//                 desc={review.text}
//                 userImage={review.userImage}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewMoreReviewsPage;
// kkkk

// import React, { useState, useEffect } from 'react';
// import ReviewHeader from '../components/ReviewHeader';
// import UserReview from '../components/review/UserReview';
// import ReviewFilter from '../components/review/ReviewFilter';
// import { getProductById } from '../api/FetchApi';

// const ViewMoreReviewsPage = () => {
//   // ID produk yang tetap 
//   const id = "67e43b85f7b866622a0d0ef7";
  
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Format ulang data review sesuai kebutuhan komponen
//   const formatReviewData = (rawReviews) => {
//     return rawReviews.map(review => ({
//       id: review._id,
//       rating: review.rating,
//       text: review.review_text,
//       sizeUser: review.size_user,
//       likes: review.ThumbUp_rate,
//       userImage: review.image_user,
//       date: review.createdAt,
//       hasMedia: review.picture !== ""
//     }));
//   };

//   // Fetch data pake getProductById
//   const fetchReviews = async () => {
//     try {
//       setIsLoading(true);
//       const response = await getProductById(id); 
      
//       if (response && response.data && response.data.reviews) {
//         const formattedReviews = formatReviewData(response.data.reviews);
//         setReviews(formattedReviews);
//         setFilteredReviews(formattedReviews);
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Filter dan sorting
//   const applyFilter = (filterType) => {
//     let result = [...reviews];
    
//     switch (filterType) {
//       case 'newest':
//         result.sort((a, b) => new Date(b.date) - new Date(a.date));
//         break;
//       case 'rating':
//         if (selectedRating) {
//           result = reviews.filter(review => review.rating === selectedRating);
//         }
//         break;
//       case 'photos':
//         result = reviews.filter(review => review.hasMedia);
//         break;
//       default:
//         break;
//     }
    
//     setFilteredReviews(result);
//     setActiveFilter(filterType);
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   if (isLoading) {
//     return <div className="text-center py-8">Loading reviews...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center bg-white min-h-screen">
//       <ReviewHeader reviewCount={reviews.length} />
      
//       <div className="w-[389px] px-4 py-2">
//         <ReviewFilter 
//           activeFilter={activeFilter}
//           onFilterChange={applyFilter}
//           onRatingSelect={setSelectedRating}
//         />

//         <div className="space-y-4 mt-2">
//           {filteredReviews.map((review) => (
//             <UserReview 
//               key={review.id}
//               ratings={review.rating}
//               height={review.sizeUser.height}
//               weight={review.sizeUser.weight}
//               bust={review.sizeUser.bust}
//               waist={review.sizeUser.waist}
//               hips={review.sizeUser.hips}
//               likes={review.likes}
//               desc={review.text}
//               userImage={review.userImage}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMoreReviewsPage;


// import React, { useState, useEffect } from 'react';
// import ReviewHeader from '../components/ReviewHeader';
// import UserReview from '../components/review/UserReview';
// import ReviewFilter from '../components/review/ReviewFilter'; 
// import { Typography } from '@mui/material';  

// const ViewMoreReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedRating, setSelectedRating] = useState(null);

//   
//   useEffect(() => {
//     const fetchReviews = async () => {
//       // Ganti dengan fetch data sesungguhnya
//       const mockReviews = await fetchReviewsFromAPI(); 
//       setReviews(mockReviews);
//       setFilteredReviews(mockReviews);
//     };
//     fetchReviews();
//   }, []);

//   // Filter reviews berdasarkan pilihan
//   const applyFilter = (filterType) => {
//     let result = [...reviews];
//     switch (filterType) {
//       case 'newest':
//         result.sort((a, b) => new Date(b.date) - new Date(a.date));
//         break;
//       case 'rating':
//         if (selectedRating) {
//           result = reviews.filter(review => review.rating === selectedRating);
//         }
//         break;
//       case 'photos':
//         result = reviews.filter(review => review.hasMedia);
//         break;
//       default: // 'all'
//         break;
//     }
//     setFilteredReviews(result);
//     setActiveFilter(filterType);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center bg-white min-h-screen">
//       <ReviewHeader />
//       <div className="w-[389px] px-4 py-6">
//         {/* Judul dengan total review */}
//         {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//           Reviews ({reviews.length})
//         </Typography> */}

//         {/* Komponen Filter */}
//         <ReviewFilter 
//           activeFilter={activeFilter}
//           onFilterChange={applyFilter}
//           onRatingSelect={setSelectedRating}
//         />

//         {/* Daftar Review */}
//         <div className="mt-4">
//           {filteredReviews.map((review) => (
//             <UserReview 
//               key={review.id}
//               ratings={review.rating}
//               height={review.sizeUser?.height}
//               weight={review.sizeUser?.weight}
//               bust={review.sizeUser?.bust}
//               waist={review.sizeUser?.waist}
//               hips={review.sizeUser?.hips}
//               likes={review.likes}
//               desc={review.text}
//               userImage={review.userImage}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMoreReviewsPage;

// import React from "react";
// import Headers from "../components/Headers";

// const ViewMoreReviewsPage = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <Headers />
//       <h1>Halaman Review</h1> {/* Konten sederhana untuk testing */}
//     </div>
//   );
// };

// export default ViewMoreReviewsPage;