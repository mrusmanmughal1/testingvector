import React from "react";

const CounterLabels = () => {

  return (
    <div className="my-10 lg:my-20">
      <div className=" card-label    poppins   w-[99%] lg:w-[90%] mx-auto ">
        <div className="rounded-[0.8rem]  bg-zinc-800 label-bg    text-white flex p-3 lg:p-14">
          <div className=" space-y-8 w-full flex  flex-col items-center md:justify-center">
            <p className="text-[9px]  md:text-base">Creation Date</p>
            <p className="font-bold cyan-border-text lg:text-5xl">12/2025</p>
          </div>
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-base  text-center md:text-start">
            Total Participant
            </p>
            <p className="font-bold cyan-border-text  lg:text-5xl">10,000$</p>
          </div>{" "}
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-base ">Total income</p>
            <p className="font-bold  cyan-border-text lg:text-5xl">50,000$</p>
          </div>{" "}
          <div className="space-y-8 w-full flex flex-col  items-center justify-center">
            <p className="text-[9px] md:text-base ">Interval income</p>
            <p className="font-bold  cyan-border-text  lg:text-5xl">20,000$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterLabels;
 

