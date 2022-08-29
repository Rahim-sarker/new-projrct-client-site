import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-5">
      <h3 className="text-center text-2xl text-secondary font-bold my-5 ">
        Available Services on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
