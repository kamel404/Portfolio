import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Contact() {
  const phoneNumber = "+96171605349"; // Replace with your phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20Kamel,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
      <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
      <p className="text-gray-400 text-base">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </p>
      <a href={whatsappLink} className="text-gray-400 text-2xl hover:text-white" target="_blank" rel="noreferrer">
        {phoneNumber}
      </a>
      <a href="mailto:faour5kamel@gmail.com" className="text-gray-400 text-2xl hover:text-white">
        faour5kamel@gmail.com
      </a>
      <div className="flex justify-center gap-5 mt-10">
        <a href="https://github.com/kamel404" target="_blank" className="text-4xl cursor-pointer" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kamel-faour/" target="_blank" className="text-4xl cursor-pointer" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;