import Slider from "react-slick";
import left from "../assets/leftarrow.png";
import right from "../assets/rightarrow.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SlotsDetails = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true, 
    prevArrow: (
      <div className="!bg-cyan-300 rounded-full ">
      <img src={left} className="  " />
      </div>
    ),
    nextArrow: (
      <div className="">
      <img src={right} className="   " />
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
  const arr = [
    { label: "Direct Income", value: "30%" },
    { label: "Indirect Income", value: "10%" },
    { label: "Level Income", value: "30%" },
    { label: "Cashback Income", value: "10%" },
    { label: "Success Share", value: "20%" },
    { label: "Earning in one Cycle", value: "$31.2" },
  ]
  arr[arr.length - 1].value = `√${parseFloat(arr[arr.length - 1].value.replace('$', ''))} = ${Math.sqrt(parseFloat(arr[arr.length - 1].value.replace('$', ''))).toFixed(2)}`;

  return (
    <div className="relative" >
      <div className="flex justify-center flex-col items-center poppins">
        <p className="title_font mb-10 md:mb-20">Slots Details</p>
        <div className="radient-effect  top-[65%] left-0 "></div>
        <div className="green-radient  bottom-0 right-0 "></div>
        <div className="slider-container slowts w-[90%] mx-auto">
          <Slider {...settings}>
            {[5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240].map((val, i) => {
             const earningInCycleValue = (31.25 * Math.pow(2, i)).toFixed(2);
              return (
                <div
                  key={i}
                  className="  card-label-slots  Oxanium md:bg-zinc-900  rounded-3xl border border-cyan-400 p-4 px-6 space-y-3"
                >
                  {/* Header */}
                  <div className="flex border-b border-cyan-500/50 justify-between pb-2 font-semibold items-center">
                    <h2 className="md:text-2xl   text-white">Slot {i < 9 ? `0${i + 1}` : `${i + 1}`}</h2>
                    <span className="md:text-2xl   text-white">${val}</span>
                  </div>

                  {/* Income Distribution */}
                  <div className="flex border-b border-cyan-500/50  pb-2 justify-between items-center text-white">
                    <div>
                      <p className="text-white text-sm">Matrix Income</p>
                      <p className="md:text-xl font-medium">80%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">Interval Income</p>
                      <p className="md:text-xl font-medium">20%</p>
                    </div>
                  </div>

                  {/* Matrix Income Details */}
                  <div className="space-y-4 ">
                    <h3 className="text-white mt-4 md:text-2xl font-medium text-center ">
                      MATRIX INCOME DETAILS
                    </h3>

                    <div className="space-y-3">
                      {arr.map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between items-center p-3 px-5 rounded-3xl text-sm md:text-base  border-2 border-cyan-400/50   hover:border-cyan-400/60 transition-colors"
                        >
                          <span className="text-gray-200">{item.label}</span>
                          <span className="text-white  ">{ item.label === "Earning in one Cycle" ? `$${earningInCycleValue}` : item.value}</span>
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
