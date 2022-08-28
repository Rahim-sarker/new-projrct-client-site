import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Rahim Sarker",
      review: "",
      img: people1,
      location: "Dhaka",
    },
    {
      _id: 2,
      name: "Dipa Sarker",
      review: "",
      img: people2,
      location: "Dhaka",
    },
    {
      _id: 3,
      name: "Jannatul Ara",
      review: "",
      img: people3,
      location: "Dhaka",
    },
  ];
  return (
    <section className="py-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className=" w-24 lg:w-48" src={quote}></img>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
