import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import heroImage from "../../assets/Herobanner.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const HeroSection = () => {
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
    <section
      className="relative w-full bg-cover bg-center flex flex-col items-center justify-center text-center pt-24"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "calc(100vh+2cm)", 
      }}
    >
      {/* Overlay for text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Hero Text */}
      <div className="relative z-20 text-white mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Extraordinary natural and
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          cultural charm
        </h2>
        <p className="text-xl sm:text-2xl mb-8">
          Exploring Indonesia is an unforgettable adventure
        </p>
      </div>

      {/* Dropdown Menu Bar */}
      <div
        ref={menuRef}
        className="relative z-30 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg p-4 w-full max-w-2xl flex items-center justify-between gap-6 mb-12 px-4"
      >
      {/* Date Picker */}
      <div className="relative flex items-center gap-x-2">
         <button
          onClick={() => setDropdown((prev) => (prev === "date" ? null : "date"))}
          className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black"
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Date"
              className="bg-transparent text-black focus:outline-none caladar-ov  datepicker-placeholder"
            />
                <FaChevronDown
                  onClick={handleIconClick} 
                  className="cursor-pointer"
                />
        </button>
      </div>


        {/* Budget Picker */}
        <div className="relative flex items-center gap-x-2">
          <button
            onClick={() => toggleDropdown("budget")}
            className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black hover:bg-yellow-700 ease-in-out duration-300"
          >
            Budget
            <FaChevronDown />
          </button>
          {dropdown === "budget" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
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
        <div className="relative flex items-center gap-x-2">
          <button
            onClick={() => toggleDropdown("guests")}
            className="flex items-center gap-x-2 bg-white/50 px-4 py-2 rounded-full text-black hover:bg-yellow-700 ease-in-out duration-300"
          >
            Guests
            <FaChevronDown />
          </button>
          {dropdown === "guests" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/30 backdrop-blur-md border border-white/40 rounded shadow-md z-50">
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
          className="bg-white/50 text-black px-6 py-2 rounded-full flex items-center gap-x-2 hover:bg-yellow-700 ease-in-out duration-300"
        >
          <FaSearch />
          Search
        </button>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 card-ov">
          <div className="bg-white/80 text-black p-6 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-2">10M+</h3>
            <p className="text-lg text-center">Total Customers</p>
          </div>
          <div className="bg-white/80 text-black p-6 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-2">12K+</h3>
            <p className="text-lg text-center">Total Destinations</p>
          </div>
          <div className="bg-white/80 text-black p-6 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-2">5K+</h3>
            <p className="text-lg text-center">5-Star Reviews</p>
          </div>
          <div className="bg-white/80 text-black p-6 rounded-lg shadow-lg flex flex-col items-center backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-2">200+</h3>
            <p className="text-lg text-center">Guides Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
