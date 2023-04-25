'use client';
import {motion} from "framer-motion"
import styles from "../styles";
import {navVariants} from "../utils/motion"
import Link from "next/link";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
}  from "@material-tailwind/react";
const Navbaar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  
  return(
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}/>
    <div>
      <Navbar className="sticky inset-0  bg-transparent background-is-transparent z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
        <h1>Zangler</h1>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block"></div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>LogIn</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav >
      
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>LogIn</span>
          </Button>
        </MobileNav>
      </Navbar>
    
    </div>
  </motion.nav>
)};

export default Navbaar;
