import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const ReviewFilter = ({ activeFilter, onFilterChange, onRatingSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleRatingSelect = (rating) => {
    onRatingSelect(rating);
    onFilterChange('rating');
    setAnchorEl(null);
  };

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto py-2">
      <Button
        variant={activeFilter === 'all' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('all')}
        sx={{ fontSize: '12px' }}
      >
        All Reviews
      </Button>

      <Button
        variant={activeFilter === 'photos' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('photos')}
        sx={{ fontSize: '12px' }}
      >
        Photos/Videos
      </Button>

      <Button
        variant={activeFilter === 'newest' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('newest')}
        sx={{ fontSize: '12px' }}
      >
        Newest
      </Button>

      <div>
        <Button
          variant={activeFilter === 'rating' ? 'contained' : 'outlined'}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ fontSize: '12px' }}
        >
          Rating
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {[5, 4, 3, 2, 1].map((rating) => (
            <MenuItem 
              key={rating} 
              onClick={() => handleRatingSelect(rating)}
            >
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default ReviewFilter;
// import React, { useState } from 'react';  // <-- Tambahkan useState di sini
// import { Button, Menu, MenuItem, Typography } from '@mui/material';

// const ReviewFilter = ({ activeFilter, onFilterChange, onRatingSelect }) => {
//   const [ratingAnchorEl, setRatingAnchorEl] = useState(null);

//   const handleRatingMenuOpen = (event) => {
//     setRatingAnchorEl(event.currentTarget);
//   };

//   const handleRatingSelect = (rating) => {
//     onRatingSelect(rating);
//     onFilterChange('rating');
//     setRatingAnchorEl(null);
//   };

//   return (
//     <div className="flex gap-2 mb-4 overflow-x-auto py-2">
//       {/* All Reviews */}
//       <Button
//         variant={activeFilter === 'all' ? 'contained' : 'outlined'}
//         onClick={() => onFilterChange('all')}
//         sx={{ minWidth: 'unset', fontSize: '12px' }}
//       >
//         All Reviews
//       </Button>

//       {/* Photos/Videos */}
//       <Button
//         variant={activeFilter === 'photos' ? 'contained' : 'outlined'}
//         onClick={() => onFilterChange('photos')}
//         sx={{ minWidth: 'unset', fontSize: '12px' }}
//       >
//         Photos/Videos
//       </Button>

//       {/* Newest Reviews */}
//       <Button
//         variant={activeFilter === 'newest' ? 'contained' : 'outlined'}
//         onClick={() => onFilterChange('newest')}
//         sx={{ minWidth: 'unset', fontSize: '12px' }}
//       >
//         Newest Reviews
//       </Button>

//       {/* Rating Dropdown */}
//       <div>
//         <Button
//           variant={activeFilter === 'rating' ? 'contained' : 'outlined'}
//           onClick={handleRatingMenuOpen}
//           sx={{ minWidth: 'unset', fontSize: '12px' }}
//         >
//           Rating
//         </Button>
//         <Menu
//           anchorEl={ratingAnchorEl}
//           open={Boolean(ratingAnchorEl)}
//           onClose={() => setRatingAnchorEl(null)}
//         >
//           {[5, 4, 3, 2, 1].map((rating) => (
//             <MenuItem 
//               key={rating} 
//               onClick={() => handleRatingSelect(rating)}
//             >
//               {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
//             </MenuItem>
//           ))}
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default ReviewFilter;