import { useState } from "react";
import logo from "../../assets/profast.png";
import { Link, NavLink } from "react-router";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const navItme = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/coverage",
    display: "Coverage",
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/pricing",
    display: "Pricing",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <nav className="px-5 md:px-13 lg:px-25 2xl:px-35 h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] flex items-center justify-between sticky top-0 left-0 z-50 bg-[#ffff] border-b border-[#caeb6667]">
      {/* Logo */}
      <Link to={"/"}>
        <img className="h-[4vh] lg:h-[5vh]" src={logo} alt="logo" />
      </Link>

      {/* Menu List */}
      <ul className="hidden lg:flex lg:items-center">
        {navItme?.map((link, index) => (
          <li key={index}>
            <NavLink
              className={(navClass) =>
                navClass?.isActive
                  ? "text-[#000000] border-b-2 border-[#CAEB66] py-2 px-6 w-full rounded-full"
                  : "text-[#606060] border-b-2 border-transparent py-2 px-6"
              }
              to={link?.path}
            >
              {link?.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* button section */}
      <div className="flex items-center gap-3 lg:gap-5">
        <Link to={"/be-a-rider"}>
          <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 hidden lg:inline rounded-full text-[14px] lg:text-[16px] hover:bg-[#000000] border border-[#CAEB66] text-[#000000] hover:text-[#CAEB66] duration-500">
            Be a Rider
          </button>
        </Link>
        <Link to={""}>
          <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 rounded-full text-[14px] lg:text-[16px] border border-[#CAEB66] bg-[#CAEB66] hover:bg-[#000000] text-[#000000] hover:text-[#CAEB66] duration-500">
            Sign In
          </button>
        </Link>
        <button
          className="lg:hidden text-[24px] md:text-[26px]"
          onClick={() => setOpen(!open)}
        >
          {!open ? <IoMenuSharp /> : <IoMdClose />}
        </button>
      </div>

      {/* Mobile Menu List */}
      <ul
        className={`px-5 md:px-13 h-[92vh] md:h-[91vh] w-full bg-[#ffff] lg:hidden absolute top-[8vh] md:top-[9vh] flex flex-col duration-500 items-center justify-center gap-5 ${!open ? "-left-full" : "left-0"}`}
      >
        {navItme?.map((link, index) => (
          <li key={index}>
            <NavLink
              className={(navClass) =>
                navClass?.isActive
                  ? "text-[#000000] border-b-2 border-[#CAEB66] py-2 px-10 rounded-full"
                  : "text-[#606060] border-b-2 border-transparent py-2 px-10"
              }
              to={link?.path}
            >
              {link?.display}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to={"/be-a-rider"}>
            <button className="btn2 px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5">
              Be a Rider
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
