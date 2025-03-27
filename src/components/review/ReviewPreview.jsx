import React from 'react';
import Graph from './Graph';
import { Box, Typography } from '@mui/material';
import StarRatings from '../Produk/StarRatings';

function ReviewPreview({  reviewCount, value1 = 5, value2 = 5, value3 =5, reviewCnt = 0 }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-[349px] mt-5'>
        <div className='w-[350px] h-[2px] bg-[#E5E5E5]'></div>
        <span className='place-self-start font-bold text-[14px] mt-3'>REVIEWS {`(${reviewCount || 0})`}</span>

        { reviewCount > 1 ? 
          (<a href="" target='_blank' className='text-[12px] underline place-self-end font-bold text-[#075128]'>View More &gt;</a>) :
          
          (<div></div>)
             
        }
        {/* <a href="" target='_blank' className='text-[12px] underline place-self-end font-bold text-[#075128]'>View More &gt;</a> */}
        
        
        <div className='flex place-self-start'>
          <StarRatings rating={4} size={16}/>
        </div>

        <Box  py={1} borderRadius={2} minWidth={330}>
          <Graph label="Small" value={value1}/>
        </ Box>

        <Box  py={1} borderRadius={2} minWidth={330}>
          <Graph label="True to size" value={value2}/>
        </ Box>

        <Box  py={1} borderRadius={2} minWidth={330}>
          <Graph label="Large" value={value3}/>
        </ Box>

      </div>
    </div>

  )
}

export default ReviewPreview