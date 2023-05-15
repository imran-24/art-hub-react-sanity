import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from '../client';
import Spinner from '../Components/Spinner';
import MasonryLayout from '../Components/MasonryLayout';
import { feedQuery, searchQuery } from '../utils/data';

function Deviations() {
  const {category} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [deviations, setDeviations] = useState(null);
  useEffect(() => {
    setIsLoading(true)
    if(category){
        const query = searchQuery(category);
        client.fetch(query).then((data) => {
          setDeviations(data);
            setIsLoading(false);
        });
    }
    else {
        setIsLoading(true);
  
        client.fetch(feedQuery).then((data) => {
          console.log(data)
          setDeviations(data);
          setIsLoading(false);
        });
      }
    }, []);
  if(isLoading) return <Spinner message='We are adding new ideas to your feed!' />
  return (
    <div className=''>
      {
            deviations && <MasonryLayout deviations={deviations} />
        }
    </div>
  )
}

export default Deviations