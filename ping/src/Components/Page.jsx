import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import img from "../assets/images/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFontAwesome,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import isEmail from "validator/lib/isEmail";

export default function Page() {
  const [inputVal, setInputValue] = useState('');
  const [show, setShow] = useState(false);
  const getVal = (e) => {
    setInputValue(e.target.value);
    
  };
  const Check = () => {
    

    if (!validator.isEmail(inputVal))
    {
        setShow(true);
        
        
    }
  };
  return (
    <section className="flex flex-col justify-center items-center m-[2rem] ">
      <img src={logo} alt="logo" className="mt-[4rem]" />
      <h1 className="text-[#969696] text-center sm:text-[3rem] text-[1.6rem] mt-[2rem]">
        We are launching <b className="text-[#000000]">soon!</b>
      </h1>

      <p className="text-[#2f3334] text-center mt-[0.4rem] mb-[1.8rem]">
        Subscribe and get notified
      </p>
      <div className="flex flex-row justify-center items-start gap-[1rem] sm:flex-nowrap flex-wrap ">
        <div className="flex flex-col justify-start w-full sm:w-[25rem]">
        <input
          type="text"
          className="border-solid border-[2px] border-[#d8dae6] rounded-[2rem] pl-[1.5rem] h-[3rem] w-full sm:w-[25rem]"
          placeholder="Your Email address."
          value={inputVal}
          onChange={getVal}
        />
        <p className={`text-[#f24f5d] italic pl-[1.5rem] ${show?"block":"hidden"}`}>Please provide a valid email</p>
        </div>
        <button
          className="bg-[#4d7bf3] text-[#dcf3ff] sm:w-[10rem] w-full h-[3rem] rounded-[2rem]"
          onClick={Check}
        >
          Notify Me
        </button>
      </div>
      <img src={img} alt="img" className="md:w-[46%] w-[100%] mt-[4.5rem]" />
      <div className="flex justify-center items-center gap-[1.5rem] mt-[6rem] mb-[1.8rem]">
        <div className="border-solid border-[2px] p-[0.5rem] rounded-full w-[2rem] h-[2rem] flex justify-center items-center hover:bg-[#4a7beb] hover:cursor-pointer hover:text-[#ffffff] text-[#4a7beb]">
          <FontAwesomeIcon
            icon={faFacebookF}
            className=" w-[2rem]   transition-all ease-in-out duration-300"
          />
        </div>
        <div className="border-solid border-[2px] p-[0.5rem] rounded-full w-[2rem] h-[2rem] flex justify-center items-center hover:bg-[#4a7beb] hover:cursor-pointer hover:text-[#ffffff] text-[#4a7beb]">
          <FontAwesomeIcon
            icon={faTwitter}
            className=" w-[2rem]   transition-all ease-in-out duration-300"
          />
        </div>
        <div className="border-solid border-[2px] p-[0.5rem] rounded-full w-[2rem] h-[2rem] flex justify-center items-center hover:bg-[#4a7beb] hover:cursor-pointer hover:text-[#ffffff] text-[#4a7beb]">
          <FontAwesomeIcon
            icon={faInstagram}
            className=" w-[2rem]   transition-all ease-in-out duration-300"
          />
        </div>
      </div>
      <p className="text-center text-[#c4c4c4]">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </section>
  );
}
