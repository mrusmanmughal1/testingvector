import Logo from "./Logo";
import fb from "../assets/social/logos_facebook.png";
import insta from "../assets/social/skill-icons_instagram.png";
import youtube from "../assets/social/logos_youtube-icon.png";
import discord from "../assets/social/logos_discord-icon.png";
import logo from "../assets/logo/vector.png";
import robot from "../assets/logo/robot.svg";
const Footer = () => {
  return (
    <div className=" relative  py-16  w-[90%] m-[auto] text-white">
      <div className="  bottom-0 right-0   hidden md:block   radient-effect "></div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div className="flex  justify-center">
          <div className=" ">
            <div className="relative  mt-10">
              <img
                src={robot}
                alt=""
                className="  absolute -top-11 z-20 Veritical_wave  w-20  md:left-4 md:w-[120px] "
              />
              <img src={logo} alt="" className="logo  z-10 w-20 md:w-[150px]" />
            </div>
          </div>
        </div>
        <div className="  flex flex-col gap-6 md:gap-0 justify-between relative">
        <div className="radient-effect  block md:hidden top-40 right-0 "></div>

          <p className="text-center  mb-4 md:mb-0 text-lg leading-9 md:text-lg md:text-start">
            Follow and join all our social media accounts so that you keep getting related information of our system.
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-6">
            <a href="" target="_blank" className="p-2 bg-black rounded-full">
              <img src={fb} alt="" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" className="p-2 bg-black rounded-full">
              <img src={insta} alt="" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" className="p-2 bg-black rounded-full">
              <img src={youtube} alt="" className="w-5 h-5" />
            </a>
            <a href="" target="_blank" className="p-2 bg-black rounded-full">
              <img src={discord} alt=""  className="w-5 h-5"/>
            </a>
          </div>
          <p className="hidden md:block text- md:text-xl">All rights reserved @victorhub</p>
        </div>
        <div className="flex justify-center ">
          <div className="text-center lg:text-start">
            <p className="font-bold text-[1.8rem] md:text-2xl">Quick Links</p>
            <ul className="space-y-4 text-2xl md:text-xl mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Faq</li>
              <li>Roadmap</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center lg:text-start">
            <p className="font-bold  text-[1.8rem] md:text-2xl">Support</p>
            <ul className="space-y-4 text-2xl md:text-xl mt-4">
              <li>Help & Support</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-300 text-center block md:hidden pt-14">
          <p className="text-xl md:text-base">All rights reserved @Victorhub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
