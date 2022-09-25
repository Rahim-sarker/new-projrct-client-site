import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
      <InfoCard
        cardTitle="Oppening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        open="24 hour available our service"
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-[#3A4256]"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        open="01945820385 ||
        01515600450"
      ></InfoCard>
    </div>
  );
};

export default Info;
