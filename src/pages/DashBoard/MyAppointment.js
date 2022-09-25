import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
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

   const handledelete = id =>{
    const proceed = window.confirm('Are you sure to cancel ?');
    if(proceed){
      const url = `http://localhost:5000/patient/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount > 0){
           const remaining = appoinments.filter(patient =>patient._id !== id);
           setAppoinments(remaining);
        }
      })
    }
   }



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
        <th>Consultant</th>
        <th>Cancel Appointment</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    
     {
         appoinments.map((a ,index) =><tr key={a._id}>
            <th>{index+1}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
            <td>{a.doctor}</td>
            <td><button onClick={()=>handledelete(a._id)} class="btn btn-xs btn-error">Cancel</button>
            </td>
            <td>
              {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}
              {(a.price && a.paid) && 
               <div>
                <p><span className='text-success font-bold'>Paid</span></p>
                {/* <p>Transaction Id: <span className='text-success font-bold'>{a.transactionId}</span></p> */}
               </div>
              }
              </td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;
