import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointbg from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section style={{ background: `url(${appointbg})` }} className="py-10">
      <div>
        <div className="flex  justify-center">
          <h4 className="text-primary font-bold">Contact Us</h4>
        </div>
        <div className="flex  justify-center text-2xl mb-3 text-white">
          <h2>Stay connected with us</h2>
        </div>
      </div>
      <div>
        <div className="flex  justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="my-3 flex  justify-center ">
          <input
            type="Subject"
            placeholder="Subject"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex  justify-center">
          <textarea
            className="textarea textarea-primary w-full max-w-xs "
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex  justify-center py-3">
          <PrimaryButton>SUBMIT</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
