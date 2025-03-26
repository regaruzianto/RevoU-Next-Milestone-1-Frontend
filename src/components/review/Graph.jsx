import React from 'react'
import { LinearProgress, Box, Typography } from '@mui/material'

function Graph({ label, value}) {

  return (
    <div className='flex items-center'>
      <p className='text-[12px] min-w-20'>{`${label}`}</p>
      <Box sx={{ width: "100%", mr: 1 }}>
       <LinearProgress
          variant="determinate"
          value={value}
          sx={{ height: 8, backgroundColor: "#e0e0e0",     "& .MuiLinearProgress-bar": {
            backgroundColor: "green", // Warna progress bar
          }, }}
          
        />
      </Box>
      <p className='text-[12px]'>{`${value}%`}</p>


    </div>
  )
}

export default Graph