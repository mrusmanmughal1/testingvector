import logo from "../assets/logo/vector.png";
import robot from "../assets/logo/robot.svg";

const Logo = () => {
  return (
    <div className="relative  mt-10">
      <img
        src={robot}
        alt=""
        className="  absolute -top-10 z-20 Veritical_wave  w-24  left-3 md:w-[100px] "
      />
      <img src={logo} alt="" className="logo  z-10 w-24 md:w-[120px]" />
    </div>
  );
};

export default Logo;
