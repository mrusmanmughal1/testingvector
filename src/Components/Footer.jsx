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
      <div className="  bottom-0 right-0      radient-effect "></div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div className="flex  justify-center">
          <div className=" ">
            <div className="relative  mt-10">
              <img
                src={robot}
                alt=""
                className="  absolute -top-11 z-20 Veritical_wave  w-24  md:left-4 md:w-[120px] "
              />
              <img src={logo} alt="" className="logo  z-10 w-24 md:w-[150px]" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur. Tincidunt arcu quis nec quis
            faucibus massa ultricies. Arcu mauris donec sem faucibus in
            tristique dignissim odio.
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-6">
            <a href="" target="_blank">
              <img src={fb} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={insta} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={youtube} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={discord} alt="" />
            </a>
          </div>
          <p className="hidden md:block">All rights reserved @victorhub</p>
        </div>
        <div className="flex justify-center ">
          <div className="text-center lg:text-start">
            <p className="font-bold text-xl">Quick Links</p>
            <ul className="space-y-4 mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Faq</li>
              <li>Roadmap</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center lg:text-start">
            <p className="font-bold text-xl">Support</p>
            <ul className="space-y-4 mt-4">
              <li>Help & Support</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-300 text-center block md:hidden pt-14">
          <p>All rights reserved @Victorhub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
