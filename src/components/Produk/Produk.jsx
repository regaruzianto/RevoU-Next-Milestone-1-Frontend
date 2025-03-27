import React from 'react';
import defaultImage from '../../assets/reviewImage.png';
import styles from '../Produk/ProdukDetail.module.css';
import StarRatings from './StarRatings';


function Produk({ produkName, produkImage, produkRating, produkReview }) {


  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[389px]'>
          
            
            <img src={`${produkImage}`} onError={(e) => e.target.src = defaultImage} key={produkImage} alt={produkName} className={styles.imageProduct} />
            <div className={styles.produkContainer}>
                <p className='max-w-[85%] pl-1 text-black text-[18px] font-semibold'>{produkName}</p>

                <div className='flex items-baseline'>
                    <StarRatings rating={produkRating || 1} size={24}/>
                    <p className='text-black text-[9px] ml-2'>{`${produkReview || 0} Reviews`} </p>

                </div>

                <div className='flex justify-between text-[11px] pt-2 px-1 '>
                  <p className='text-black'>M</p>
                  <p className='text-black'>View Size Guide</p>

                </div>          
            </div>            
        </div>        
    </div>
  )
}

export default Produk
