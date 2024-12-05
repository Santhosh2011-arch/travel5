import React from "react";
import PageTitle from '../title/PageTitle';

const OurDestination = () => {
  // Example data for the grid items
  const locations = [
    {
      title: "Bromo, East Java",
      subtitle: "Bromo Tengger Tour",
      img: "https://images.pexels.com/photos/29480808/pexels-photo-29480808/free-photo-of-paddleboarding-on-a-serene-urban-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/700x400", // Replace with actual images
    },
    {
      title: "Denpasar, Bali",
      subtitle: "Bali Beach Tourism",
      img: "https://images.pexels.com/photos/29390501/pexels-photo-29390501/free-photo-of-aerial-beach-view-with-waves-and-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/400x300",
    },
    {
      title: "Lampung, South Sumatra",
      subtitle: "Sumatra Tourism",
      img: "https://images.pexels.com/photos/29482658/pexels-photo-29482658/free-photo-of-charming-waterfront-homes-by-tranquil-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/400x300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">


            {/* Section Heading */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-4 md:mb-0">
        <PageTitle title={'Tour Packages'} subTitle={'Our Tourist Destination'}/>
        </div>
        <div className="md:w-1/2 text-gray-600 text-center md:text-left">
          <p>
            Extraordinary natural beauty, enjoy the rich culture, and experience
            the friendliness of the local people. 
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={location.img}
              alt={location.title}
              className="w-full h-65 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{location.title}</h3>
              <p className="text-sm">{location.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDestination;



