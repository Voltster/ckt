import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import SecondaryButton from "./SecondaryButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Services", link: "#services" },
    { text: "Portfolio", link: "#portfolio" },
  ];

  useEffect(() => {
    document.querySelectorAll(".navlink").forEach((link) => {
      link.innerHTML =
        "<div><span>" +
        link.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
    });
  }, []);

  return (
    <header className=" w-full flex flex-wrap items-center justify-center  transition-borderRadius relative top-0  md:-mt-[5vh]  lg:p-4 lg:rounded-full z-[90]">
      <nav
        className={`backdrop-blur-xl fixed top-0 z-[90] w-full  lg:w-[80%] lg:rounded-full  border-blue-100  transition-all duration-300 mx-auto lg:mt-4  ${
          isScrolled ? "shadow-lg bg-gray-800/60 py-2" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="Codekoshtech logo"
              width={200}
              loading="lazy"
            />
          </Link>
          <div className="items-center justify-around hidden w-full lg:flex">
            <ul className="flex items-baseline space-x-2  lg:px-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavHashLink to={item.link} className="text-white navlink">
                    {item.text}
                  </NavHashLink>
                </li>
              ))}
            </ul>
            <SecondaryButton to="#contact">Contact Now</SecondaryButton>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavHashLink to={item.link} className="text-white navlink ">
                  {item.text}
                </NavHashLink>
              </li>
            ))}
            <li>
              <SecondaryButton to="#contact">Contact Now</SecondaryButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
