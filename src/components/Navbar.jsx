import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between mx-16 items-center h-10 snap-center'> 
        <span>
            logo
        </span>
        <div className="icons flex items-center gap-2">
            <a href=""><img src="./public/public/facebook.png" alt="" className='w-6'/></a>
            <a href=""><img src="./public/public/instagram.png" alt="" className='w-6'/></a>
            <a href=""><img src="./public/public/youtube.png" alt="" className='w-6'/></a>
            

        </div>
    </div>
  )
}
export default Navbar