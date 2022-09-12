import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex  justify-centen items-center my-5"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor}></img>
      </div>
      <div className="flex-1 mx-5">
        <h3 className="text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an appointment Today</h2>
        <p className="text-white py-3">
        If you would like to visit a specialist or receive treatment at any Hospital near you, make an appointment here. Our care team will be in touch with more information on what to do next.

        </p>
        <Link to="hospital"><PrimaryButton>GET Started</PrimaryButton></Link>

      </div>
    </section>
  );
};

export default MakeAppoinment;
