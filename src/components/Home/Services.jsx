import servicesData from "../../utils/servicesData";
import SecondaryButton from "../common/SecondaryButton";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className=" container overflow-hidden z-0 h-[30vh] md:h-[90%] block relative max-w-262 rounded-3xl md:p-8 md:mx-4 my-6 md:my-3  before:bg-gradient-to-r from-blue-700 to-sky-400 card cursor-pointer" data-aos="zoom-in">
      <h3 className="px-4 pt-4 text-lg md:p-0">{title}</h3>
      <p className="px-4 my-4 md:p-0">{description}</p>
      <div
        className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 p-4 bg-transparent rounded-br-full"
        href="#"
      >
        <img src={icon} className="go-arrow" />
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section
      className="container w-11/12 mx-auto mt-20 pt-14 md:pt-0"
      id="services"
    >
      <h2 className="text-4xl font-medium text-white md:text-center md:text-5xl">
        Our Premium Services Included
      </h2>
      <div className="my-10 md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            
          />
        ))}
        <div className="inline col-span-1 p-8">
          <h4 >Solutions for your bussiness</h4>
          <p className="mt-2">
            Get Customized Solutions for Your Business We deliver solutions
            according to the client's needs, goals, and vision. Our main motive
            is to provide a high-quality solution and make our client 100%
            satisfied
          </p>
          {/* <p className="mb-6 ">
            Our previous work shows how strongly committed we are to serving our
            clients
          </p> */}
          {/* <SecondaryButton>Our Past Work</SecondaryButton> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
