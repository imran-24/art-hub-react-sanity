import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {FcUpload} from 'react-icons/fc'
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { client } from '../client';

function Create() {
    const navigate = useNavigate();
    const [height, setHeight] = useState('70');
    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
   
    const [deviation, setDeviation] = useState({
      title:'',
      loading: false,
      description: '',
      tag:'',
      category: '',
  });
    const [imageAsset, setImageAsset] = useState();


    
    useEffect(()=>{
        if(!user) navigate('/login');
        setDeviation({...deviation, title: imageAsset?.originalFilename})
       
    },[navigate, imageAsset])

    const uploadImage = (e) => {
        const selectedFile = e.target.files[0];
        
        // uploading asset to sanity
        if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
        
          setDeviation({...deviation, loading: true});
          client.assets
            .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
            .then((document) => {
                
              setImageAsset(document)
              console.log(imageAsset)
              setDeviation({...deviation, loading: false});
            })
            .catch((error) => {
              console.log('Upload failed:', error.message);
            });
        } else {
          setDeviation({...deviation, loading: false});
       
        }
      }
    
    const deleteImage = (e)=> {
        setImageAsset('')
    }

    const { title, tag, description} = deviation
    const handleSubmit = () => {
    
        
        if (deviation?.title && deviation?.tag && deviation?.description && imageAsset?._id ) {
            
          const doc = {
            _type: 'deviation',
            title,
            tag,
            description,
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageAsset?._id,
              },
            },
            userId: user.googleId,
            postedBy: {
              _type: 'postedBy',
              _ref: user.googleId,
            },
            
          };
          
          client.create(doc).then(() => {
            navigate('/');
          });
          
        }
        else{
            console.log('please fill up all the fields')
        }
      };



  
  return (
    <div style={{minHeight:'92vh'}} className='flex flex-col gap-8 bg-slate-100'>
        <div className='flex gap-4 items-center '>
            <FcUpload  fontSize={26}/>
            <h2 className='text-xl font-extralight text-gray-500'>Submit a Deviation</h2>
        </div>
        <div className='w-3/4 min-h-full p-10 flex flex-col items-center ml-20 justify-evenly border rounded-md border-blue-500 bg-sky-100 '>
            
            
            {!imageAsset 

            ? 
            ( 
            <div className='flex flex-col items-center gap-4'>
            <h4 className='font-semibold text-sm text-slate-400' >Drag and drop your art here</h4>
            <p className='text-xs  text-slate-400'>or</p>
            <div style={{background: '#97c9f1'}} className='py-3 px-8 text-sm font-semibold  border border-blue-500 rounded shadow-md '>  
            <input style={{color: '#1964a1'}} 
            type="file" 
            className='' 
            onChange={uploadImage}
            placeholder='Choose a file to upload' />
            </div>
            <p className='text-xs font-light text-sky-500'>Select file from Stash</p>
            
            </div>)

            : 
            (
            <div className='relative flex flex-col items-center '>
            <img src={imageAsset?.url} className='w-48' alt="" />
            <div className='absolute bottom-5 right-5 p-2 bg-white rounded-full'>
                <MdDelete onClick={deleteImage} fontSize={25} color='black' className='hover:opacity-70'  />
            </div>
            </div>
            )}
               
            </div>
            {
                imageAsset && (
                    <>
                    {/* description */}
                    <div className='hover:border-gray-500 border border-gray-400 flex flex-col   ml-20  outline-none p-2 rounded-sm  lg:w-3/4 max-md:w-3/4 max-sm:w-3/4'>
                        <p className='font-bold mb-2 py-2 lg:text-lg border-b text-sm  border-b-gray-400'>{deviation.title}</p>
                        <textarea style={{height: `${height}px`, scrollbarWidth: 0}} 
                        onChange={(e) => {
                                        setDeviation({...deviation, description: e.target.value})
                                        setHeight(e.target.scrollHeight)}} 
                                        placeholder='Introduce your deviation. Tell the backstory, add some striguing accompaning text, or simply give deviants any extra information you would like them to know' required 
                        className='w-full  bg-transparent placeholder:text-sm  outline-0 resize-none'></textarea>
                    </div> 
                    {/* tag */}
                    
                    <div>
                        <p className='font-bold mb-2 py-2 lg:text-lg ml-20  text-sm  border-b-gray-400'>Use upto 30 tags:</p>

                        <div className='hover:border-gray-500 border border-gray-400 flex flex-col  ml-20  outline-none p-2 rounded-sm w-3/4'>
                            
                            <input type="text" required placeholder='#animal #animation #sketch...'
                            onChange={(e) => setDeviation({...deviation, tag: e.target.value})}
                            className='cursor-pointer placeholder:text-sm  placeholder:font-normal w-full bg-transparent  px-1  outline-none' />
                        </div>
                    </div>
                    
                    {/* button */}

                    
                    <div onClick={handleSubmit} className='w-36 ml-20 cursor-pointer'>
                        <p className='font-light py-2 bg-opacity-80  hover:bg-opacity-100 text-center rounded bg-lime-300'>Submit Now</p>
                    </div>
                    </>
                                )
            }
        
        
    </div>
  )
}

export default Create