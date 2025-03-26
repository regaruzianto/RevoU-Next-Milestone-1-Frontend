import React from 'react'

function Footers() {
  return (
    <div className='flex flex-col w-[389px] h-[45px] mt-4 px-6'>
        <div className='w-[389px] h-[2px] bg-[#E5E5E5] mt-[8px]'></div>
        <div className='flex justify-between mt-2'>
            <div>
                <p className='text-[9px]'>Rent Fee</p>
                <p className='text-[12px] font-bold'>Rp 98888/4 Day</p>
            </div>
            <a href="" className='p-2 w-[80px] h-[35px] flex justify-center items-center bg-amber-700'>
                <button>ADD</button>
            </a>

        </div>


    </div>
  )

};
export default Footers