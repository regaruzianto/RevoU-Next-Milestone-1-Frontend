import React from 'react';
import Graph from './Graph';
import { Box, Typography } from '@mui/material';
import StarRatings from '../Produk/StarRatings';

function ReviewPreview({ reviewValue, }) {
  return (
    <div className='flex flex-col justify-center items-center w-[349px] mt-5'>
      <div className='w-[350px] h-[2px] bg-[#E5E5E5]'></div>
      <span className='place-self-start font-bold text-[14px] mt-3'>REVIEWS {`(${reviewValue || 7})`}</span>
      <a href="" target='_blank' className='text-[12px] underline place-self-end font-bold text-[#075128]'>View More &gt;</a>
      <div className='flex place-self-start'>
        <StarRatings rating={4} size={16}/>
      </div>
        
      <Box  py={1} borderRadius={2} minWidth={330}>
        <Graph label="Small" value={80}/>
      </ Box>

      <Box  py={1} borderRadius={2} minWidth={330}>
        <Graph label="True to size" value={80}/>
      </ Box>

      <Box  py={1} borderRadius={2} minWidth={330}>
        <Graph label="Large" value={80}/>
      </ Box>

    </div>
  )
}

export default ReviewPreview