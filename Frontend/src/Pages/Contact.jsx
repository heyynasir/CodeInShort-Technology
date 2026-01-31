import React from "react";
import contactbg from "../assets/contactbg.png";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contacts"
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
        <div>
              <h1 className="sm:pt-[8vw] pt-[26vw] sm:px-16 px-6 text-5xl font-semibold">CONTACT US</h1>
              <p className="sm:ml-18 ml-8 mt-4 font-semibold">DROP A MESSAGE</p>
            <div className="w-full h-full flex">
                  <div className="icons sm:ml-0 ml-3 w-[10vw] text-blue-600 flex flex-col gap-8 items-center text-2xl h-[65vh]">
                      <a className="mt-16" href=""><SiGmail /></a>
                      <a href=""><FaInstagram /></a>
                      <a href=""><FaLinkedin /></a>
                      <a href=""><FaFacebookSquare /></a>
                  </div>

                  <form className="w-[40vw] space-y-4 h-[65vh] ml-6 mt-5 " action="">
                        <input placeholder="Full Name*" required
                        className="sm:w-[28vw] w-[70vw] border rounded-md px-2 outline-none py-2" type="text" />

                        <input placeholder="Email*" required
                        className="sm:w-[28vw] w-[70vw] border rounded-md px-2 outline-none py-2" type="text" />

                        <input placeholder="Phone Number*"  required
                        className="sm:w-[28vw] w-[70vw] border rounded-md px-2 outline-none py-2" type="text" />

                        <input placeholder="Subject*"  required
                        className="sm:w-[28vw] w-[70vw] border rounded-md px-2 outline-none py-2" type="text" />

                        <textarea placeholder="Message*"  required
                        className="sm:w-[28vw] w-[70vw]  h-[15vh] border rounded-md px-2 outline-none py-2" type="text" />
                        
                        <button className="sm:w-[28vw] sm:mb-0  w-[70vw] py-2 hover:bg-blue-800 duration-300 cursor-pointer bg-blue-600 rounded-lg">Submit</button>
                  </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
