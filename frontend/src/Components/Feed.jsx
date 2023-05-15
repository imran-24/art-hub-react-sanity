import React, { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Categories from '../Container/Categories';
import Deviations from '../Container/Deviations';
import Posts from '../Container/Posts';
import Create from './Create';
import Navbar from './Navbar';
import UpdateStatus from './UpdateStatus';

function Feed({setShowPopup}) {
    
  return (
    <div className=''>
       
        <div>
            <Routes>
                             
                <Route path="/" element={<Deviations />} />
                <Route path="/posts" element={<Posts setShowPopup={setShowPopup}/>} />
                <Route path="/create" element={<Create />} />
                
                
            </Routes>
        </div>
        
    </div>
    
  )
}

export default Feed