import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary ">Booking for: {name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-col-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered select-secondary w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-secondary input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
