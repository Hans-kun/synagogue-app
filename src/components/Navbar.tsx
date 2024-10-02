import { useState } from "react";
import Logo from "./../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
// import { useAdminStore } from "../stores/home";
// import Contact from "../pages/Contact";
import { fadeIn } from "../utils/variants";
import { AnimatePresence, motion } from "framer-motion";
// import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  //   const { admin } = useAdminStore();
  // const [colorChange, setColorChange] = useState(false);
  const [toggle, setToggle] = useState(true);
  //   const [selectedPage, setSelectedPage] = useState("home");
  // const [open, setOpen] = useState(false);

  const changeNavColor = () => {
    // if (window.scrollY >= 100) {
    //   setColorChange(true);
    // } else {
    //   setColorChange(false);
    // }
  };

  window.addEventListener("scroll", changeNavColor);
  // const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");

  const navigation = [
    { title: "HOME", route: "/" },
    { title: "ABOUT US", route: "/about" },
    {
      title: "GET INVOLVED",
      routes: [
        { title: "Become a member", route: "/become-a-member" },
        { title: "Collaborate", route: "/collaborate" },
        { title: "Volunteer", route: "/volunteer" },
      ],
    },
    {
      title: "JEWISH LIFE",
      routes: [
        { title: "Hebrew Classes", route: "/hebrew-classes" },
        { title: "Jewish Learning", route: "/jewish-learning" },
        { title: "Calendar", route: "/calendar" },
      ],
    },
    {
      title: "EVENTS",
      routes: [
        { title: "Festival", route: "/festival" },
        { title: "Jewish Camp", route: "/jewish-camp" },
        { title: "Programs", route: "/programs" },
      ],
    },
    { title: "NEWS & MEDIA", route: "/news" },
    { title: "JOIN US", route: "/join" },
  ];

  return (
    <nav className=''>
      {/* {isAboveMediumScreen ? ( */}
      <div
        className='hidden lg:flex bg-white lg:justify-between h-[80px] w-full border-1 shadow-lg justify-between fixed top-0 px-[104px] py-[25px] z-10'
        // ${
        //   colorChange ? " bg-black" : ""
        //       }
      >
        <img src={Logo} alt='logo' />

        <ul
          className={`w-full flex flex-row justify-evenly text-black items-center`}
        >
          {navigation.map((nav, i) =>
            nav.routes ? (
              <Dropdown key={i} title={nav.title} routes={nav.routes} />
            ) : (
              <Link key={i} to={nav.route} className='hover:font-semibold'>
                {nav.title}
              </Link>
            )
          )}
        </ul>
        <a
          href='#'
          className='w-[127px] h-[50px] bg-[#255D99] text-white py-[15px] text-center hover:cursor-pointer font-semibold text-[16px] hover:shadow-md self-center'
        >
          <button className='items-center'>Donate</button>
        </a>
      </div>

      {/* small and medium screens */}
      <div
        className='lg:hidden bg-white flex justify-between fixed shadow-sm top-0 left-0 right-0 px-[30px] md:px-[50px] py-[10px]'
        // ${
        //   colorChange ? " bg-black" : ""
        // }
      >
        <img src={Logo} alt='logo' />

        <MdMenu
          size='2rem'
          onClick={() => setToggle(!toggle)}
          className='self-center'
        />
      </div>
      {/* </div> */}
      <AnimatePresence>
        {!toggle && (
          <motion.div
            variants={fadeIn("left", 0, 1)}
            initial='hidden'
            whileInView='show4'
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.2 }}
            className='lg:hidden fixed top-0 bottom-0 start-0 end-0 bg-black z-10'
          >
            <div className='lg:hidden flex justify-between align-center px-[30px] md:px-[50px] py-[10px]'>
              <img src={Logo} alt='logo' />

              <IoCloseCircleOutline
                color='white'
                size='2rem'
                onClick={() => setToggle(!toggle)}
                className='self-center'
              />
            </div>

            <ul className='flex flex-col justify-end gap-[50px] text-white items-end hover:cursor-pointer px-[30px] py-6'>
              {/* <Link
                to={"home"}
                smooth={true}
                duration={500}
                onClick={() => setToggle(!toggle)}
                className={`${
                  selectedPage == "contact" ? "text-blue" : "text-white"
                }  hover:text-blue hover:cursor-pointer`}
              > */}
              <li>Home</li>
              {/* </Link> */}
              {/* <Link
                to={"about"}
                smooth={true}
                duration={500}
                onClick={() => setToggle(!toggle)}
                className={`${
                  selectedPage == "contact" ? "text-blue" : "text-white"
                }  hover:text-blue hover:cursor-pointer`}
              > */}
              <li>About</li>
              {/* </Link> */}
              {/* <Link
                to={"contact"}
                smooth={true}
                duration={500}
                onClick={() => setToggle(!toggle)}
                className={`${
                  selectedPage == "contact" ? "text-blue" : "text-white"
                }  hover:text-blue hover:cursor-pointer`}
              > */}
              <li>Get Involved</li>
              <li>Jewish Life</li>
              <li>Events</li>
              <li>News & Media</li>
              <li>Join Us</li>
              {/* </Link> */}
              <a
                href='#'
                onClick={() => setToggle(!toggle)}
                className=' hover:text-blue hover:cursor-pointer'
              >
                <li>Blog</li>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
