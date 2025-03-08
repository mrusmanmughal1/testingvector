import main from "../assets/Aboutmain/1.svg";

import one from "../assets/about/4.png";
import to from "../assets/about/2.png";
import three from "../assets/about/3.png";
import fore from "../assets/about/1.png";
import five from "../assets/about/5.png";



import r from "../assets/Aboutmain/r.png"
import b from "../assets/Aboutmain/bb.png"
import bg from "../assets/Aboutmain/2.png";


const AboutUs = () => {
  const arr = [
    { icons: one, text: "Gaming on Victor Hub" },
    { icons: to, text: "⁠Trading on Victor Exchange" },
    { icons: three, text: "Purchasing Victor Coin" },
    { icons: fore, text: "Building a Team" },
    { icons: five, text: "⁠Investing in Victor Hub Slots" },
  ];
  return (
    <section id="about" className="flex justify-center items-center  relative  flex-col text-white">
      <div className="radient-effect block md:hidden top-40    left-0 "></div>
      <div className=" green-radient block md:hidden -top-32   right-0 "></div>
      <div className="title_font  mb-10">About Us</div>
      <div className=" space-y-7 text-md  text-[15px]  lg:text-3xl w-[85%] my-4  lg:w-[80%] text-center ">
        <p className="md:leading-[3rem] Lato text-left md:text-center" >
          Victer hub is 100%  decenterlized platform which can not be controled by any person it is a automatic system which automatically controled by the blockchain and the blockchain chain is a chain of blocks and the block can not be broken so its clearly defined that it can't be hacked by any person you you have full security on your funds and wallets
        </p>


      </div>
      <div className="flex  gap-    lg:gap-4  w-[95%] md:w-[90%]   items-center md:items-end pb-0 pt-10  md:py-20">
        <div className="w-[50%] md:w-[40%] relative md:px-10 ">
          <div className=" vector  left-5 top-2   md:hidden inline-block">
            <img src={b} alt="" className="bg-slate-950/50 rounded-lg " />

          </div>
          <div className="block md:hidden absolute top-0 -z-10" >
            <img src={r} alt="" className="  " />

          </div>

          <img src={bg} alt="" className="  hidden md:block absolute -z-10 md:-left-4 top-2 md:-top-10 w-[145px] md:w-auto  h-[147px] md:h-auto" />

         <div className=" robot vector">
         <img
            src={main}
            alt=""
            className="  relative hidden md:block    w-[144px]  h-[169px] md:h-auto   bg-slate-800 md:w-auto  rounded-lg md:rounded-3xl  z-40 "
          />
         </div>
          <div className="radient-effect hidden md:block "></div>
        </div>
        <div className="w-[50%] md:w-[60%] relative flex flex-col justify-end">
          <div className="radient-effect  hidden md:block right-0 top-20"></div>

          <p className="text-cyan-400 text-[7px] md:text-3xl pb-2 md:pb-10 mb-1 Lato">
            We are provide you a best financial freedom in all type of   activity for earning
          </p>
          <div className="grid gap-2 lg:gap-6  grid-cols-3  items-center">
            {arr.map((val, i) => {
              return (
                <div
                  key={i}
                  id="box"
                  className="flex  w-[54px] h-[48px]  md:h-[230px] md:w-[260px] bg-slate-950 vector  aboutbox   justify-center rounded-md md:rounded-xl   gap-1 md:gap-4 flex-col items-center     p-2
                
                "
                >
                  <img src={val.icons} alt="" className="w-3 lg:w-16 " />
                  <p className=" text-[5px] md:text-sm lg:text-xl text-center py-1 md:py-6 md:px-3">
                    {val.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
