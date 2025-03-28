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
    <div className="flex gap-2 mb-4 py-2">
      <Button
        variant={activeFilter === 'all' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('all')}
        sx={{ fontSize: '10px',
          fontFamily : 'Montserrat',
          fontWeight : activeFilter === 'all' ? 'bold' : 'normal', 
          flex: 1, minWidth: '40px', 
          textWrap: 'wrap', 
          lineHeight :'12px',
          borderRadius : '0px',
          bgcolor: activeFilter === 'all' ? '#CDAA44' : '#D9D9D9',
          color: activeFilter === 'all' ? '#fff' : 'inherit',
          border : 'none' 
        }}
      >
        All Reviews
      </Button>

      <Button
        variant={activeFilter === 'photos' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('photos')}
        sx={{ fontSize: '10px',
          fontFamily : 'Montserrat',
          fontWeight : activeFilter === 'photos' ? 'bold' : 'normal', 
          flex: 1, minWidth: '40px', 
          textWrap: 'wrap', 
          lineHeight :'12px',
          borderRadius : '0px',
          bgcolor: activeFilter === 'photos' ? '#CDAA44' : '#D9D9D9',
          color: activeFilter === 'photos' ? '#fff' : 'inherit',
          border : 'none' 
        }}
      >
        Photos/ Videos
      </Button>

      <Button
        variant={activeFilter === 'newest' ? 'contained' : 'outlined'}
        onClick={() => onFilterChange('newest')}
        sx={{ 
          fontSize: '10px',
          fontFamily : 'Montserrat',
          fontWeight : activeFilter === 'newest' ? 'bold' : 'normal', 
          flex: 1, minWidth: '40px', 
          textWrap: 'wrap', 
          lineHeight :'12px',
          borderRadius : '0px',
          bgcolor: activeFilter === 'newest' ? '#CDAA44' : '#D9D9D9',
          color: activeFilter === 'newest' ? '#fff' : 'inherit',
          border : 'none' 
        }}
      >
        Newest
      </Button>

      <div className='flex-1'>
        <Button
          variant={activeFilter === 'rating' ? 'contained' : 'outlined'}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ 
            fontSize: '10px',
            fontFamily : 'Montserrat',
            fontWeight : activeFilter === 'rating' ? 'bold' : 'normal',
            fontSize: '10px',
            flex: 1,
            minWidth: '40px',
            minHeight: '36px',
            textWrap: 'wrap',
            lineHeight :'12px',
            borderRadius : '0px',
            bgcolor: activeFilter === 'rating' ? '#CDAA44' : '#D9D9D9',
            color: activeFilter === 'rating' ? '#fff' : 'inherit',
            border : 'none'    
          }}
        >
          Rating:All
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