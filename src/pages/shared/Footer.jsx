import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className="w-1/2 bg-[#1F2937] text-white text-end pt-24 pr-40">
          <h3 className="text-3xl font-medium mb-6">CONTACT US</h3>
          <p className="text-xl font-medium mb-8">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] w-1/2 text-white pl-40 pt-24 pb-36">
          <h3 className="text-3xl font-medium mb-6">Follow US</h3>
          <p className="text-xl font-medium mb-8">Join us on social media</p>
          <div className="flex gap-8 text-3xl">
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <p className="text-center text-xl font-medium py-4 bg-[#151515] text-white">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
