import React, { useState } from 'react'
import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';


function Main() {
  const [sidebar, setSidebar] = useState(false);
  const [activeBtn, setActiveBtn] = useState('deviations');
  const navigate = useNavigate();
  const activeBtnStyles = ' border-b-2 border-green-500';
  return (
    <div className='w-full flex  flex-col h-full relative'>
        
    </div>
  )
}

export default Main