import React from "react";

const Roadmap = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center  relative py-20">
        <div className="radient-effect  top-20 left-0 "></div>
        <div className="radient-effect  top-96 right-0 "></div>

        <p className="title_font mb-32">Road Map</p>
        <div className="border flex justify-center items-center   relative rounded-[5rem] h-[430px] w-[60%] mx-auto border-cyan-400">
          <div className="absolute  w-96 z-50    roadbg  rounded-2xl -top-10  border-cyan-300  border-2  px-10  py-6 text-white border-dotted">
            <span className="rounded-full p-2 counterbg_effect  absolute  -top-6  bg-black left-[40%] px-4 font-semibold border-blue-700 border ">
              1
            </span>
            <p className="lato text-cyan-500 mb-2 font-medium text-xl">
              LAUNCH
            </p>
            <p className="font-light text-lg">Launch of website</p>
          </div>
          <div className="absolute  w-96   roadbg  rounded-2xl   top-[35%] -left-56  border-cyan-300  border-2  px-10 py-4 text-white border-dotted">
            <span className="rounded-full p-2  absolute  counterbg_effect -top-6  bg-black left-[95%] px-4 font-semibold border-blue-700 border ">
              2
            </span>

            <p className="lato text-cyan-500  mb-2 font-medium text-xl">
              METAVERSE HQ
            </p>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Eros aliquam at volutpat
              massa. Dictum enim ultrices urna a.
            </p>
          </div>
          <div className="absolute   w-96  roadbg  rounded-2xl  top-[35%] -right-56  border-cyan-300  border-2  px-10 py-4 text-white border-dotted">
            <span className="rounded-full p-2  absolute  counterbg_effect -top-6  bg-black right-[95%] px-4 font-semibold border-blue-700 border ">
              3
            </span>

            <p className="lato text-cyan-500 mb-2 font-medium text-xl">
              {" "}
              Launch of the 2nd Collection{" "}
            </p>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Eros aliquam at volutpat
              massa. Dictum enim ultrices urna a.
            </p>
          </div>
          <div className="absolute  z-40  w-96  roadbg  rounded-2xl  -bottom-10  border-cyan-300   border-2  px-10 py-10 text-white border-dotted">
            <span className="rounded-full p-2  absolute counterbg_effect  -top-6  bg-black right-[50%] px-4 font-semibold border-blue-700 border ">
              4
            </span>

            <p className="text-lg font-light ">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[60%] h-96 mx-auto -top-20 border-t-1 border-cyan-300 rounded-t-[5rem] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-[50%] before:border-l-1 before:border-cyan-300 before:rounded-tl-[5rem] after:absolute after:top-0 after:right-0 after:w-1/2 after:h-[50%] after:border-r-1 after:border-cyan-300 after:rounded-tr-[5rem]">
        <div className="absolute  z-40  w-96  roadbg  rounded-2xl    top-[50%] -left-56   border-cyan-300   border-2  px-10 py-10 text-white border-dotted">
          <span className="rounded-full p-2 counterbg_effect  absolute  -top-6  bg-black right-[50%] px-4 font-semibold border-blue-700 border ">
            5
          </span>

          <p className="text-lg font-light ">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="absolute  z-40  w-96  roadbg  rounded-2xl  top-[50%] -right-56 border-cyan-300   border-2  px-10 py-10 text-white border-dotted">
          <span className="rounded-full p-2  counterbg_effect absolute  -top-6  bg-black right-[50%] px-4 font-semibold border-blue-700 border ">
            6
          </span>

          <p className="text-lg font-light ">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
