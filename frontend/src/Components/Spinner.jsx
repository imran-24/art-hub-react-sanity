import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";



function Spinner({message}) {
  let [loading, setLoading] = useState(true);

  return (

    <div className='flex flex-col items-center justify-center'>
        <p className='p-2 text-sm text-center'>{message}</p>
       <BarLoader
        color="#36d663"
        height={14}
        speedMultiplier={1}
        width={203}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        
    </div>
    
  );
}

export default Spinner;


