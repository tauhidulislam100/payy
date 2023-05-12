import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import StoreLink from "@components/StoreLink/StoreLink";
import appUi from "/src/assets/app_ui.png";

const Header = () => {
  return (
    <header id="header" className="header transition-all mdMax:pb-20 pb-5">
      <HeaderNavigationBar />
      <div className="container 2xl:mt-40 lg:mt-10 lgMax:mt-12 mdMax:mt-10 header-content">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="mdMax:order-2 mdMax:flex mdMax:justify-center mdMax:text-center">
            <div>
              <h2
                data-animate
                className="2xl:text-7xl xl:text-6xl 2xl:leading-[116%] xl:leading-[130%] md:text-5xl text-4xl leading-[123%] font-medium md:leading-[120%]"
              >
                Easiest way to track<br/><strong className="font-bold">debts</strong> and payments
                {/* <strong className="font-bold">for</strong> <br />{" "}
                everyone */}
              </h2>
              
              <div className="mt-10">
               <strong style={{color: 'green'}}>Get $5.00 for every debt payment requested and 3 months free on our premium subscription</strong>
              <br/> Use promo code MOTHERSDAY <sup>Offer ends May 20th, 2023</sup>
              </div>
              <div className="mt-10">
              
                <StoreLink />
              </div>
              <p
                data-animate
                className="text-lg leading-7 text-black font-normal max-w-[430px] my-6"
              >
                Do people owe you money? Payy simplifies how individuals, freelancers and small
                businesses keep track of people and customers that owe them in a smart collaborative way.
              </p>
            </div>
          </div>
          <div
            data-animate
            className="mdMax:order-2 mdMax:flex items-center ml-auto"
          >
            <img
              src={appUi}
              className="lg:object-contain xl:h-[500px] lg:h-[390px] max-w-full mdMax:object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
