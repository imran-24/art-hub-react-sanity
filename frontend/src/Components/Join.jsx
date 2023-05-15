import React, { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {MdOutlineCancelPresentation} from 'react-icons/md'
import { GoogleLogin } from 'react-google-login';
import { client } from '../client';
import { gapi } from "gapi-script";


function Join() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  
  
//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
//         scope: 'email',
//       });
//     }

//     gapi.load('client:auth2', start);
//   }, []);


  const responseGoogle = (response) => {

    console.log(response.profileObj)
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const {googleId, imageUrl, givenName} = response.profileObj;
    const doc = {
        _id: googleId,
        _type: 'user',
        userName: givenName,
        password: googleId,
        profilePic: imageUrl
    }

    client.createIfNotExists(doc)
    .then(() => {
        navigate('/', {replace: true})
    })

  }
  return (
    <div className='max-w-screen min-h-screen flex items-center justify-center bg-slate-100'>
        <div className=' lg:w-3/5 md:w-2/4  sm:w-3/5 w-full   bg-fuchsia-400 flex flex-col lg:flex-row shadow-lg'>
            


            <div style={{ flex: '.5', minHeight: '90vh'}} className='   lg:flex md:flex hidden items-center justify-center  bg-slate-800'>
                <div className=' bg-red-500 flex flex-col items-center justify-evenly w-5/6 h-4/5 lg:p-10 md:p-10'>
                    <h2 className='text-white  text-4xl   font-extrabold'>
                    JOIN THE LARGEST ART COMMUNITY IN THE WORLD
                    </h2>
                    <div>
                    <p className='text-white font-light text-sm'>Get free access to 370 million pieces of art. Showcase, promote, sell & share your work with over 61 million members.</p>
                    </div>
                </div> 
            </div>



            
            <div style={{ flex: '.5',minHeight: '90vh'}}  className=' flex flex-col items-center bg-white'>
                <div className='flex flex-col w-5/6 h-4/5 gap-6 relative '>
                    <MdOutlineCancelPresentation 
                    fontSize={26}
                    onClick={()=> navigate('/')}  className= 'cursor-pointer absolute top-5 right-0' />
                    <h1 className='mt-12 mb-4 text-3xl font-extrabold'>Join DeviantArt</h1>
                    
                    <div>
                        <label className='text-xs font-semibold'>Add your email</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text" onChange={(e) => setEmail(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    <div>
                        <label className='text-xs font-semibold'>Pick a Username</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text" onChange={(e) => setUserName(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
                    
                    <div>
                        <label className='text-xs font-semibold'>Choose a password</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    <div style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='cursor-pointer p-2 rounded-sm mt-2'>
                        <p className='text-center font-semibold text-sm'>Join</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>
                        <p>or</p>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>

                    </div>

                    <div style={{border: '1px solid lightgrey'}} className=' hover:bg-slate-100  rounded-sm'>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <button
                            type="button"
                            className="flex w-full p-2 items-center"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                           <FcGoogle fontSize={24} />
                           <p className='flex-1 text-center text-sm'>Continue with google</p>
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                    />
                    </div>

                    <p className='font-light text-base'>Already a member? <span onClick={() => navigate('/Join')} className='cursor-pointer text-green-400 font-medium'>Log In</span></p>
                    <p className='text-xs font-light text-gray-400'>By joining DeviantArt, I confirm that I have read and agree to the DeviantArt Terms of Service, Privacy Policy, and to receive emails and updates.</p>

                    

                </div>   
            </div>



        </div>
    </div>
  )
}

export default Join