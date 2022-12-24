import React from "react";
import HubspotForm from "react-hubspot-form";

const HeroSection = () => {
  return (
    <div>
      <div className="container max-w-5xl pt-24 md:pt-16 pb-16 mx-auto flex flex-col sm:flex md:flex-row items-center justify-between gap-8 w-100">
        <div className="font-inter w-full text-start md:w-3/6">
          <h2 className="text-4xl lg:text-5xl font-bold text-main">
            Eliminate Cold Calling <br />
            Anxiety
          </h2>
          <p className="text-start font-normal text-lg text-subtext mt-3">
            Empower your salesforce with the confidence, knowledge, and skills
            using the first AI cold calling coach for unlimited mock calls. Ramp
            sales reps in days, instead of weeks without burning your lead list.
          </p>
          {/* <div className="flex items-center gap-2 mt-5 border border-gray-700 rounded-full p-1 w-full md:w-3/4 lg:w-full"> */}
          <HubspotForm
            portalId="22700288"
            formId="5d003db2-c7e7-4230-b51f-cf526b584d4b"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </div>
        {/* </div> */}
        <div className="w-full md:w-3/6 lg:pb-32">
          <img
            src={require("../assets/hero-image.svg").default}
            alt="hero"
            className="float-right"
          />
        </div>
      </div>
      <div className="-mt-4 md:py-20 mx-20">
        <div className="flex flex-col text-sm font-semibold items-center uppercase">
          <p style={{ color: "#7C828D" }}>As seen on</p>
          <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex justify-center">
              <img
                src={require("../assets/samsung.png.svg").default}
                alt="samsung"
                className="m-0"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/stanley-security.svg").default}
                alt="stanley"
                className="m-0"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/booking-com.svg.svg").default}
                alt="booking"
                className="m-0"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/ibm.svg.svg").default}
                alt="ibm"
                className="m-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
