import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  return (
    <div className='bg-white fixed bottom-0 z-10 h-16 w-full flex items-center justify-center gap-4 shadow-lg'>
        <p className='text-sm font-light'>Join the world's largest art community and get personalized art recommendations.</p>
        <div className='flex items-center'>
            <div style={{border: '1px solid black'}} 
            className='cursor-pointer w-28 text-center py-2 mr-3'
            onClick={() => navigate('/login')}>
                <p className='text-sm font-bold'>Log in</p>
            </div>
            <div style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='cursor-pointer w-28 text-center py-2'
            onClick={() => navigate('/join')}>
                <p className='text-sm font-bold'>Join</p>
            </div>
        </div>
        <p className='text-sm font-light'> or </p>
        <div  className='cursor-pointerbg-slate-100 rounded-r-md drop-shadow-xl p-1'>
            <FcGoogle fontSize={24} />
        </div>
    </div>
  )
}

export default Footer