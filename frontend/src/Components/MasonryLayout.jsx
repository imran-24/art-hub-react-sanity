import React from 'react'
import Deviation from './Deviation';
import Masonry from 'react-masonry-css'

const breakpointObj = {
    default: 5,
    3000: 8,
    2000: 5,
    1200: 4,
    1000: 2,
    500: 1,
  };
  

function MasonryLayout({deviations}) {


  return (
    <Masonry className="flex animate-slide-fwd"  breakpointCols={breakpointObj} >
        {
            deviations?.map((deviation) => (
               <Deviation key={deviation?._id} deviation={deviation} /> 
            ))
        }
    </Masonry>
  )
}

export default MasonryLayout