import logo from "/src/assets/logo.png";
import Facebook from "@components/Icons/Facebook";
import Twitter from "@components/Icons/Twitter";
import Instagram from "@components/Icons/Instagram";
import LinkedIn from "@components/Icons/LinkedIn";

const Footer = () => {
  return (
    <footer id="footer" className="py-10 pt-20">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="mdMax:text-center mdMax:flex mdMax:flex-col items-center justify-center">
            <img
              data-animate
              src={logo}
              className="max-w-full w-[90px] object-cover"
            />
            <h4 data-animate className="font-semibold mt-8 mb-4 text-xl">
              Simple payment tracker for everyone
            </h4>
            <p
              data-animate
              className="text-xl font-normal text-secondary leading-[155%] max-w-[343px]"
            >
              Establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail.
            </p>
            <div data-animate className="flex gap-4 mt-5">
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Facebook />
                </span>
              </a>
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Twitter />
                </span>
              </a>
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Instagram />
                </span>
              </a>
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <LinkedIn />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 data-animate className="font-bold text-2xl mb-6">
              Quick Link
            </h3>
            <ul className="mdMax:text-center">
              <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  Home
                </a>
              </li>
              <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  Android download
                </a>
              </li>
              <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  iOS download
                </a>
              </li>
              <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  Resources
                </a>
              </li>
              <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:pl-20">
            <h3
              data-animate
              className="font-bold text-2xl mb-6 mdMax:text-center"
            >
              Newsletter
            </h3>
            <div className="my-5 mdMax:text-center">
              <p
                data-animate
                className="text-base font-medium leading-[100%] mb-5"
              >
                Stay Up To Date
              </p>
              <input
                data-animate
                placeholder="Your email address..."
                className="h-[60px] box-border rounded-lg px-4 bg-primary mix-blend-darken bg-opacity-20 text-secondary text-base w-full font-medium focus:outline-primary"
              />
            </div>
            <div className="mb-5">
              <button
                data-animate
                className="bg-primary w-full text-white font-bold text-base flex items-center justify-center h-[52px] rounded-lg hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="md:mt-32 bg-primary mb-8" />
        <div className="flex justify-between mdMax:flex-col mdMax:items-center">
          <p data-animate className="text-base font-medium">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="text-primary">
              Payy
            </a>
            , Design by BmAshik
          </p>
          <div data-animate className="text-base font-medium">
            <a href="#">Terms of service</a> /{" "}
            <a href="#" className="text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
