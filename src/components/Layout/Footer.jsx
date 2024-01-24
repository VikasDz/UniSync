import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#fbfbfb]">
      <div
        className="gap-10
         text-center pt-4 text-black text-sm pb-4"
      >
        <span>© 2024. Made with ❣️ by UniSync Team.</span>
      </div>
    </div>
  );
};

export default Footer;
