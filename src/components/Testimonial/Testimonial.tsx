import { Star } from "@components/Icons/Star";
import { useRef, useState } from "react";
import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: "0",
  speed: 500,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface SlideItem {
  description: string;
  user: {
    name: string;
    profile_photo: string;
    company: string;
  };
}
const SlideItem = ({ content }: { content: SlideItem }) => (
  <div className="bg-[#F7F5FF] rounded-lg p-5 testimonial-item">
    <div className="flex text-primary">
      <span>
        <Star />
      </span>
      <span>
        <Star />
      </span>
      <span>
        <Star />
      </span>
      <span>
        <Star />
      </span>
      <span>
        <Star />
      </span>
    </div>
    <p className="text-lg text-secondary font-normal leading-[155%] my-3">
      {content.description}
    </p>
    <div className="flex gap-4">
      <img
        src={content.user.profile_photo}
        className="w-[53px] h-[53px] rounded-full bg-secondary"
        alt="...."
      />
      <div>
        <h4 className="font-medium text-xl text-black">{content.user.name}</h4>
        <p className="text-secondary text-base font-normal">
          {content.user.company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonial = ({ items }: { items: SlideItem[] }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef<Slider>(null);
  if (items && items.length <= 3) {
    let i = 0;
    while (items.length < 4) {
      items.push(items[i]);
      i++;
    }
  }
  return (
    <div className="py-20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-bold md:text-4xl text-3xl">
            what Our Customer Say
          </h2>
          <p className="text-4xl font-normal mt-2">About Us</p>
        </div>
        <Slider
          ref={sliderRef}
          {...{
            ...settings,
            // initialSlide: 1,
            beforeChange(currentSlide, nextSlide) {
              console.log("nextSlide ", nextSlide);
              setActiveIndex(currentSlide);
            },
          }}
        >
          {items.map((item, i) => (
            <div key={i}>
              <SlideItem content={item} />
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-center mt-10">
          <div className="w-[50%] max-w-[600px] bg-[#EBE6FF] h-1 rounded-[10px] inline-flex">
            {items.map((_, index) => (
              <div
                style={{
                  width: 100 / items.length + "%",
                }}
                className={`bg-primary h-1 rounded-[10px] transform transition-all ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
