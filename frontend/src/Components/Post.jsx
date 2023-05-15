import React from 'react'
import {v4 as uuidv4} from 'uuid';
import {IoMdShareAlt} from 'react-icons/io'
import {GoComment} from 'react-icons/go'
import {CiStar} from 'react-icons/ci'
import {FaStar} from 'react-icons/fa'
import {FaCommentAlt} from 'react-icons/fa'
import { client } from '../client';
import { useState } from 'react';
import {IoMdSend} from 'react-icons/io'
import { useEffect } from 'react';
function Post({post}) {
  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  const {save, comment, message} = post
  const [Comment, setComment] = useState();
  
  let alreadySaved = post?.save?.filter((item) => item?.postedBy?._id === user?.googleId);
  
    alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];

   console.log(alreadySaved) 

    const isSave = (id) => {
        if(alreadySaved.length === 0 ){
            console.log('enter')
            client
                .patch(id)
                // Ensure that the `reviews` arrays exists before attempting to add items to it
                .setIfMissing({save: []})
                // Add the items after the last item in the array (append)
                .insert('after', 'save[-1]', [{
                    
                        _key: uuidv4(),
                        _type: "save",
                        "postedBy": {
                          _ref: user?.googleId,
                          _type: "postedBy"
                        },
                        userId: user?.googleId
                      
                }])
                .commit()
                .then(() => {
                    window.location.reload();
                });

        }
    }

    const sendComment = (id) => {
     
          client
              .patch(id)
              // Ensure that the `reviews` arrays exists before attempting to add items to it
              .setIfMissing({comment: []})
              // Add the items after the last item in the array (append)
              .insert('after', 'comment[-1]', [{
                    
                      _key: uuidv4(),
                      _type: "comment",
                      "postedBy": {
                        _ref: user?.googleId,
                        _type: "postedBy"
                      },
                      comment: Comment
                    
              }])
              .commit()
              .then(() => {
                  setComment('')
              });

  }

  return (
    <div style={{background: '#161a1f', width: '44rem'}} className='flex flex-col gap-4 items-center  p-4 border border-slate-600 rounded-md'>
            <div className='flex w-full items-center gap-2'>
                <img src={user?.imageUrl} className='h-8 rounded-sm' alt="" />
            </div>

            <div className='py-6 text-gray-500 text-lg font-semibold'>
              <p >{post.message}</p>
            </div>

            <div className='flex  items-center gap-3 border-y border-gray-400 w-full p-2'>
                <div style={{flex: '.8'}} className='flex items-center justify-between '>
                  
                  {
                    alreadySaved.length
                    ? (
                      <div className='flex items-center gap-2  hover:text-emerald-400 text-white'>
                        <FaStar fontSize={26} className='' />
                        <p className='capitalize cursor-pointer font-extrabold w-full  '>Add to Favourites</p>
                      </div>
                    )
                    : (
                      <div onClick={()=> isSave(post._id)} className='flex items-center gap-2  hover:text-emerald-400 text-white'>
                        <CiStar fontSize={30} className='' />
                        <p className='capitalize cursor-pointer font-extrabold w-full  '>Add to Favourites</p>
                      </div>
                    )
                  }
                  
                  <div className='flex items-center gap-2  hover:text-emerald-400 text-white'>
                    <GoComment fontSize={30} />
                    <p className='capitalize cursor-pointer font-extrabold w-full '>Comment</p>
                  </div>

                  <div className='flex items-center gap-2 hover:text-emerald-400 text-white'>
                    <IoMdShareAlt fontSize={30} />
                    <p className='capitalize cursor-pointer font-extrabold w-full'>Share on Social</p>
                  </div>

                </div>
                
                <div style={{flex: '.2'}} className='flex items-center justify-end gap-2'>
                    <FaStar  className='text-gray-500'/>
                    <p className='text-sm font-light text-gray-500'>{save?.length == null ? '0' : post.save.length}</p>
                    <FaCommentAlt className='text-gray-500'/>
                    <p className='text-sm font-light text-gray-500'>{comment?.length == null ? '0' : post.comment.length}</p>

                </div>
            </div>

            <div className='flex w-full items-center gap-2'>
                <img src={user?.imageUrl} className='h-8 rounded-sm' alt="" />
                <input onChange={(e)=> { 
                  setComment(e.target.value)}}
                  value={Comment}
                  style={{background: '#22272b'}} type="text" className=' text-white text-sm outline-none px-4 py-2 border placeholder:font-light placeholder:text-sm flex-1' placeholder='Write a comment...' />
                <IoMdSend onClick={(e)=> { 
                  sendComment(post?._id)}}
                  className='text-gray-500 hover:text-gray-700 cursor-pointer' fontSize={26}/>
            </div>

            {
              comment.map((com) => (
                <div  key={com._key} className='flex  w-full  gap-2'>
                  <img src={com?.postedBy?.profilePic} className='h-8 rounded-sm' alt="" />
                  <div style={{background: '#2e3235'}} className='flex flex-col p-2 gap-1 flex-1 rounded'>
                    <div>
                        <p className=' text-gray-400 font-bold'>{com?.postedBy?.userName}</p>
                    </div>
                        <p className='text-sm text-white font-light'>{com.comment}</p>
                  </div>
                </div>
              ))
            }
        </div>
  )
}

export default Post