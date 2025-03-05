import React from "react";

const Roadmap = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center  relative md:py-20">
        <div className="md:radient-effect  top-20 left-0 "></div>
        <div className="md:radient-effect  top-96 right-0 "></div>

        <p className="title_font mb-20 md:mb-32">Road Map</p>

        <div className="md:border md:bordershaow flex md:flex-row gap-10  flex-col justify-center  items-center   relative rounded-2xl md:rounded-[5rem] h-auto md:h-[430px] w-[95%] md:w-[60%] mx-auto border-cyan-400">

          <div className=" relative md:absolute w-full md:w-[26rem] z-50     bg-stone-800  rounded-md md:rounded-2xl -top-5 md:-top-10  border-cyan-500 border-b-0  border-2  px-2 md:ps-6 py-2 md:py-6 text-white border-dashed">

            <span className=" hidden md:block  rounded-full px-2 py-[5px] md:p-2 counterbg_effect text-[14px]  absolute  -top-3 md:-top-6  bg-black left-[40%] md:px-4 font-semibold border-blue-700 border ">
              1
            </span>
            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-[19px] md:text-2xl">
              Foundation
            </p>
            <ul className="text-[14px] md:text-lg text-gray-300 Poppins md:space-y-1">
              <li>
                •⁠ &nbsp;Victor Matrix (Initial Launch)
              </li>
              <li>
                •⁠ &nbsp;⁠Victor Matrix Plus (Enhanced Features)

              </li>
            </ul>
          </div>
          <div className="md:absolute  w-full md:w-[26rem]   bg-stone-800 rounded-md md:rounded-2xl   top-[35%] -left-16 md:-left-56  border-cyan-500 border-b-0  border-2 px-2  md:ps-6 py-2 md:py-4 text-white border-dashed">
            <span className=" hidden md:block rounded-full px-2 py-[5px] md:p-2  absolute  counterbg_effect text-[14px]  -top-2 md:-top-6  bg-black left-[95%] md:px-4 font-semibold border-blue-700 border ">
              2
            </span>

            <p className="lato uppercase text-cyan-500  mb-2 font-medium text-[19px] md:text-2xl">
              Expansion
            </p>
            <ul className="text-[14px] md:text-lg text-gray-300 Poppins md:space-y-1">
              <li>
                •⁠ &nbsp;⁠Gaming Hub (Gaming-Focused Enhancements)

              </li>
              <li>
                •⁠ &nbsp;⁠Victor Exchange (Trading & Transactions Platform)

              </li>
            </ul>
          </div>
          <div className="md:absolute   w-full md:w-[26rem]    bg-stone-800  rounded-md md:rounded-2xl  top-[35%] -right-16 md:-right-56  border-cyan-500 border-b-0  border-2  px-2  md:ps-6 py-2 md:py-4 text-white border-dashed">
            <span className=" hidden md:block rounded-full px-2 py-[5px] md:p-2   absolute  counterbg_effect text-[14px] -top-2 md:-top-6  bg-black right-[95%] md:px-4 font-semibold border-blue-700 border ">
              3
            </span>

            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-[19px] md:text-2xl">
              {" "}
              Professional & Ecosystem Growth
            </p>
            <ul className="text-[14px] md:text-lg text-gray-300 Poppins md:space-y-1">
              <li>
                •⁠ &nbsp;⁠Victor Matrix Pro (Advanced Features for Professionals)

              </li>
              <li>
                •⁠ &nbsp;⁠Victor Apps (Ecosystem Expansion with Apps)

              </li>
            </ul>
          </div>
          <div className="md:absolute  z-40  w-full md:w-[26rem]  bg-stone-800  rounded-md md:rounded-2xl   -bottom-10 md:-bottom-40  border-cyan-500 border-b-0   border-2 px-2 md:ps-6 py-2 md:py-10 text-white border-dashed">
            <span className=" hidden md:block  rounded-full px-2 py-[5px] md:p-2   absolute counterbg_effect text-[14px]  -top-2 md:-top-6  bg-black -left-2 md:left-0 md:px-4 font-semibold border-blue-700 border ">
              4
            </span>

            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-[19px] md:text-2xl">
              Maximum Performance & Cryptocurrency Integration
            </p>
            <ul className="text-[14px] md:text-lg text-gray-300 Poppins md:space-y-1">
              <li>
                •⁠ &nbsp;⁠Victor Matrix Max (Ultimate Performance Upgrade)


              </li>
              <li>
                •⁠ &nbsp;⁠Victor Coin (Native Cryptocurrency Launch)



              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-[95%] md:w-[60%] md:h-96 mx-auto   dot  flex justify-center mb-24 md:mb-52 
   ">
        <div className="md:radient-effect  bottom-20 -left-20 "></div>


        <div className="md:absolute mt-10 md:mt-0  z-40 w-full md:w-[26rem]   bg-stone-800 rounded-md md:rounded-2xl    top-[50%]    border-cyan-500 border-b-0   border-2  px-2 md:ps-6 py-2 md:py-10 text-white border-dashed">
          <span className="rounded-full hidden md:block px-2 py-[5px] md:p-2  counterbg_effect text-[14px] absolute  -top-2 md:-top-6  bg-black right-[45%] md:px-4 font-semibold border-blue-700 border ">
            5
          </span>

          <p className="lato uppercase text-cyan-500 mb-2 font-medium text-[19px] md:text-2xl ">
            Ultimate Evolution & Wider Adoption
          </p>
          <ul className="text-[14px] md:text-lg text-gray-300 Poppins space-y-1">
            <li>

              •⁠ &nbsp;⁠Extreme Matrix of Victor (Cutting-Edge Innovations)
            </li>
            <li>
              •⁠ &nbsp;⁠Victor Coin Listing on Other Exchanges (Global Reach)

            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
