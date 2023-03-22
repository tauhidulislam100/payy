import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "@components/Header/Header";
import mobile_with_pattern from "/src/assets/mobile_with_pattern.png";
import mobile_with_pattern_2 from "/src/assets/mobile_with_pattern_2.png";
import mobile_with_pattern_3 from "/src/assets/mobile_with_pattern_3.png";
import wallet from "/src/assets/wallet.png";
import flow from "/src/assets/flow.png";
import checked from "/src/assets/checked.png";
import Testimonial from "@components/Testimonial/Testimonial";
import Tracking from "@components/Tracking/Tracking";
import { useEffect, useRef, useState } from "react";
import Footer from "@components/Footer/Footer";
import StoreLink from "@components/StoreLink/StoreLink";

gsap.registerPlugin(ScrollTrigger);

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
  const [isMounted, setMounted] = useState(false);
  const staticRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const animateScreen = (
      screenSelector: string,
      staggerAmount = 0.3,
      xAxis = 0,
      yAxis = 80,
      delay = 0.3,
      childSelector = "[data-animate]"
    ) => {
      const screen = document?.querySelector(screenSelector);
      const frameGroup = gsap.utils.toArray(
        screen?.querySelectorAll(childSelector) as NodeList
      );
      gsap.set(frameGroup, {
        opacity: 0,
        y: yAxis,
        x: xAxis,
      });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: screen,
          toggleActions: "play none none reset",
          onUpdate: () => {
            // console.log({ screenSelector, childSelector });
          },
        },
      });
      timeline.to(frameGroup, {
        delay,
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power4.easeout",
        stagger: {
          amount: staggerAmount,
        },
      });
    };

    if (window.screen.width > 1023) {
      let ctx = gsap.context(() => {
        animateScreen("#header", 0.4, 10);
        animateScreen("#discover", 0.8, 10);
        animateScreen("#flow", 0.8, 10);
        animateScreen("#payment", 0.15, 10);
        animateScreen("#testimonial", 0.15, 10);
        animateScreen("#tracking", 0.17, 10);
        animateScreen("#footer", 0.15, 10);
      }, staticRef);

      return () => ctx.revert();
    }
  }, [isMounted]);

  return isMounted ? (
    <div ref={staticRef}>
      <Header />
      {/* start discover section  */}
      <section id="discover" className="discover py-24">
        <div className="max-w-[1040px] mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="font-bold text-4xl" data-animate>
              Discover why everyone
            </h2>
            <p className="text-4xl font-normal mt-2" data-animate>
              needs Payy!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:mt-20">
            <div className="md:mt-0 mt-10">
              <img
                data-animate
                src={mobile_with_pattern}
                className="max-w-full lg:object-cover lg:h-[500px] mdMax:object-cover object-contain"
              />
            </div>
            <div className="md:pt-28 mdMax:text-center md:ml-auto">
              <div className="flex gap-4 items-center max-w-[396px] mdMax:flex-col mdMax:justify-center">
                <img
                  data-animate
                  src={wallet}
                  className="max-w-full object-cover mdMax:my-5"
                />
                <h3 data-animate className="font-extrabold text-[30px]">
                  Track multiple kinds of payments
                </h3>
              </div>
              <p data-animate className="md:max-w-[381px] text-secondary my-5">
              Payy eliminates the complexity of tracking one-time, installment and recurring payments across multiple clients while allowing you to receive/make payments in the most convenient way possible.

              </p>
              <div className="mt-10">
                <StoreLink />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start flow section  */}
      <section id="flow" className="flow py-24">
        <div className="max-w-[1040px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* md:ml-auto */}
            <div className="md:pt-32 mdMax:text-center mdMax:order-2">
              <div className="">
                <div className="flex gap-4 items-center max-w-[396px] mdMax:flex-col mdMax:justify-center mdMax:text-center">
                  <img
                    data-animate
                    src={flow}
                    className="max-w-full object-cover mdMax:my-4"
                  />
                  <h3 data-animate className="font-extrabold text-[30px]">
                    Keep your cash flow crystal clear
                  </h3>
                </div>
                <p data-animate className="max-w-[381px] text-secondary my-5">
                Quickly identify outstanding payments and track unpaid debts or credits without the need of a spreadsheet or other complex book keeping tools


                </p>
                <div className="mt-10">
                  <StoreLink />
                </div>
              </div>
            </div>
            <div data-animate className="mdMax:order-1 md:ml-auto">
              <img
                src={mobile_with_pattern_2}
                className="lg:object-cover lg:h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* start never miss payment section  */}
      <section id="payment" className="flow  py-24">
        <div className="max-w-[1040px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div data-animate>
              <img
                src={mobile_with_pattern_3}
                className="lg:object-cover lg:h-[500px]"
              />
            </div>
            <div className="md:pt-24 mdMax:text-center md:ml-auto mdMax:mt-5">
              <div className="flex mdMax:flex-col mdMax:justify-center gap-4 items-center max-w-[396px]">
                <img
                  data-animate
                  src={checked}
                  className="max-w-full object-cover"
                />
                <h3 data-animate className="font-extrabold text-[30px]">
                  Never miss any payment
                </h3>
              </div>
              <p data-animate className="max-w-[381px] text-secondary my-5">
              Stay up to date with your credits and debts by receiving and sending instant manual and automated notifications and payment reminders
              </p>
              <div className="mt-10">
                <StoreLink />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start testimonial section  */}
      {/* <section id="testimonial" className="testimonial">
        <Testimonial items={slideItems} />
      </section> */}
      <Tracking />
      {/* start footer section  */}
      <Footer />
    </div>
  ) : null;
};

export default Home;
