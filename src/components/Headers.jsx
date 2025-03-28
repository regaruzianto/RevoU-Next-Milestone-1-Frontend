import React, { useState } from 'react';
import { useEffect } from 'react';
import { SignalCellularAltRounded, Wifi, Battery90Rounded } from '@mui/icons-material';


function Headers() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer =setInterval(() =>{
            setTime(new Date());
        }, 1000);
        return clearInterval(timer);
    },[]);



  return (
    <div className='flex justify-between my-2 w-[389px] h-[55px] sticky top-0 px-6 items-start bg-white'>
        <div className='text-[12px] font-bold '>
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>

        <div>
            <SignalCellularAltRounded sx={{width: 16, height: 16}}/>
            <Wifi sx={{width: 16, height: 16}}/>
            <Battery90Rounded sx={{width: 16, height: 16}}/>
        </div>

    </div>
  )
}

export default Headers