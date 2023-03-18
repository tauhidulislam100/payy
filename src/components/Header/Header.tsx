import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import appUi from "/src/assets/app_ui.png";
import googlePlay from "/src/assets/google_play.png";
import appStore from "/src/assets/app_store.png";

const Header = () => {
  return (
    <header className="header transition-all mdMax:pb-20">
      <HeaderNavigationBar />
      <div className="container lg:mt-40">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="mdMax:order-2 mdMax:flex mdMax:justify-center">
            <div>
              <h2 className="lg:text-[64px] text-6xl font-medium leading-[74px]">
                <strong className="font-bold">Simple</strong> payment <br />{" "}
                tracking <strong className="font-bold">for</strong> <br />{" "}
                everyone
              </h2>
              <p className="text-lg leading-7 text-black font-normal max-w-[430px] my-6">
                Payy simplifies how individuals, freelancers and small
                businesses keep track of payments (credits and debits) so that
                they never miss another payment.
              </p>

              <div className="flex gap-5 mt-10">
                <a href="#">
                  <img src={googlePlay} className="max-w-full" />
                </a>
                <a href="#">
                  <img src={appStore} className="max-w-full" />
                </a>
              </div>
            </div>
          </div>
          <div className="mdMax:order-1 mdMax:flex items-center justify-center">
            <img src={appUi} className="h-[435px] max-w-full object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
