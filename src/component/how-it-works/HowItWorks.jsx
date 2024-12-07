import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../title/PageTitle";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HowItWorks = () => {
  const [dropdown, setDropdown] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [budget, setBudget] = useState(null);
  const [guests, setGuests] = useState(null);
  const menuRef = useRef();
  const datePickerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    setDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const handleIconClick = () => {
    datePickerRef.current?.setOpen(true);
  };

  const handleSearch = () => {
    alert(`Search initiated with: 
    Date: ${startDate ? startDate.toLocaleDateString() : "Not Selected"}
    Budget: ${budget || "Not Selected"}
    Guests: ${guests || "Not Selected"}`);
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
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center text-white p-4">
              <div
                ref={menuRef}
                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg p-4 w-full max-w-2xl flex items-center justify-between gap-4"
              >
                {/* Date Picker */}
                <div className="flex items-center gap-x-2 w-1/3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText=" Date"
                    className="w-full bg-white/50 px-4 py-2 rounded-full text-black focus:outline-none text-sm hover:bg-yellow-700 ease-in-out duration-300"
                    ref={datePickerRef}
                  />
                  <FaChevronDown
                    onClick={handleIconClick}
                    className="cursor-pointer text-black"
                  />
                </div>

                {/* Budget Picker */}
                <div className="relative flex items-center gap-x-2 w-1/3">
                  <button
                    onClick={() => toggleDropdown("budget")}
                    className="w-full flex items-center justify-between bg-white/50 px-4 py-2 rounded-full text-black text-sm hover:bg-yellow-700 ease-in-out duration-300"
                  >
                    <span>{budget || "Budget"}</span>
                    <FaChevronDown />
                  </button>
                  {dropdown === "budget" && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
                      <button
                        onClick={() => setBudget("$100-$500")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        $100-$500
                      </button>
                      <button
                        onClick={() => setBudget("$500-$1000")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        $500-$1000
                      </button>
                      <button
                        onClick={() => setBudget("Above $1000")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        Above $1000
                      </button>
                    </div>
                  )}
                </div>

                {/* Guests Picker */}
                <div className="relative flex items-center gap-x-2 w-1/3">
                  <button
                    onClick={() => toggleDropdown("guests")}
                    className="w-full flex items-center justify-between bg-white/50 px-4 py-2 rounded-full text-black text-sm hover:bg-yellow-700 ease-in-out duration-300"
                  >
                    <span>{guests || "Guests"}</span>
                    <FaChevronDown />
                  </button>
                  {dropdown === "guests" && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
                      <button
                        onClick={() => setGuests("1-2")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        1-2 Guests
                      </button>
                      <button
                        onClick={() => setGuests("3-5")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        3-5 Guests
                      </button>
                      <button
                        onClick={() => setGuests("6+")}
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                      >
                        6+ Guests
                      </button>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-white/50 text-black px-6 py-2 rounded-full text-sm flex items-center gap-x-2 hover:bg-yellow-700 ease-in-out duration-300"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
              <p className="mt-4 text-center text-sm">
                Embark on a journey to find your dream destination, where adventure and relaxation await.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Steps */}
        <div className="w-full lg:w-1/2 space-y-6 right-section">
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















// import React, { useState } from "react";
// import PageTitle from "../title/PageTitle";

// const HowItWorks = () => {
  
//   const [formData, setFormData] = useState({
//     date: "",
//     budget: "",
//     guests: "",
//   });

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     alert(
//       `Search Details:\nDate: ${formData.date}\nBudget: ${formData.budget}\nGuests: ${formData.guests}`
//     );
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section: Image with Search Bar */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative">
//             <img
//               src="https://images.pexels.com/photos/26556215/pexels-photo-26556215/free-photo-of-woman-hiking-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt="Travel Destination"
//               className="rounded-lg w-full h-72 object-cover lg:h-full hw-img"
//             />
//             <div className="form-wrapper bg-black bg-opacity-40">
//             <div className=" inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 rounded-lg">

//      <form
//                 className="search-bar flex items-center gap-2 flex-wrap justify-center"
//                 onSubmit={handleSubmit}
//               >
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   placeholder="Date"
//                   className="text-input-ov p-2 rounded text-gray-500"
//                 />
//                 <input
//                   type="text"
//                   name="budget"
//                   value={formData.budget}
//                   onChange={handleChange}
//                   placeholder="Budget"
//                   className="text-input-ov p-2 rounded"
//                 />
//                 <input
//                   type="number"
//                   name="guests"
//                   value={formData.guests}
//                   onChange={handleChange}
//                   placeholder="Guests"
//                   className="text-input-ov p-2 rounded"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-white text-gray-500 px-4 py-2 "
//                 >
//                   Search
//                 </button>
//               </form>
//               <p className="mt-4 text-center text-sm">
//                 Embark on a journey to find your dream destination, where adventure and relaxation await.
//               </p>
//             </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Steps */}
//         <div className="w-full lg:w-1/2 space-y-6 right-sectio">
//           <PageTitle title="How it works" subTitle="One click for you" />
//           <div className="space-y-6 steps">
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Find your destination</h4>
//               <p className="text-gray-600">
//                 Embark on a journey to discover your dream destination, where adventure and relaxation await.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Book a ticket</h4>
//               <p className="text-gray-600">
//                 Ensure a smooth travel experience by booking tickets to your preferred destination via our platform.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Make payment</h4>
//               <p className="text-gray-600">
//                 We offer a variety of payment options to meet your preferences and ensure a hassle-free process.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Explore destination</h4>
//               <p className="text-gray-600">
//                 Immerse yourself in a captivating tapestry of sights, sounds, and tastes as you explore ancient streets.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;



// import React, { useState, useRef, useEffect } from "react";
// import PageTitle from "../title/PageTitle";
// import { FaChevronDown, FaSearch } from "react-icons/fa";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const HowItWorks = () => {
//   const [dropdown, setDropdown] = useState(null); 
//   const [startDate, setStartDate] = useState(null); 
//   const [budget, setBudget] = useState(null); 
//   const [guests, setGuests] = useState(null); 
//   const menuRef = useRef();
//   const datePickerRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (menuName) => {
//     setDropdown((prev) => (prev === menuName ? null : menuName));
//   };

//   const handleIconClick = () => {
//     datePickerRef.current?.setOpen(true);
//   };

//   const handleSearch = () => {
//     alert(`Search initiated with: 
//     Date: ${startDate ? startDate.toLocaleDateString() : "Not Selected"}
//     Budget: ${budget || "Not Selected"}
//     Guests: ${guests || "Not Selected"}`);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section: Image with Search Bar */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative">
//             <img
//               src="https://images.pexels.com/photos/26556215/pexels-photo-26556215/free-photo-of-woman-hiking-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt="Travel Destination"
//               className="rounded-lg w-full h-72 object-cover lg:h-full hw-img"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
//               <div
//                 ref={menuRef}
//                 className="relative z-30 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg p-4 w-full max-w-2xl flex items-center justify-between gap-6 mb-4"
//               >
//                 {/* Date Picker */}
//                 <div className="relative flex items-center gap-x-2">
//                   <button
//                     onClick={() => setDropdown((prev) => (prev === "date" ? null : "date"))}
//                     className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black"
//                   >
//                     <DatePicker
//                       selected={startDate}
//                       onChange={(date) => setStartDate(date)}
//                       placeholderText="Select Date"
//                       className="bg-transparent text-black focus:outline-none"
//                     />
//                     <FaChevronDown
//                       onClick={handleIconClick}
//                       className="cursor-pointer"
//                     />
//                   </button>
//                 </div>

//                 {/* Budget Picker */}
//                 <div className="relative flex items-center gap-x-2">
//                   <button
//                     onClick={() => toggleDropdown("budget")}
//                     className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black hover:bg-yellow-700 ease-in-out duration-300"
//                   >
//                     Budget
//                     <FaChevronDown />
//                   </button>
//                   {dropdown === "budget" && (
//                     <div className="absolute top-full left-0 mt-2 w-48 bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
//                       <button
//                         onClick={() => setBudget("$100-$500")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         $100-$500
//                       </button>
//                       <button
//                         onClick={() => setBudget("$500-$1000")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         $500-$1000
//                       </button>
//                       <button
//                         onClick={() => setBudget("Above $1000")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         Above $1000
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Guests Picker */}
//                 <div className="relative flex items-center gap-x-2">
//                   <button
//                     onClick={() => toggleDropdown("guests")}
//                     className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black hover:bg-yellow-700 ease-in-out duration-300"
//                   >
//                     Guests
//                     <FaChevronDown />
//                   </button>
//                   {dropdown === "guests" && (
//                     <div className="absolute top-full left-0 mt-2 w-48 bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
//                       <button
//                         onClick={() => setGuests("1-2")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         1-2 Guests
//                       </button>
//                       <button
//                         onClick={() => setGuests("3-5")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         3-5 Guests
//                       </button>
//                       <button
//                         onClick={() => setGuests("6+")}
//                         className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
//                       >
//                         6+ Guests
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Search Button */}
//                 <button
//                   onClick={handleSearch}
//                   className="bg-white/50 text-black px-6 py-2 rounded-full flex items-center gap-x-2 hover:bg-yellow-700 ease-in-out duration-300"
//                 >
//                   <FaSearch />
//                   Search
//                 </button>
//               </div>
//               <p className="mt-4 text-center text-sm">
//                 Embark on a journey to find your dream destination, where adventure and relaxation await.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2 space-y-6 right-sectio">
//           <PageTitle title="How it works" subTitle="One click for you" />
//           <div className="space-y-6 steps">
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Find your destination</h4>
//               <p className="text-gray-600">
//                 Embark on a journey to discover your dream destination, where adventure and relaxation await.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Book a ticket</h4>
//               <p className="text-gray-600">
//                 Ensure a smooth travel experience by booking tickets to your preferred destination via our platform.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Make payment</h4>
//               <p className="text-gray-600">
//                 We offer a variety of payment options to meet your preferences and ensure a hassle-free process.
//               </p>
//             </div>
//             <div className="space-y-2 step">
//               <h4 className="font-bold">Explore destination</h4>
//               <p className="text-gray-600">
//                 Immerse yourself in a captivating tapestry of sights, sounds, and tastes as you explore ancient streets.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;



