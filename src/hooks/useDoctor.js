import { useEffect, useState } from "react"

const useDoctor = doctor =>{
    const [doct , setDoct] = useState(false);
    useEffect(()=>{
        const email = doctor?.email;
        if(email){

            fetch(`http://localhost:5000/doctor/${email}`,{
                method: 'GET',
                headers:{
                   'content-type' : 'application/json',
                   authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
               
               })
               .then(res => res.json())
               .then(data => {   
                setDoct(data.doctor)
               })
        }

    },[doctor])
    return [doct]
}

export default useDoctor;