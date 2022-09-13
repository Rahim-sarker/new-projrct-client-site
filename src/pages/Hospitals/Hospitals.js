import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import SingleHospital from './SingleHospital';

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(()=>{
        fetch('hospitals.json')
        .then(res => res.json())
        .then(data => setHospitals(data))
    },[])

    return (
        <div> 
          <h1 className='text-2xl text-center font-bold text-purple-500 my-5'>Select Your Nearest Hospital</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
           {
            hospitals.map(hospital => <SingleHospital
             key={hospital.id}
             hospital={hospital}
            ></SingleHospital>)
           }
        </div>
        <div className='mt-5'><Footer></Footer></div>
        </div>
        

       
    );
};

export default Hospitals;