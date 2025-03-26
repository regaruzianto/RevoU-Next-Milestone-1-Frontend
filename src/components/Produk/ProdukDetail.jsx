import React from 'react'

function ProdukDetail() {
  return (
    <div className='w-[366px] flex flex-col mt-6'>
        <div className='w-[350px] h-[2px] bg-[#E5E5E5] self-center'></div>
        <div className='px-2.5'>
            <p className='font-bold text-[13px] text-black mt-3 mb-2'>PRODUCT DETAIL</p>
            <div className='flex justify-between my-1'>
                <p className='font-bold text-[12px]'>FABRICS</p>
                <p className='font-bold text-[11px] text-gray-500'>SILK</p>
            </div>
            <div className='flex justify-between my-1'>
                <p className='font-bold text-[12px]'>FIT</p>
                <p className='font-bold text-[11px] text-gray-500'>TRUE TO SIZE</p>
            </div>

            <p className='font-bold text-[11px] mt-3 mb-1'>SIZE GUIDE</p>
            <div className='flex justify-between px-5 border-solid border-[2px] border-[#E5E5E5] p-2'>
                <p className='font-bold text-[11px]'>SIZE</p>
                <p className='font-bold text-[11px]'>BUST</p>
                <p className='font-bold text-[11px]'>LENGTH</p>
            </div>
            <div className='flex justify-between px-6 border-solid border-[2px] border-[#E5E5E5] p-2'>
                <p className='text-[11px] text-gray-500'>M</p>
                <p className='text-[11px] text-gray-500'>78 cm</p>
                <p className='text-[11px] text-gray-500'>89 cm</p>
            </div>
            
            
        </div>

    </div>
  )
}

export default ProdukDetail