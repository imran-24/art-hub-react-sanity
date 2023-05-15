import React, { useEffect, useState } from 'react'
import { client } from '../client';
import Post from '../Components/Post';
import Spinner from '../Components/Spinner';
import { postQuery } from '../utils/data';
import {CiMicrophoneOn} from 'react-icons/ci';
import {CgPoll} from 'react-icons/cg';
import {BsJournalText} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Posts({setShowPopup}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    
        setIsLoading(true);

          client.fetch(postQuery).then((data) => {
          console.log(data)
          setPosts(data);
          setIsLoading(false);
        });
    }, []);
  if(isLoading) return <Spinner message='We are adding new ideas to your feed!' />
  return (
    <div className='flex flex-col gap-2 items-center justify-center mt-4'>
      
        <div style={{background: '#161a1f', width: '44rem'}} className='h-28  flex flex-col gap-4 items-center justify-center p-4 border border-slate-600 rounded-md'>
            <div className='flex w-full items-center gap-2'>
                <img src={user?.imageUrl} className='h-8 rounded-sm' alt="" />
                <input onClick={()=> {
                  setShowPopup(true) 
                  navigate('/')} }  style={{background: '#22272b'}} type="text" className='border-none  text-white text-sm outline-none px-4 py-1 placeholder:font-light placeholder:text-sm flex-1' placeholder='Whats going on?' />
            </div>
            <div className='flex items-center justify-around w-full'>
                <div onClick={()=> {
                  setShowPopup(true) 
                  navigate('/')} } className='border-r items-center hover:text-emerald-400 flex gap-2 justify-center text-white w-full px-6 py-2 text-center'>
                  <CiMicrophoneOn fontSize={20} />
                  <p className='uppercase cursor-pointer font-extrabold   text-xs'>status update</p>
                </div>
                <div className='border-r px-6 items-center hover:text-emerald-400 flex gap-2 justify-center text-white  py-2 w-full text-center'>
                  <BsJournalText fontSize={20} />
                  <p className='uppercase cursor-pointer font-extrabold   text-xs'>journal</p>
                </div>
                <div className=' px-6  items-centerpy-2 hover:text-emerald-400 flex gap-2 justify-center text-white  text-center w-full'>
                  <CgPoll fontSize={20} />
                  <p className='uppercase cursor-pointer font-extrabold   text-xs'>poll</p>
                </div>
            </div>
        </div>

        {
          posts?.map((post) => (
            <Post key={post?._id} post={post} /> 
         ))
        }


    </div>
  )
}

export default Posts