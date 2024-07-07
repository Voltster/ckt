import { useState, useEffect } from "react";
import testimonialsData from "../../utils/testimonialData";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTestimonial(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length
        );
        setAnimationClass("fade-in");
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleTestimonialChange = (testimonialIndex) => {
    if (testimonialIndex !== activeTestimonial) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTestimonial(testimonialIndex);
        setAnimationClass("fade-in");
      }, 1000);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full gap-8 px-4 mx-auto my-20 md:w-10/12 md:flex-row md:gap-16 md:px-0"
      id="testimonial"
    >
      <div className="w-full md:w-4/12 h-[40vh] md:h-[55vh] overflow-hidden rounded  mb-8 md:mb-0 ">
        <img
          className={`${animationClass} rounded-tr-[120px]   h-[40vh] md:h-[55vh] w-full`}
          src={testimonialsData[activeTestimonial].image}
          alt={`Testimonial by ${testimonialsData[activeTestimonial].author}`}
          loading="lazy"
        />
      </div>
      <div className="relative w-full text-center md:w-6/12 md:text-left">
        <div className={animationClass}>
          <h2 className="text-3xl font-medium md:text-5xl">
            {" "}
            {testimonialsData[activeTestimonial].author}
          </h2>
          <h4 className="mt-4 text-xl font-medium text-gray-400 md:text-2xl md:mt-8">
            {testimonialsData[activeTestimonial].company}
          </h4>
          {/* <h4 className="text-xl font-medium text-gray-50 md:text-2xl">
            {testimonialsData[activeTestimonial].author}
          </h4> */}
          <p className="mt-4 text-lg leading-7 text-gray-200 md:text-xl">
            <RiDoubleQuotesL className="inline-block mr-2 -mt-2" />{" "}
            {testimonialsData[activeTestimonial].text}
            <RiDoubleQuotesR className="inline-block ml-2 -mb-2" />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-8 md:w-1/12 md:flex-col md:gap-4 md:mt-0">
        <p className="text-white text-lg md:text-[32px] font-bold font-['Fira Sans'] mr-4 md:mr-0  md:mb-0">
          01
        </p>
        <div className="flex flex-row items-center justify-center gap-2 md:flex-col md:gap-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`h-[2px] md:h-[83px] w-[83px] md:w-0.5  md:bg-gradient-to-b cursor-pointer rounded-lg bg-gradient-to-r  ${
                activeTestimonial === index
                  ? "from-blue-700 to-sky-400"
                  : "from-gray-50 to-gray-100  "
              } shadow`}
              onMouseEnter={() => handleTestimonialChange(index)}
              onClick={() => handleTestimonialChange(index)}
            />
          ))}
        </div>
        <p className="text-white text-lg md:text-[32px] font-bold font-['Fira Sans'] ml-4 md:ml-0 mt-0">
          03
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
