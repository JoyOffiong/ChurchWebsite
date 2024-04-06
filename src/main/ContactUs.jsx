import { Send } from "iconsax-react";
import React from "react";
import GoogleMap from "./LandingPagecomponents/Map";
// import Footer from "../sharedComponent/Footer";

function ContactUs() {
  return (
    <div className="bg-tetiaryColor flex flex-col mt-8 ">
      <div className=" justify-between flex-col md:flex-row flex items-center">
        {/* <div className="w-[60%] h-full">
      <img src="/assets/DL0.webp" alt="" className="object-cover w-full"/>
    </div> */}
        <div className="md:w-[50%] w-full">
          <GoogleMap />
        </div>
        <div className="flex mt-10 flex-col mx-auto w-full md:w-[40%]  rounded-lg shadow-lg top-24 bg-tetiaryColor ">
          <div className="flex gap-8">
            <div className="mt-4 text">
              <p className="font-bold text-[18px]">Contact US</p>
            </div>
          </div>

          <div className="my-5 flex flex-col mx-8 gap-4">
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Full Name</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input className="bg-tetiaryColor" placeholder="Full Name* " />
              </div>
            </div>
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Email Address</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input
                  className="bg-tetiaryColor"
                  placeholder="Email Address* "
                />
              </div>
            </div>
            <div className="flex-col flex">
              <span className="pb-2 font-medium ">Contact Address</span>
              <div className="rounded-lg  border-2 border-secondaryColor p-2">
                <input className="bg-tetiaryColor" placeholder="Full Name* " />
              </div>
            </div>

            <div className=" justify-end flex mt-8">
              <button className=" flex gap-2items-center bg-primaryColor text-tetiaryColor rounded-lg font-bold   text-[16px]  p-2 hover:bg-tetiaryColor hover:text-primaryColor transition-all ">
                {" "}
                Send <Send size="24" color="#FF8A65" variant="Bold" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ContactUs;
