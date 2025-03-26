import React from 'react';
import { StarRounded, StarBorderRounded } from '@mui/icons-material';

function StarRatings({ rating, totalStars = 5, size = 24, color = 'gold' }) {
  return (
        <div>
      {[...Array(totalStars)].map((_, index) =>
        index < rating ? (
          <StarRounded key={index} style={{ color, fontSize: size }} />
        ) : (
          <StarBorderRounded key={index} style={{ color : 'gray', fontSize: size }} />
        )
      )}
    </div>
  )
}

export default StarRatings