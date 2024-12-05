import React from "react";
import PageTitle from "../title/PageTitle";

const IndonesianTourism = () => {
  
  const locations = [
    {
      title: "Bromo, East Java",
      subtitle: "Bromo Tengger Tour",
      img: "https://images.pexels.com/photos/17816349/pexels-photo-17816349/free-photo-of-mount-bromo-peak-above-clouds-at-sunset-in-java-indonesia.jpeg?auto=compress&cs=tinysrgb&w=600/700x400", // Replace with actual images
    },
    {
      title: "Denpasar, Bali",
      subtitle: "Bali Beach Tourism",
      img: "https://images.unsplash.com/photo-1731352231718-89c2c2d1df29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8//400x300",
    },
    {
      title: "Lampung, South Sumatra",
      subtitle: "Sumatra Tourism",
      img: "https://images.unsplash.com/photo-1731271140119-34ad9551ff10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXw2c01WalRMU2tlUXx8ZW58MHx8fHx8//400x300",
    },
    {
      title: "Jogjakarta, Central Java",
      subtitle: "Borobudur Temple Tour",
      img: "https://images.pexels.com/photos/5505439/pexels-photo-5505439.jpeg?auto=compress&cs=tinysrgb&w=600/700x400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Heading */}
      <div className="indo-container mb-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <PageTitle title="Best Locations" subTitle="Indonesian Tourism" />
        </div>
        <div className="md:w-1/2 text-gray-600 text-center md:text-left">
          <p>
            Extraordinary natural beauty, enjoy the rich culture, and experience
            the friendliness of the local people. 
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-4 gap-6 m-auto media-center">
        {/* 1st Image - Large */}
        <div className="col-span-4 md:col-span-3">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={locations[0].img}
              alt={locations[0].title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{locations[0].title}</h3>
              <p className="text-sm">{locations[0].subtitle}</p>
            </div>
          </div>
        </div>

        {/* 2nd Image - Small */}
        <div className="col-span-4 md:col-span-1">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={locations[1].img}
              alt={locations[1].title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{locations[1].title}</h3>
              <p className="text-sm">{locations[1].subtitle}</p>
            </div>
          </div>
        </div>

        {/* 3rd Image - Small */}
        <div className="col-span-4 md:col-span-1">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={locations[2].img}
              alt={locations[2].title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{locations[2].title}</h3>
              <p className="text-sm">{locations[2].subtitle}</p>
            </div>
          </div>
        </div>

        {/* 4th Image - Large */}
        <div className="col-span-4 md:col-span-3">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={locations[3].img}
              alt={locations[3].title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{locations[3].title}</h3>
              <p className="text-sm">{locations[3].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndonesianTourism;
