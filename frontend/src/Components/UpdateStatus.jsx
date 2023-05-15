import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai";
import {RiVideoLine} from 'react-icons/ri'
import './UpdateStatus.css';
function UpdateStatus({setShowPopup}) {
  const [height, setHeight] = useState('57');
    
  return (
    <div className='flex items-center justify-center bg-opacity-90 w-screen absolute top h-screen bg-black'>
        <div className='wrapper flex flex-col bg-white'>
            <div className='border-b flex items-center justify-between p-6'>
                <h2 className='font-extrabold text-2xl'>Create a status update</h2>
                <AiOutlineClose className='cursor-pointer hover:text-emerald-600 p-1'   fontSize={28} onClick={(e) => setShowPopup(false)}/>
            </div>
            <div className='overflow-y-scroll  flex  w-full flex-1 '>
                <textarea style={{height: `${height}px`}} 
                onChange={(e) => {console.log(e) 
                                 setHeight(e.target.scrollHeight)}} 
                placeholder='Tell the community whats up...' required 
                className=''></textarea>
            </div>
            <div className='border-t flex items-center justify-between py-4 px-6 '>
                <RiVideoLine fontSize={28} className='hover:text-emerald-600' />
                <p style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='py-2 px-6 rounded-sm font-semibold cursor-pointer'> Submit</p>
            </div>
        </div>
    </div>
  )
}

export default UpdateStatus