import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service, setTreatment }) => {
  
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
              8 am - 4 pm

          {/* {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )} */}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
         
        </p>
        <p><small>Consultation fees {price} tk</small></p>

        <div className="card-actions justify-center">


        <Link to="/doctor"><button class="btn btn-outline btn-primary">Available Doctors</button></Link>

          <label
            htmlFor="booking-modal"
            className=" modal-button btn btn-secondary uppercase"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
          >
            Book appointment
          </label>

        </div>
      </div>
    </div>
  );
};

export default Service;
