import {React, useState, useEffect} from 'react';
import StarRatings from '../Produk/StarRatings';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import imageProfile from '../../assets/ProfileImage.png';

function UserReview({ 
    ratings = 0, height = 0, weight = 0, bust = 0, waist = 0, hips = 0 , 
    likes = 0 , desc, userImage 

}) {

    const [like, setLike] = useState(likes);
    const [liked, setLiked] = useState(false);

    // Perbarui nilai like jika props likes berubah
    useEffect(() => {
        setLike(likes);
    }, [likes]);

    const handleLiked =  () => {
        setLiked(true);
        setLike((prev) => prev + 1);
    }
    const handleUnliked =  () => {    
        setLiked(false);
        setLike((prev) => Math.max(0, prev - 1));
    }


  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-cente w-[349px] mt-1'>
        <div className='w-[350px] h-[2px] bg-[#E5E5E5]'></div>
        <div className='flex justify-between mt-4'>

            <div className='flex gap-x-2'>
                <img 
                src={userImage || imageProfile}
                alt="" 
                className="w-10 h-10 rounded-full object-cover"
                />

                
                <div className='flex flex-col'>
                    <StarRatings rating={ratings} size={16} />
                    <div className='flex gap-x-2 mt-1'>
                    <p className=' text-[9px] text-gray-500'>{`${height} CM ${weight} KG`}</p>
                        <p className=' text-[9px] text-gray-500'>{ `${bust}/${waist}/${hips} CM`}</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-x-1 justify-center items-center'>
                {
                    !liked ?
                    (<button onClick={handleLiked}>
                        <ThumbUpOffAltIcon sx={{ width: 16, height: 16}}/>
                    </button>) :
                    (<button onClick={handleUnliked}>
                        <ThumbUpAltIcon sx={{color: 'green', width: 16, height: 16}}/>
                    </button>)
                }                
            
               
                <p className='text-[12px]'>({like})</p>
            </div>

        </div>
        <p className='text-[12px] text-justify mt-4'>
           {desc}
        </p>

        </div>
    </div>

  )
}

export default UserReview