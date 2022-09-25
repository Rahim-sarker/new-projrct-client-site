import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const YourPatient = () => {
  const [user] = useAuthState(auth);
    const [patients, setPatients] = useState([])
    const [chacked, setChacked] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/patients')
        .then(res => res.json())
        .then(data => setPatients(data))
    })

    const handleChange = (event) =>{
       setChacked(event.target.checked);
       console.log(chacked)
    }
    console.log(user)

    return (

        
      <div>
        <h1>Total patients {patients.length}</h1>
        <div class="overflow-x-auto mx-10 my-10">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Slot</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
           {
            patients.map((p,index)=>
                
                <tr>
               <th>{index+1}</th>
                <td>{p.patientName}</td>
                <td>{p.slot}</td>
                <td>
        
                <div class="form-control">
                <label class="label cursor-pointer">
                 
                  <input type="checkbox" checkede="checked" onClick={handleChange} class="checkbox checkbox-primary" />
                </label>
            </div>
  
                 </td>
              </tr>

                )
           }
          
            
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default YourPatient;