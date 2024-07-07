import logo from "../../assets/logo.svg";
import clock from "../../assets/clock 1.png";
import VR from "../../assets/VR Array 1.png";
import Chart from "../../assets/Line Chart 1.png";
import Tilt from "react-parallax-tilt";

const cardsData = [
  {
    image: VR,
    heading: "Cutting Edge Technology",
    text: "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
  },
  {
    image: Chart,
    heading: "Cross Device Compatibility",
    text: "Multi-device compatibility ensures that creating, viewing and providing quick and easy",
  },
  {
    image: clock,
    heading: "Tailer Mode Development",
    text: "Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs",
  },
];

const About = () => {
  return (
    <section className="pt-24 mt-20 md:text-center md:pt-0" id="about">
      <h2 className="w-10/12 mx-auto mb-8 text-5xl font-medium md: md:text-center md:mb-0 ">
        About Us
      </h2>
      <img
        src={logo}
        alt="Codekoshtech"
        className="hidden mx-auto my-8 md:block "
        width={200}
        loading="lazy"
      />
      <p className="w-10/12 mx-auto text-lg">
        We are a result-driven company that primarily focuses on development and
        marketing. We prioritize important parameters and make data-driven,
        important choices. From strategic thinking to implementation, planning
        to production, we are professionals in converting innovative concepts
        into reality for your audience. We're flexible utilizing the correct
        resources at the right moment. Our Marketing & Development process
        provides industry-best timelines for creating new solutions and
        upgrading existing ones. <br />
      </p>
      <div className="grid w-10/12 grid-cols-1 gap-4 mx-auto mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Tilt key={index}>
            <div className="relative items-center max-w-sm px-4 py-8 mx-auto my-4 overflow-hidden bg-gray-700 rounded shadow-lg cursor-pointer after:bg-gray-800 animated-border-box ">
              <img className="mx-auto h-1/2" src={card.image} alt="Card" />
              <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold">{card.heading}</h3>
                <p className="text-base text-gray-100">{card.text}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent animated-border-box-glow"></div>
            </div>
          </Tilt>
        ))}
      </div>

      <p className="w-10/12 py-10 mx-auto text-lg">
        We have collaborated with hundreds of clients from a variety of
        industries and throughout the world, and we will consult with you to
        genuinely get to the core of your business, assisting you in engaging
        with your consumers, driving sales, and achieving your objectives.
      </p>
    </section>
  );
};

export default About;
