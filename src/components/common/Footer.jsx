import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      target="blank"
      className="flex items-center gap-2 font-normal border-b border-transparent hover:border-gray-100"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="relative z-0 !-overflow-hidden">
      <div className="relative hidden w-screen h-screen bg-transparent md:block"></div>
      <footer className="sticky md:fixed md:right-0 md:z-0  bottom-0 left-0 w-full mx-auto rounded-md h-[70vh]  md:h-[95vh] md:pt-[20vh] overflow-hidden">
        <div className="leftAnime anime"></div>
        <div className="topAnime anime"></div>
        <div className="rightAnime anime"></div>
        <div className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10">
          <div className="text-white flex flex-col md:flex-row justify-between w-11/12 mx-auto my-[8vh] md:my-[4vw] gap-8">
            <div className="flex flex-col space-y-3 text-xl font-bold md:text-2xl md:space-y-6">
              <FooterLink to="#service">Work</FooterLink>
              <FooterLink to="#about">About us</FooterLink>
              <FooterLink to="#contact">Contact</FooterLink>
            </div>
            <div className="right">
              <p className="pb-1 my-4 text-xl text-white border-b md:text-2xl">
                {` Let's Bring Your Vision to Life!`}
              </p>
              <SecondaryButton to={"mailto:neerajjangid7528@gmail.com"}>
                Get in touch
              </SecondaryButton>
            </div>
          </div>
          <h1 className="text-white text-[3vh]  tracking-wider sm:text-6xl md:text-[7vw] font-bold text-center uppercase ">
            Code kosh tech
          </h1>
          <ul className="grid flex-row items-center justify-between w-11/12 grid-cols-2 gap-4 py-4 mx-auto text-sm text-white border-t border-gray-200 md:flex -mb-14 max-[380px]:mb-4 md:border-gray-600 md:py-12 md:text-base">
            <li>{new Date().getFullYear()}©Codekoshtech</li>
            <li>
              <FooterLink to="tel:+91 63777 18671">
                <FaPhoneFlip />
                +91 63777 18671
              </FooterLink>
            </li>
            {/* <li>
              <FooterLink to="https://www.instagram.com/Codekoshtech">
                <IoLogoInstagram />
                Instagram
              </FooterLink>
            </li> */}
            {/* <li>
              <FooterLink to="www.linkedin.com/in/Codekoshtech">
                <IoLogoLinkedin />
                LinkedIn
              </FooterLink>
            </li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
