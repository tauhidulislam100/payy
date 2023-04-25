import CloseIcon from "@components/Icons/CloseIcon";
import MenuIcon from "@components/Icons/MenuIcon";
import { useAuth } from "@src/hooks/useAuth";
import { Avatar } from "antd";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Link = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    data-animate
    href={href}
    className={`block mt-4 lg:inline-block lg:mt-0 text-[17px] py-2 text-black font-medium hover:text-primary border-b-2 border-transparent hover:border-primary active:border-primary focus:border-primary ${className} mr-10`}
  >
    {children}
  </a>
);

function HeaderNavigationBar() {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  return (
    <div id="menu" className="container">
      <nav className="flex items-center justify-between flex-wrap py-6">
        <div
          data-animate
          className="flex items-center flex-shrink-0 text-white mr-6"
        >
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="max-w-[90px] object-contain"
            />
          </NavLink>
        </div>
        <div className="hidden lgMax:block">
          <button
            onClick={() => setVisible((p) => !p)}
            className="flex items-center text-xl px-3 py-2   text-gray-200  hover:text-white hover:border-white"
          >
            <MenuIcon />
          </button>
        </div>
        <div
          className={`relative w-full block flex-grow lg:flex lg:items-center lg:w-auto transform transition-all delay-[25ms] lgMax:fixed lgMax:w-[280px] lgMax:top-0 lgMax:bg-red-50 lgMax:h-full lgMax:right-0 z-10 lgMax:px-4 ${
            visible ? "lgMax:right-0" : "lgMax:right-[-120%]"
          }`}
        >
          <button
            className="lgMax:flex hidden absolute font-medium text-xl right-5 top-2  text-black justify-center items-center rounded-full w-8 h-8 border-opacity-50"
            onClick={() => setVisible(false)}
          >
            <CloseIcon />
          </button>
          <div className="text-sm lg:mx-auto">
            {/* <Link href="/developers">Developers</Link> */}
            <Link href="#download">Download</Link>
            {/* <Link href="/pricing">Pricing</Link> */}
            <Link href="#discover">Product</Link>
            <Link>Resources</Link>
          </div>
          <div>
            {user ? (
              <NavLink
                data-animate
                to="/dashboard"
                className="inline-flex items-center mt-4 lg:mt-0"
              >
                <div className="border-primary border-[2px] p-[2px] rounded-full">
                  <Avatar
                    src={user?.avatar}
                    size={30}
                    className="bg-secondary object-cover"
                  />
                </div>
                <span className="ml-2">
                  {user?.firstName} {user?.lastName}
                </span>
              </NavLink>
            ) : (
              <>
                <NavLink
                  data-animate
                  to="/auth/signin"
                  className="inline-flex items-center text-base px-6 leading-none rounded-[20px] font-medium text-white bg-primary shadow-lg h-[38px]  mt-4 lg:mt-0"
                >
                  Sign In
                </NavLink>
                {/* <a
                  data-animate
                  href="/signup"
                  className="inline-flex items-center text-base font-medium px-6 h-[38px] hover:bg-primary hover:shadow-lg rounded-[20px] hover:text-white leading-none text-black mt-4 lg:mt-0 ml-3"
                >
                  Sign Up
                </a> */}
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNavigationBar;
