import React from 'react'

function Footers({price = 0}) {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex flex-col w-[389px] h-[85px] mt-4 px-6'>
        <div className='w-[389px] h-[2px] bg-[#E5E5E5] mt-[1px] place-self-center'></div>
        <div className='flex justify-between mt-2'>
            <div>
                <p className='text-[9px]'>Rent Fee</p>
                <p className='text-[12px] font-bold'>Rp {price}/4 Day</p>
            </div>
            <a href="" className='p-2 w-[120px] h-[35px] rounded-sm flex justify-center items-center bg-[#CDAA44]'>
                <button>ADD</button>
            </a>

        </div>


    </div>      
    </div>

  )

};
export default Footers