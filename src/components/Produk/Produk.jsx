import React from 'react';
import produkImage from '../../assets/reviewImage.png';
import styles from '../Produk/ProdukDetail.module.css';
import StarRatings from './StarRatings';
import DesignerInfo from './DesignerInfo';
import ProdukDetail from './ProdukDetail';

function Produk() {



  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[389px]'>
            
            <img src={produkImage} alt="produk-image" className={styles.imageProduct} />
            <div className={styles.produkContainer}>
                <p className='max-w-[85%] pl-1 text-black text-[18px] font-semibold'>Black kaftan with Embellishment</p>

                <div className='flex items-baseline'>
                    <StarRatings rating={4} size={24}/>
                    <p className='text-black text-[9px] ml-2'> 7 Reviews </p>

                </div>

                <div className='flex justify-between text-[11px] pt-2 px-1 '>
                  <p className='text-black'>M</p>
                  <p className='text-black'>View Size Guide</p>

                </div>          
            </div>            
        </div>
        <div >
          <DesignerInfo/> 
        </div>
        <div >
          <ProdukDetail/>
        </div>
         
    </div>
  )
}

export default Produk
