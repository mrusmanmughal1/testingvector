import React from "react";

const Roadmap = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center  relative py-20">
        <div className="radient-effect  top-20 left-0 "></div>
        <div className="radient-effect  top-96 right-0 "></div>

        <p className="title_font mb-32">Road Map</p>
        <div className="border bordershaow flex justify-center items-center   relative rounded-[5rem] h-[430px] w-[60%] mx-auto border-cyan-400">
         
          <div className="absolute  w-96 z-50      bg-stone-800  rounded-2xl -top-10  border-cyan-300  border-2  px-6  py-6 text-white border-dotted">
            <span className="rounded-full p-2 counterbg_effect  absolute  -top-6  bg-black left-[40%] px-4 font-semibold border-blue-700 border ">
              1
            </span>
            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-xl">
              Foundation
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                •⁠ &nbsp;   ⁠Victor Matrix (Initial Launch)
              </li>
              <li>
                •⁠ &nbsp;    ⁠Victor Matrix Plus (Enhanced Features)

              </li>
            </ul>
          </div>
          <div className="absolute  w-96   bg-stone-800  rounded-2xl   top-[35%] -left-56  border-cyan-300  border-2  px-6 py-4 text-white border-dotted">
            <span className="rounded-full p-2  absolute  counterbg_effect -top-6  bg-black left-[95%] px-4 font-semibold border-blue-700 border ">
              2
            </span>

            <p className="lato uppercase text-cyan-500  mb-2 font-medium text-xl">
              Expansion
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                •⁠ &nbsp;  ⁠Gaming Hub (Gaming-Focused Enhancements)

              </li>
              <li>
                •⁠ &nbsp;  ⁠Victor Exchange (Trading & Transactions Platform)

              </li>
            </ul>
          </div>
          <div className="absolute   w-96   bg-stone-800  rounded-2xl  top-[35%] -right-56  border-cyan-300  border-2  px-6 py-4 text-white border-dotted">
            <span className="rounded-full p-2  absolute  counterbg_effect -top-6  bg-black right-[95%] px-4 font-semibold border-blue-700 border ">
              3
            </span>

            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-xl">
              {" "}
              Professional & Ecosystem Growth
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                •⁠ &nbsp;  ⁠Victor Matrix Pro (Advanced Features for Professionals)

              </li>
              <li>
                •⁠ &nbsp;  ⁠Victor Apps (Ecosystem Expansion with Apps)

              </li>
            </ul>
          </div>
          <div className="absolute  z-40  w-96   bg-stone-800  rounded-2xl  -bottom-40  border-cyan-300   border-2  px-6 py-10 text-white border-dotted">
            <span className="rounded-full p-2  absolute counterbg_effect  -top-6  bg-black  left-0 px-4 font-semibold border-blue-700 border ">
              4
            </span>

            <p className="lato uppercase text-cyan-500 mb-2 font-medium text-xl">
              Maximum Performance & Cryptocurrency Integration
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                •⁠ &nbsp;  ⁠Victor Matrix Max (Ultimate Performance Upgrade)


              </li>
              <li>
                •⁠ &nbsp;  ⁠Victor Coin (Native Cryptocurrency Launch)



              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-[60%] h-96 mx-auto   dot  flex justify-center mb-52 
   ">
        <div className="radient-effect  bottom-20 -left-20 "></div>


        <div className="absolute  z-40  w-96   bg-stone-800  rounded-2xl    top-[50%]    border-cyan-300   border-2  px-6 py-10 text-white border-dotted">
          <span className="rounded-full p-2 counterbg_effect  absolute  -top-6  bg-black right-[50%] px-4 font-semibold border-blue-700 border ">
            5
          </span>

          <p className="lato uppercase text-cyan-500 mb-2 font-medium text-xl ">
            Ultimate Evolution & Wider Adoption
          </p>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>

              •⁠ &nbsp;  ⁠Extreme Matrix of Victor (Cutting-Edge Innovations)
            </li>
            <li>
              •⁠ &nbsp;  ⁠Victor Coin Listing on Other Exchanges (Global Reach)

            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
