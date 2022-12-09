import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container px-10 py-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
        <div className="font-inter w-full text-start md:w-3/6">
          <h2 className="text-5xl font-bold text-heading">
            Eliminate Cold Calling <br />
            Anxiety
          </h2>
          <p className="text-start font-semibold text-subtext mt-3">
            Empower your salesforce with the confidence, knowledge, and skills
            using the first AI cold calling coach for unlimited mock calls. Ramp
            sales reps in days, instead of weeks without burning your lead list.
          </p>
          <div className="flex items-center gap-2 mt-5 border border-gray-700 rounded-full p-1 w-full md:w-3/4">
            <button className="w-48 md:w-60 bg-minor uppercase py-2 px-3 rounded-full text-white text-xs md:text-lg font-medium">
              Early Access
            </button>
            <input
              type="email"
              id="email"
              className="border-none p-0 w-full placeholder:text-start text-gray-900 text-sm rounded-lg focus:ring-transparent block p-2.5"
              placeholder="name@rhetora.cc"
              required
            />
          </div>
        </div>
        <div className="w-full md:w-3/6">
          <img
            src={require("../assets/hero-image.svg").default}
            alt="hero"
            className="float-right"
          />
        </div>
      </div>
      <div className="py-20 mx-20">
        <div className="flex flex-col text-xs font-semibold items-center uppercase">
          <p>As seen on</p>
          <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div  className="flex justify-center"><img src={require("../assets/samsung.png.svg").default} alt="samsung" className="m-0" /></div>
            <div  className="flex justify-center"><img src={require("../assets/stanley-security.svg").default} alt="stanley" className="m-0" /></div>
            <div  className="flex justify-center"><img src={require("../assets/booking-com.svg.svg").default} alt="booking" className="m-0" /></div>
            <div className="flex justify-center"><img src={require("../assets/ibm.svg.svg").default} alt="ibm" className="m-0" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;