import React, { useEffect, useState } from 'react';
import DrCard from './DrCard';

const DoctorProfile = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])

    return (
        <div> 
          <h1 className='text-2xl text-center font-bold text-purple-500 my-5'>Our Available Consultant</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
           {
            doctors.map( doctor => <DrCard  doctor={doctor}></DrCard>)
           }
        </div>
       
        </div>
    );
};

export default DoctorProfile;