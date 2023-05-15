import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {MdOutlineCancelPresentation} from 'react-icons/md'
function Login() {
  const navigate = useNavigate();
  return (
    <div className='max-w-screen min-h-screen flex items-center justify-center bg-slate-100'>
        <div className=' lg:w-3/5 md:w-2/4  sm:w-3/5 w-full   bg-fuchsia-400 flex flex-col lg:flex-row shadow-lg'>
            


            <div style={{ flex: '.5', minHeight: '90vh'}} className='   lg:flex md:flex hidden items-center justify-center  bg-slate-800'>
                <div className=' bg-red-500 flex flex-col items-center justify-evenly w-5/6 h-4/5 lg:p-10 md:p-10'>
                    <h2 className='text-white text-4xl   font-extrabold'>
                    JOIN THE LARGEST ART COMMUNITY IN THE WORLD
                    </h2>
                    <div>
                    <p className='text-white font-light text-sm'>Explore and discover art, become a better artist, connect with others over mutual hobbies, or buy and sell work – you can do it all here.</p>
                    </div>
                </div> 
            </div>



            
            <div style={{ flex: '.5',minHeight: '90vh'}}  className=' flex flex-col items-center bg-white '>
                <div className='flex flex-col w-5/6 h-4/5 gap-6 relative'>
                    <MdOutlineCancelPresentation 
                    fontSize={26}
                    onClick={()=> navigate('/')}  className= 'cursor-pointer absolute top-5 right-0' />
                    <h1 className='mt-12 mb-4 text-3xl font-extrabold'>Log In </h1>
                    
                    <div>
                        <label className='text-xs font-semibold'>Username</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text"
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
                    
                    <div>
                        <label className='text-xs font-semibold'>Password</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="password"
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    <div style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='cursor-pointer p-2 rounded-sm mt-2'>
                        <p className='text-center font-semibold text-sm'>Log In</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>
                        <p>or</p>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>

                    </div>
                    <div style={{border: '1px solid lightgrey'}} className=' hover:bg-slate-100 flex p-2 items-center  rounded-sm'>
                        <FcGoogle fontSize={24} />
                        <p className='text-center flex-1  text-sm'>Continue with google</p>
                    </div>

                    <p>Become a Deviant <span onClick={() => navigate('/join')} className='cursor-pointer text-green-400 font-bold'>Join DeviantArt</span></p>
                    <p className='text-xs font-light text-gray-400'>By logging in to DeviantArt, I confirm that I have read and agree to the DeviantArt Terms of Service, Privacy Policy, and to receive emails and updates.</p>

                    

                </div>   
            </div>



        </div>
    </div>
  )
}

export default Login