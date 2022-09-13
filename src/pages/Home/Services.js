import React from "react";
import icu from "../../assets/images/icu.jpg";
import lab from "../../assets/images/lab.jpg";
import pharmacy from "../../assets/images/pharmacy.jpg";

import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Intensive care units (ICU)",
      img: icu,
      description: "Specialist hospital wards that provide treatment and monitoring for people who are very ill",
    },
    {
      _id: 2,
      name: "Laboratory Tests",
      img: lab,
      description: "Testing a sample of blood, urine, or other substance from the body",
    },
    {
      _id: 3,
      name: "Medicine Available",
      img: pharmacy,
      description: "Hospital dispensary where medicinal drugs are sold.preparing, preserving, compounding, and dispensing medical drugs",
    },
  ];

  return (
    <div className="mt-12 mx-10">
      <div className="text-center">
        <h3 className="text-1xl text-secondary font-bold">OUR SERVICES</h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
