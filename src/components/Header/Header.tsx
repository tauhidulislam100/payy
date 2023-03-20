import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import StoreLink from "@components/StoreLink/StoreLink";
import appUi from "/src/assets/app_ui.png";

const Header = () => {
  return (
    <header id="header" className="header transition-all mdMax:pb-20 pb-5">
      <HeaderNavigationBar />
      <div className="container 2xl:mt-40 lg:mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="mdMax:order-2 mdMax:flex mdMax:justify-center">
            <div>
              <h2
                data-animate
                className="2xl:text-8xl xl:text-7xl xl:leading-[130%] md:text-5xl text-5xl leading-[123%] font-medium md:leading-[130%]"
              >
                <strong className="font-bold">Simple</strong> payment <br />{" "}
                tracking <strong className="font-bold">for</strong> <br />{" "}
                everyone
              </h2>
              <p
                data-animate
                className="text-lg leading-7 text-black font-normal max-w-[430px] my-6"
              >
                Payy simplifies how individuals, freelancers and small
                businesses keep track of payments (credits and debits) so that
                they never miss another payment.
              </p>

              <div className="mt-10">
                <StoreLink />
              </div>
            </div>
          </div>
          <div
            data-animate
            className="mdMax:order-1 mdMax:flex items-center justify-center"
          >
            <img
              src={appUi}
              className="lg:object-cover xl:h-[500px] lg:h-[390px] h-[350px] max-w-full lg:pt-0 md:mt-10 md:pt-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
