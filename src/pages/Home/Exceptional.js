import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/patientcare.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Exceptional = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={treatment} className="w-80 h-80 lg:w-96 rounded-lg shadow-2xl" />
        <div className="mx-6">
          <h1 className="text-5xl font-bold">
            Exceptional Patient Care, on Our Terms
          </h1>
          <p className="py-6">
          Our focus is on the complete patient experience. We’re organizationally structured for increasing the speed with which our treatment solutions progress from research lab to production facility to patient.
          </p>
          <Link to="hospital"><PrimaryButton>GET Started</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
