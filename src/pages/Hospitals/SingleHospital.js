import React from 'react';
import { Link } from "react-router-dom";
import PrimaryButton from '../Shared/PrimaryButton';

const SingleHospital = ({hospital}) => {
    const {name, image, id, address} = hospital;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{address}</p>
          <div class="card-actions">
         <Link to="/appoinment" ><PrimaryButton>Make Appointment</PrimaryButton></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleHospital;