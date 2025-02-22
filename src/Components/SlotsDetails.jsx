import Slider from "react-slick";
import left from "../assets/left.png";
import right from "../assets/right.png";
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src={right} alt="Previous" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src={left} alt="Next arrow" />
    </div>
  );
};

const SlotsDetails = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <div className="custom-arrow prev-arrow">
        {" "}
        <img src={right} alt="Previous" className="w-32" />{" "}
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        {" "}
        <img src={left} alt="Next" className="!w-48" />{" "}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
        <div className="w-[90%] mx-auto  mb-6 md:mb-12 card-label-slots   ">
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
              <div className=" selected-slot text-cyan-400   ms-2 px-4 py-2 text-center min-w-28 lg:min-w-48">
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
        </div>

        {/* second  */}
        <div className="w-[90%] relative mx-auto px-4 lg:px-10 py-4    card-label-slots2  details-slot  rounded-xl border-2   ">
          <div className=" flex p-2 text-white border-b border-cyan-300/40">
            <div className="w-full font-medium  text-start text-sm lg:text-lg">
              Total Income: 100%
            </div>
            <div className="w-full lg:ps-10 text-sm lg:text-lg">
              Interval Income Details
            </div>
          </div>
          <div className=" flex p-2 text-white ">
            <div className="w-full  border-r border-r-cyan-300/40 flex pt-2">
              <div className="w-full space-y-6">
                <p className=" text-xs lg:text-md text-cyan-500">
                  Matrix Income
                </p>
                <p className="font-semibold  text-2xl lg:text-4xl">80%</p>
              </div>
              <div className="w-full space-y-6">
                <p className=" text-xs lg:text-md text-cyan-500 mb-2 md:m-auto">
                  Interval Income
                </p>
                <p className="font-semibold  text-2xl lg:text-4xl">20%</p>
              </div>
            </div>
            <div className="w-full flex pt-2">
              <div className="w-full space-y-6 ps-4 lg:ps-10">
                <p className=" text-xs lg:text-md text-cyan-500 ">
                  Matrix Income
                </p>
                <p className="font-semibold  text-2xl lg:text-4xl">80%</p>
              </div>
              <div className="w-full space-y-6 ps-4 md:ps-0">
                <p className=" text-xs lg:text-md  text-cyan-500 mb-2 md:m-auto">
                  Interval Income
                </p>
                <p className="font-semibold  text-2xl lg:text-4xl">20%</p>
              </div>
            </div>
          </div>
          <div className="radient-effect right-0 bottom-0 ! -z-30"></div>
          <div className="radient-effect -left-10 bottom-0 ! -z-30"></div>
        </div>
      </div>
    </div>
  );
};

export default SlotsDetails;
