import Slider from "react-slick";
import left from "../assets/left.png";
import right from "../assets/right.png";

const SlotsDetails = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <div className="custom-arrow prev-arrow bg-teal-500">
        {" "}
        <img src={right} alt="Previous"   />{" "}
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        {" "}
        <img src={left} alt="Next"   />{" "}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex justify-center flex-col items-center poppins">
        <p className="title_font mb-10 md:mb-20">Slots Details</p>
        {/* <div className="w-[95%] md:w-[90%] mx-auto  mb-6 md:mb-12 card-label-slots   ">
          <div className="hidden md:block">
            <div className="lg:slots    overflow-scroll  md:overflow-auto  bg-transparent lg:bg-teal-950 md:px-8 py-3  justify-between  text-lg text-white   rounded-xl lg:border-2 border-cyan-300 flex items-center gap-4">
              <div className=" selected-slot text-cyan-400   px-4 py-2 text-center min-w-28 lg:min-w-48">
                01= 05 $
              </div>
              <div className=" font-semibold px-4 py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
            </div>
          </div>
          <div className="slider-container text-gray-600 block md:hidden ">
            <Slider {...settings}>
              <div className=" selected-slot text-cyan-400   md:ms-2 px-4 py-2 text-center min-w-28 lg:min-w-48">
                01= 05 $
              </div>
              <div className=" font-semibold px-4 py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
              <div className=" px-4 font-semibold py-2 min-w-28">01= 05 $</div>
            </Slider>
          </div>
        </div> */}

        {/* second  */}
        {/* <div className="w-[95%] md:w-[90%] relative mx-auto px-4 lg:px-10 py-4    card-label-slots2  details-slot  rounded-xl    ">
          <div className=" flex p-2 text-white border-b border-cyan-300/40">
            <div className="w-full font-medium  text-start text-xs lg:text-lg">
              Total Income: 100%
            </div>
            <div className="w-full lg:ps-10 text-xs lg:text-lg">
              Interval Income Details
            </div>
          </div>
          <div className=" flex p-2 text-white ">
            <div className="w-full  border-r border-r-cyan-300/40 flex pt-2">
              <div className="w-full space-y-6">
                <p className=" text-xs lg:text-md text-cyan-500">
                  Matrix Income
                </p>
                <p className="font-semibold  text-xl lg:text-4xl">80%</p>
              </div>
              <div className="w-full space-y-6">
                <p className=" text-xs lg:text-md text-cyan-500 mb-2 md:m-auto">
                  Interval Income
                </p>
                <p className="font-semibold  text-xl lg:text-4xl">20%</p>
              </div>
            </div>
            <div className="w-full flex pt-2">
              <div className="w-full space-y-6 ps-4 lg:ps-10">
                <p className=" text-xs lg:text-md text-cyan-500 ">
                  Matrix Income
                </p>
                <p className="font-semibold  text-xl lg:text-4xl">80%</p>
              </div>
              <div className="w-full space-y-6 ps-4 md:ps-0">
                <p className=" text-xs lg:text-md  text-cyan-500 mb-2 md:m-auto">
                  Interval Income
                </p>
                <p className="font-semibold  text-xl lg:text-4xl">20%</p>
              </div>
            </div>
          </div>
          <div className="radient-effect right-0 bottom-0 ! hidden md:block  -z-30"></div>
          <div className="radient-effect -left-10 bottom-0 ! -z-30"></div>
        </div> */}
        <div className="slider-container w-[90%] mx-auto">
          <Slider {...settings}>
            {[1, 2, 3, 4].map((val, i) => {
              return (
                <div
                  key={i}
                  className="  Oxanium bg-black/30 rounded-3xl border border-cyan-400 p-4 px-6 space-y-3"
                >
                  {/* Header */}
                  <div className="flex border-b border-cyan-500/50 justify-between pb-2 font-semibold items-center">
                    <h2 className="text-2xl   text-white">Slot 01</h2>
                    <span className="text-2xl   text-white">${5}</span>
                  </div>

                  {/* Income Distribution */}
                  <div className="flex border-b border-cyan-500/50  pb-2 justify-between items-center text-white">
                    <div>
                      <p className="text-white text-sm">Matrix Income</p>
                      <p className="text-xl font-medium">80%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">Interval Income</p>
                      <p className="text-xl font-medium">20%</p>
                    </div>
                  </div>

                  {/* Matrix Income Details */}
                  <div className="space-y-4 ">
                    <h3 className="text-white mt-4 text-2xl font-medium text-center ">
                      MATRIX INCOME DETAILS
                    </h3>

                    <div className="space-y-3">
                      {[
                        { label: "Direct Income", value: "30%" },
                        { label: "Indirect Income", value: "10%" },
                        { label: "Level Income", value: "30%" },
                        { label: "Cashback Income", value: "10%" },
                        { label: "Success Share", value: "20%" },
                        { label: "Earning in one Cycle", value: "Upto $31.2" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between items-center p-3 px-5 rounded-3xl   border-2 border-cyan-400/50   hover:border-cyan-400/60 transition-colors"
                        >
                          <span className="text-gray-200">{item.label}</span>
                          <span className="text-white  ">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlotsDetails;
