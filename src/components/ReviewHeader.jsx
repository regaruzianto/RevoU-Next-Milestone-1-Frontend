import React from 'react';
import { SignalCellularAltRounded, Wifi, Battery90Rounded } from '@mui/icons-material';

function ReviewHeader({ reviewCount }) {
  return (
    <div className='flex justify-between my-2 w-[389px] h-[55px] sticky top-0 px-6 items-start bg-white'>
      <div className='flex items-center gap-4'>
        {/* <p className='text-[12px] font-bold'>Reviews ({reviewCount})</p> */}
        <p className='text-[12px]'>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
      <div>
      <p className='text-[12px] font-bold'>Reviews ({reviewCount})</p>
      </div>
      <div>
        <SignalCellularAltRounded sx={{ width: 16, height: 16 }} />
        <Wifi sx={{ width: 16, height: 16 }} />
        <Battery90Rounded sx={{ width: 16, height: 16 }} />
      </div>
    </div>
  );
}

export default ReviewHeader;