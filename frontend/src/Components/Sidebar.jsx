import React, { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoOptionsOutline} from 'react-icons/io5'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Categories from '../Container/Categories';
function Sidebar({sidebar, setSidebar, show}) {
    const activeBtn = useParams();
    console.log(activeBtn['*'])
    const navigate = useNavigate();
    const wideSidebar = 'w-72 bg-black   transition-all duration-200 ease-in-out relative cursor-pointer ';
    const lessWideSidebar = `${show ? 'w-20' : 'w-0'} bg-black overflow-hidden  transition-all duration-200 ease-in-out relative cursor-pointer` 
    const activeBtnStyles = 'bg-neutral-800 w-full h-14 flex items-center';
    const notActiveBtnStyles = 'hover:bg-neutral-700 w-full h-14 flex items-center'
  return (
  <div style={{height: '92.3vh'}} className={`${sidebar ? wideSidebar : lessWideSidebar}`}>
    
            <NavLink 
            to={'/'}
            onClick={()=> setSidebar(false)}
        className={`${activeBtn['*'] === '' || activeBtn['*'] === 'posts'  ? activeBtnStyles : notActiveBtnStyles}`}>
            <AiFillHome  fontSize={24} className={`${activeBtn['*'] === '' || activeBtn['*'] === 'posts' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
            <p className='cursor-pointer text-white absolute left-20  text-sm font-light'>Home</p>
            
        </NavLink>
        <NavLink 
        to={'/categories'}
        onClick={()=> setSidebar(false)}
        className={`${activeBtn['*'] === 'categories' ? activeBtnStyles : notActiveBtnStyles}`}>
            <IoOptionsOutline fontSize={24} className={`${activeBtn['*'] === 'categories' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
            <p className='cursor-pointer text-white absolute left-20  text-sm font-light' >Category</p>
        
        </NavLink>
        
        
    </div>
  )
}

export default Sidebar