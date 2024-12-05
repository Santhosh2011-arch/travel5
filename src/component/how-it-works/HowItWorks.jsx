import React, { useState } from "react";
import PageTitle from "../title/PageTitle";

const HowItWorks = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    date: "",
    budget: "",
    guests: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert(
      `Search Details:\nDate: ${formData.date}\nBudget: ${formData.budget}\nGuests: ${formData.guests}`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Image with Search Bar */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/26556215/pexels-photo-26556215/free-photo-of-woman-hiking-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Travel Destination"
              className="rounded-lg w-full h-72 object-cover lg:h-full hw-img"
            />
            <div className="form-wrapper bg-black bg-opacity-40">
            <div className=" inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 rounded-lg">

     <form
                className="search-bar flex items-center gap-2 flex-wrap justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                  className="text-input-ov p-2 rounded"
                />
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget"
                  className="text-input-ov p-2 rounded"
                />
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Guests"
                  className="text-input-ov p-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Search
                </button>
              </form>
              <p className="mt-4 text-center text-sm">
                Embark on a journey to find your dream destination, where adventure and relaxation await.
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* Right Section: Steps */}
        <div className="w-full lg:w-1/2 space-y-6 right-sectio">
          <PageTitle title="How it works" subTitle="One click for you" />
          <div className="space-y-6 steps">
            <div className="space-y-2 step">
              <h4 className="font-bold">Find your destination</h4>
              <p className="text-gray-600">
                Embark on a journey to discover your dream destination, where adventure and relaxation await.
              </p>
            </div>
            <div className="space-y-2 step">
              <h4 className="font-bold">Book a ticket</h4>
              <p className="text-gray-600">
                Ensure a smooth travel experience by booking tickets to your preferred destination via our platform.
              </p>
            </div>
            <div className="space-y-2 step">
              <h4 className="font-bold">Make payment</h4>
              <p className="text-gray-600">
                We offer a variety of payment options to meet your preferences and ensure a hassle-free process.
              </p>
            </div>
            <div className="space-y-2 step">
              <h4 className="font-bold">Explore destination</h4>
              <p className="text-gray-600">
                Immerse yourself in a captivating tapestry of sights, sounds, and tastes as you explore ancient streets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
