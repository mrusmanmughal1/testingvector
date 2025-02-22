import React from "react";

const CounterLabels = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className=" card-label  p-2   poppins   w-[95%] lg:w-[90%] mx-auto ">
        <div className="rounded-2xl  bg-neutral-700  label-bg  text-white flex p-4 lg:p-14">
          <div className=" space-y-8 w-full flex  flex-col items-center md:justify-center">
            <p className="text-[9px]  md:text-sm">Creation Date</p>
            <p className="font-bold text-lg lg:text-4xl">12/2025</p>
          </div>
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-sm text-center md:text-start">
              Total Participents
            </p>
            <p className="font-bold text-lg lg:text-4xl">10,000$</p>
          </div>{" "}
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-sm">Total income</p>
            <p className="font-bold text-lg lg:text-4xl">50,000$</p>
          </div>{" "}
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-sm">Interval income</p>
            <p className="font-bold text-lg lg:text-4xl">20,000$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterLabels;
