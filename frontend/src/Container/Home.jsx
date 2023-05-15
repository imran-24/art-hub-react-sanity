import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Feed from '../Components/Feed';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import UpdateStatus from '../Components/UpdateStatus';
import Categories from './Categories';
import Deviations from './Deviations';
import Posts from './Posts';

function Home() {
  const param = useParams();
  const [sidebar, setSidebar] = useState(false);
  const [activeBtn, setActiveBtn] = useState('deviations');
  const [show, setShow] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  useEffect(()=> {
    if(param['*'] === '' || param['*'] === 'posts' ||param['*'] === 'categories' ){
      setShow(true);
    }
    else{
      setShow(false)
    }
    console.log(showPopup)
  },[param, showPopup])
  const navigate = useNavigate();
  const activeBtnStyles = ' border-b-2 border-green-500';
  return (
    <div className='max-w-screen flex  flex-col min-h-screen relative  '>
      <div className={`${showPopup ? 'absolute top-0 left-0 z-20' : 'hidden' }`}>
        <UpdateStatus setShowPopup={setShowPopup} />
      </div>
      
        {/* navbar */}
        <div className='fixed top-0 w-full z-10'>
          <Navbar sidebar={sidebar} setSidebar={setSidebar} setShowPopup={setShowPopup} />
        </div>
        
        {/* body */}
        <div className=" max-w-screen min-h-full mt-16  ">

          {/* sidebar */}
          <div className='fixed z-10'>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} show={show} />
          </div>

          {/* main */}
          <div style={{width: 'calc(100vw - 5rem)',minHeight: 'calc(100vh - 4rem)'}} className={`${show && 'absolute left-20'}  flex flex-col`}>
            
            {/* header */}
            {(param['*'] === '' || param['*'] === 'posts') && <div className='bg-gray-900  h-20 flex items-center  opacity-90 px-10'>
              <h2 className='text-white text-xl  mb-2 font-semibold '>Home</h2>
              
              <div className='flex items-baseline flex-1 justify-center gap-10 text-white text-sm font-light'>
                <div 
                  
                onClick={(e) => {
                    setActiveBtn('deviations');
                    navigate('/')
                }}
                className={`${activeBtn === 'deviations' && activeBtnStyles }`}>
                    <p className='h-20  cursor-pointer flex items-center'>Deviations</p>
                    
                </div>
                <div 
                    
                onClick={(e) => {
                    setActiveBtn('posts');
                    navigate('/posts')
                }}
                className={`${activeBtn === 'posts' && activeBtnStyles }`}>
                    <p className='h-20  cursor-pointer flex items-center'>Posts</p>    
                </div>
              </div>
            </div>}

            {param['*'] === 'categories' && <div className='bg-gray-900 w-full  h-20 flex items-center gap-64 opacity-90 px-10'>
              <h2 className='text-white text-xl mb-2 font-semibold'>Category</h2>
            </div>}

            <div>
              <Routes>
                <Route path="/*" element={<Feed setShowPopup={setShowPopup}/>} />  
                <Route path="/categories" element={<Categories />} />  
    
              </Routes>
            </div>     

          </div>

        </div>
        
          
    </div>
  )
}

export default Home