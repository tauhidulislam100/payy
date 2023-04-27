import logo from "/src/assets/logo-white.png";
import Facebook from "@components/Icons/Facebook";
import Twitter from "@components/Icons/Twitter";
import Instagram from "@components/Icons/Instagram";
import LinkedIn from "@components/Icons/LinkedIn";

const Footer = () => {
  return (
    <footer id="footer" className="py-10 pt-20 bg-primary text-white">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="mdMax:text-center mdMax:flex mdMax:flex-col items-center justify-center">
            <img
              data-animate
              src={logo}
              className="max-w-full w-[90px] object-cover"
            />
            <h4 data-animate className="font-semibold mt-8 mb-4 text-lg">
              Simple payment tracking for everyone
            </h4>
            <p
              data-animate
              className="text-lg font-normal text-white leading-[155%] max-w-[343px]"
            >
              Payy simplifies how individuals, freelancers and small businesses
              keep track of cashflow and debts so that they never miss another
              payment.
            </p>
            <div data-animate className="flex gap-4 mt-5">
              {/* <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Facebook />
                </span>
              </a> */}
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-black hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Twitter />
                </span>
              </a>
              <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-black hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <Instagram />
                </span>
              </a>
              {/* <a className="cursor-pointer h-[36px] w-[36px] rounded-full hover:bg-primary hover:text-white  inline-grid place-items-center bg-white text-secondary">
                <span>
                  <LinkedIn />
                </span>
              </a> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 data-animate className="font-bold text-2xl mb-6">
              Quick Link
            </h3>
            <ul className="mdMax:text-center">
              {/* <li data-animate>
                <a
                  href="#"
                  className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                >
                  Home
                </a>
              </li> */}
              <li data-animate>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fero.payy.app" target="_blank"
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  Android download
                </a>
              </li>
              <li data-animate>
                <a
                  href="https://apps.apple.com/us/app/payy-money-tracker/id1672186907" target="_blank"
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  iOS download
                </a>
              </li>
              <li data-animate>
                <a
                  href="https://payy.tawk.help/"
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  Resources
                </a>
              </li>
              <li data-animate>
                <a
                  href="https://payy.tawk.help/"
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="xl:pl-20">
            <h3 data-animate className="font-bold text-2xl mb-6">
              Legal
            </h3>
            <ul className="mdMax:text-center">
              <li data-animate>
                <a
                  href="https://payy.tawk.help/article/terms-of-service"
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  Terms of Service
                </a>
              </li>
              <li data-animate>
                <a
                  href="https://payy.tawk.help/article/privacy-policy"
                  target={"_blank"}
                  className={`inline-flex items-center text-base py-2 text-white font-medium hover:text-black group`}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="xl:pl-20">
            <h3
              data-animate
              className="font-bold text-2xl mb-10 mdMax:text-center"
            >
              Newsletter
            </h3>
            <div className="my-5 mdMax:text-center">
              <p
                data-animate
                className="text-base font-medium leading-[100%] mb-10"
              >
                Stay Up To Date
              </p>
              <input
                data-animate
                placeholder="Your email address..."
                className="h-[60px] box-border border border-white rounded-[50px] px-4 bg-[#D9D9D9] bg-opacity-20 text-white placeholder:text-white text-base w-full font-medium focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <button
                data-animate
                className="bg-black w-full text-white font-bold text-base flex items-center justify-center h-[52px] rounded-[50px] hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        <div className="w-full h-[1px] bg-white bg-opacity-20 my-10" />
        <div className="flex justify-between mdMax:flex-col mdMax:items-center">
          <p data-animate className="text-base font-medium text-white">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="text-black mr-1">
              Payy Money Tracker
            </a>
         
          </p>
          <div data-animate className="text-base font-medium">
            <a href="https://payy.tawk.help/article/terms-of-service">
              Terms of service
            </a>{" "}
            /{" "}
            <a
              href="https://payy.tawk.help/article/privacy-policy"
              className="text-black"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
