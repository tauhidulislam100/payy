import Header from "@components/Header/Header";
import ArrowRight from "@components/Icons/ArrowRight";
import mobile_with_pattern from "/src/assets/mobile_with_pattern.png";
import mobile_with_pattern_2 from "/src/assets/mobile_with_pattern_2.png";
import mobile_with_pattern_3 from "/src/assets/mobile_with_pattern_3.png";
import wallet from "/src/assets/wallet.png";
import flow from "/src/assets/flow.png";
import checked from "/src/assets/checked.png";
import logo from "/src/assets/logo.png";
import Testimonial from "@components/Testimonial/Testimonial";
import Tracking from "@components/Tracking/Tracking";
import Facebook from "@components/Icons/Facebook";
import Twitter from "@components/Icons/Twitter";
import Instagram from "@components/Icons/Instagram";
import LinkedIn from "@components/Icons/LinkedIn";

const slideItems = [
  {
    description: `Establish a framework. Taking seamless key performance indicators offline
    to maximise the long tail.`,
    user: {
      name: "Brooklyn Simmons",
      profile_photo: "",
      company: "Bank of America",
    },
  },
  {
    description: `Establish a framework. Taking seamless key performance indicators offline
    to maximise the long tail.`,
    user: {
      name: "Darrell Steward",
      profile_photo: "",
      company: "American Airlines Group",
    },
  },
  {
    description: `Establish a framework. Taking seamless key performance indicators offline
    to maximise the long tail.`,
    user: {
      name: "Courtney Henry",
      profile_photo: "",
      company: "Johnson & Johnson",
    },
  },
];
const Home = () => {
  return (
    <>
      <Header />
      <section className="discover lg:pt-24 py-10">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="font-bold text-4xl">Discover why everyone</h2>
            <p className="text-4xl font-normal mt-2">needs Payy!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lgMax:mt-10">
            <div className="md:mt-0 mt-10">
              <img
                src={mobile_with_pattern}
                className="max-w-full object-contain lg:h-[489px]"
              />
            </div>
            <div className="lg:pt-28 mdMax:text-center">
              <div className="flex gap-4 items-center max-w-[396px]">
                <img src={wallet} className="max-w-full object-cover" />
                <h3 className="font-medium text-[30px]">
                  Track multiple kinds of payments
                </h3>
              </div>
              <p className="md:max-w-[381px] text-secondary my-5">
                By eliminating the complexity of track one-time, Installment and
                Recurring Payments all in one plus
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary"
              >
                Discover More
                <span className="">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flow py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="lg:pt-40 mdMax:text-center">
              <div className="max-w-[400px] ml-auto">
                <div className="flex gap-4 items-center max-w-[396px]">
                  <img src={flow} className="max-w-full object-cover" />
                  <h3 className="font-medium text-[30px]">
                    Keep your cash flow crystal clear
                  </h3>
                </div>
                <p className="max-w-[381px] text-secondary my-5">
                  By eliminating the complexity of track one-time, Installment
                  and Recurring Payments all in one plus
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Discover More
                  <span className="">
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src={mobile_with_pattern_2}
                className="max-w-full object-contain lg:h-[489px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flow  py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <img
                src={mobile_with_pattern_3}
                className="max-w-full object-contain lg:h-[489px]"
              />
            </div>
            <div className="lg:pt-28 mdMax:text-center">
              <div className="flex gap-4 items-center max-w-[396px]">
                <img src={checked} className="max-w-full object-cover" />
                <h3 className="font-medium text-[30px]">
                  Never miss any payment
                </h3>
              </div>
              <p className="max-w-[381px] text-secondary my-5">
                Stay up to date with your credits and debts by receiving and
                sending instant manual and automated notifications and payment
                reminders
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary"
              >
                Discover More
                <span className="">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <Testimonial items={slideItems} />
      </section>
      <Tracking />
      <footer className="py-20">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="mdMax:text-center mdMax:flex mdMax:flex-col items-center justify-center">
              <img src={logo} className="max-w-full w-[90px] object-cover" />
              <h4 className="font-semibold mt-8 mb-4 text-xl">
                Simple payment tracker for everyone
              </h4>
              <p className="text-xl font-normal text-secondary leading-[155%] max-w-[343px]">
                Establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <div className="flex gap-4 mt-5">
                <a className="cursor-pointer h-[36px] w-[36px] rounded-full bg-primary  inline-grid place-items-center text-white =">
                  <span>
                    <Facebook />
                  </span>
                </a>
                <a className="cursor-pointer h-[36px] w-[36px] rounded-full  bg-white inline-grid place-items-center">
                  <span>
                    <Twitter />
                  </span>
                </a>
                <a className="cursor-pointer h-[36px] w-[36px] rounded-full  bg-white inline-grid place-items-center">
                  <span>
                    <Instagram />
                  </span>
                </a>
                <a className="cursor-pointer h-[36px] w-[36px] rounded-full bg-white inline-grid place-items-center">
                  <span>
                    <LinkedIn />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl mb-6">Quick Link</h3>
              <ul className="mdMax:text-center">
                <li>
                  <a
                    href="#"
                    className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                  >
                    Home
                    <span className="group-hover:block hidden ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                  >
                    Android download
                    <span className="group-hover:block hidden ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                  >
                    iOS download
                    <span className="group-hover:block hidden ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                  >
                    Resources
                    <span className="group-hover:block hidden ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`inline-flex items-center text-base py-2 text-black font-medium hover:text-primary group`}
                  >
                    Support
                    <span className="group-hover:block hidden ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:pl-20">
              <h3 className="font-bold text-2xl mb-6 mdMax:text-center">
                Newsletter
              </h3>
              <div className="my-5">
                <p className="text-base font-medium leading-[100%] mb-5">
                  Stay Up To Date
                </p>
                <input
                  placeholder="Your email address..."
                  className="h-[60px] box-border rounded-lg px-4 bg-primary mix-blend-darken bg-opacity-20 text-secondary text-base w-full font-medium focus:outline-none"
                />
              </div>
              <div className="mb-5">
                <button className="bg-primary w-full text-white font-bold text-base flex items-center justify-center h-[52px] rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="md:mt-32 bg-primary mb-8" />
          <div className="flex justify-between mdMax:flex-col mdMax:items-center">
            <p className="text-base font-medium">
              © {new Date().getFullYear()}{" "}
              <a href="#" className="text-primary">
                Payy
              </a>
              , Design by BmAshik
            </p>
            <div className="text-base font-medium">
              <a href="#">Terms of service</a> /{" "}
              <a href="#" className="text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
