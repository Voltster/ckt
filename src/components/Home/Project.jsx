import koncept from "../../assets/Mockup/Koncept.jpg";
import FriendlyParenting from "../../assets/Mockup/FriendlyParenting.jpg";
import sunfoundation from "../../assets/Mockup/sunfoundation.jpg";
import React, { useState } from "react";
import CustomCursor from "../common/CustomCursor";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Koncept India Enterprises",
    category: "UI/UX • WEB DESIGN • PORTFOLIO",
    image: koncept,
    link: "https://koncept.vercel.app",
  },
  {
    title: "Sun Foundation ",
    category: "Newsletter • WEB DESIGN • WEBFLOW",
    image: sunfoundation,
    link: "https://sunfoundation.vercel.app/mobile/index.html",
  },
  {
    title: "Friendly Parenting",
    category: "REDESIGN • WEB DEVELOPMENT",
    image: FriendlyParenting,
    link: "https://voltster.github.io/Friendly-Parenting",
  },
];

const Project = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`container mx-auto w-11/12 py-16 ${hovered ? "hovered" : ""}`}
      id="portfolio"
    >
      <CustomCursor isVisible={hovered} />
      <h2 className="my-10 text-5xl font-medium md:text-center">
        Our Selected Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            target="blank"
            key={index}
            className={`overflow-hidden  border-gray-900 rounded-[2rem] cursor-pointer transform transition-transform duration-300 group ${
              index < 2 ? "md:col-span-1" : "md:col-span-2"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-aos="zoom-in-up"
          >
            <div className=" overflow-hidden rounded-[2rem]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[40vh] md:h-[70vh] object-cover scale-[1.05]  group-hover:scale-[1.]"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-semibold">{project.title}</h3>
              <p className="font-semibold text-gray-600">{project.category}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="w-full mt-12 text-center ">
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-950 transition-colors w-full h-[10vh]">
          SHOW MORE
        </button>
      </div> */}
    </section>
  );
};

export default Project;
