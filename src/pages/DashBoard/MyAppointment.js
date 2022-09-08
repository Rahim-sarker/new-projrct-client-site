import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appoinments,setAppoinments] = useState([])
 
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
              method:'GET',
              headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              console.log('res',res);
              if(res.status === 401 || res.status === 403){
                //Start from here 6
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')
              }
              return res.json()
            })
            .then(data => {

              setAppoinments(data)
            })
        }
    },[user])


    return (
        <div>
            <h1 className='py-2'>My appointment {appoinments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
    
     {
         appoinments.map((a ,index) =><tr>
            <th>{index+1}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;