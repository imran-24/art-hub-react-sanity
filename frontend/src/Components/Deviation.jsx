import React, { useState } from 'react'
import {FiMessageSquare} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
function Deviation({deviation}) {
  const {comment, image, postedBy, save, title } = deviation;
  const [hover, setHover] = useState(false);
  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  console.log(postedBy)
  return (
    <div className='w-80  relative pt-1' >

        <img className='w-full ' src={image.asset.url} alt="" />

        <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className='w-full flex h-full flex-col absolute top-0 items-center  text-white'>
            <div className={`${hover ? 'w-full flex flex-col absolute bottom-0 items-center transition-all duration-200 ease-in ' : 'hidden' }`}>
              
              
              <div className='w-full px-4 py-1 flex items-center justify-between font-semibold '>
                  <h4 className='cursor-pointer '>{title?.length > 20 ? title.slice(0,18) + '...' : title}</h4>
                  <div className='cursor-pointer hover:text-emerald-500 flex items-center'>
                    <p className='cursor-pointer mr-2' >{comment?.length ? comment?.length : 0}</p>
                    <FiMessageSquare />
                  </div>
              </div>

              <div className='cursor-pointer w-full px-4 py-1 flex items-center justify-between'>
                  <div className='cursor-pointer flex items-center pb-1'>
                    <img className='cursor-pointer h-8 mr-2 rounded-md' src={postedBy?.profilePic} alt="" />
                    <h4 className='cursor-pointer font-light text-sm'>{user.givenName.length > 20 ? user.givenName.slice(0,18) + '...' : user.givenName}</h4>
                  </div>
                  <div className='hover:text-emerald-500 cursor-pointer flex items-center'>
                    <p className='cursor-pointer font-semibold  mr-2' >{save?.length ? save?.length : 0}</p>
                    <FiStar />
                  </div>
              </div>


            </div>
        </div>
        
        
        
    </div>
  )
}

export default Deviation