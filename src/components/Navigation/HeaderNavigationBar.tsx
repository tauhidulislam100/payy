import MenuIcon from "@components/Icons/MenuIcon";
import { ReactNode, useState } from "react";
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
    href={href}
    className={`block mt-4 lg:inline-block lg:mt-0 text-[17px] py-2 text-black font-medium hover:text-primary border-b-2 border-transparent hover:border-primary active:border-primary focus:border-primary ${className} mr-10`}
  >
    {children}
  </a>
);

function HeaderNavigationBar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="container">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="logo" className="max-w-[90px] object-contain" />
        </div>
        <div className="hidden lgMax:block">
          <button
            onClick={() => setVisible((p) => !p)}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <MenuIcon />
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transform transition-all delay-[25ms] overflow-hidden ${
            visible
              ? "lgMax:bg-red-400 lgMax:p-4 lgMax:mt-3 lgMax:bg-opacity-10 lgMax:h-auto lgMax:py-4"
              : "lgMax:h-0 lgMax:py-0"
          }`}
        >
          <div className="text-sm lg:mx-auto">
            <Link href="/products">Products</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <a
              href="/signin"
              className="inline-flex items-center text-base px-6 leading-none rounded-[4px] font-medium text-white bg-primary shadow-lg h-[38px]  mt-4 lg:mt-0"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="inline-flex items-center text-base font-medium px-6 h-[38px] hover:bg-primary hover:shadow-lg rounded-[4px] hover:text-white leading-none text-black mt-4 lg:mt-0 ml-3"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNavigationBar;
