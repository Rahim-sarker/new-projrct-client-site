import React from "react";
import { Link } from "react-router-dom";
import hospitalbed from '../../assets/images/hospitalbed.jpg'
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen sm:pr-10 lg:px-19">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hospitalbed} className="w-72 lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="sm:pr-19">
          <h1 className="text-5xl font-bold">Your Healthy Life Starts Here</h1>
          <p className="py-6 text-base">
          Don’t know expert doctors near you? Want to make a hassle-free appointment to an experienced doctor with a single tap? We are here for you.
          </p>
          <Link to="hospital"><PrimaryButton>GET Started</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
