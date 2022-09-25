import React from 'react';
import { Link } from 'react-router-dom';

const DrCard = ({doctor}) => {
const {img,name,Speciality,Degree} = doctor;


    return (

 <div class="card  card-side bg-base-100 shadow-xl">
  <figure><img className='w-48  rounded-xl' src={img} alt="Doctor"/></figure>
  <div class="card-body">
    <h2 class="card-title font-bold">{name}</h2>
    <progress class="progress  w-56"></progress>
    <p> <span className='font-bold'>Speciality-</span>{Speciality}</p>
    <p>{Degree}</p>
    <div class="card-actions justify-end">
    <Link to="/appoinment">  <button class="btn btn-primary">go for appointment</button></Link>
    </div>
  </div>
</div> 



    );
};

export default DrCard;