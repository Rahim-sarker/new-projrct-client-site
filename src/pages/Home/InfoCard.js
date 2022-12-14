import React from "react";

const InfoCard = ({ img, cardTitle, bgClass,open }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100  shadow-xl text-white pl-5 pt-5  ${bgClass}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{open}</p>
      </div>
    </div>
  );
};

export default InfoCard;
