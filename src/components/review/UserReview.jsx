import React from 'react';
import StarRatings from '../Produk/StarRatings';
import { ThumbUp } from '@mui/icons-material';
import imageProfile from '../../assets/ProfileImage.png';

function UserReview() {
  return (
    <div className='flex flex-col justify-center items-cente w-[349px] mt-1'>
        <div className='w-[350px] h-[2px] bg-[#E5E5E5]'></div>
        <div className='flex justify-between mt-4'>

            <div className='flex gap-x-2'>
                <img 
                src={imageProfile}
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
                />

                
                <div className='flex flex-col'>
                    <StarRatings rating={5} size={16} />
                    <div className='flex gap-x-2 mt-1'>
                        <p className=' text-[9px] text-gray-500'>165cm  65 kg</p>
                        <p className=' text-[9px] text-gray-500'>88/78/110cm</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-x-1 justify-center items-center'>
                <ThumbUp sx={{color: '#075128', width: 16, height: 16}}/>
                <p className='text-[12px]'>(5)</p>
            </div>

        </div>
        <p className='text-[12px] text-justify mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptates, nulla eos laboriosam, sequi excepturi nam repudiandae fugit molestiae explicabo quisquam cumque non dolore, architecto laudantium maxime vero alias. Cum?</p>

    </div>
  )
}

export default UserReview