import React from 'react'

function Head() {
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
      <img className='h-8' alt='menu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9YDEe2--Mk10R5-cWs5HzA1bnsiiipscRLBwKBcoRg&s' />
        <img className='h-8 mx-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png' />
        </div>
      <div className='col-span-10 text-center'>
        <input className='w-1/2 border-gray-400 p-2 rounded-l-full' type="text" />
        <button className='border border-gray-400 p-2 rounded-r-full'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user logo' src='https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png'/>
      </div>
    </div>
  )
}

export default Head