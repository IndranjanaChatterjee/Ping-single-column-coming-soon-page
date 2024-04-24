import React from "react";
import logo from "../assets/images/logo.svg";
import img from "../assets/images/illustration-dashboard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center m-[2rem] ">
      <img src={logo} alt="logo" />
      <h1 className="text-[#969696] text-center">
        We are launching <b className="text-[#000000]">soon!</b>
      </h1>

      <p className="text-[#2f3334] text-center">Subscribe and get notified</p>
      <div className="flex flex-row justify-center items-center gap-[1rem] sm:flex-nowrap flex-wrap">
        <input
          type="text"
          className="border-solid border-[2px] border-[#d8dae6] rounded-[2rem] pl-[1.5rem] h-[3rem] w-full sm:w-[20rem]"
          placeholder="Your Email address."
        />
        <button className="bg-[#4d7bf3] text-[#dcf3ff] sm:w-[10rem] w-full h-[3rem] rounded-[2rem]">
          Notify Me
        </button>
      </div>
      <img src={img} alt="img" className="sm:w-[50%] w-[100%]" />
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
        </svg>
        <FontAwesomeIcon icon={faEnvelope} className="text-red-300 hover:text-black"/>
        
      </div>
    </section>
  );
}
