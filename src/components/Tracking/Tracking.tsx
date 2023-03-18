import secure from "/src/assets/secure.png";
import tracking_1 from "/src/assets/tracking_1.png";
import tracking_2 from "/src/assets/tracking_2.png";
import googlePlay from "/src/assets/google_play.png";
import appStore from "/src/assets/app_store.png";

const Tracking = () => {
  return (
    <section className="tracking xl:pb-0 py-20">
      <div className="container">
        <div className="grid grid-cols-3 lgMax:grid-cols-1">
          <div className=""></div>
          <div className="flex flex-col items-center justify-center text-center self-start">
            <img
              src={secure}
              className="max-w-full object-contain"
              alt="secure"
            />
            <h2 className="text-4xl font-bold my-4 max-w-[646px]">
              Payment Tracking in a Simple{" "}
              <span className="font-medium">& Effecient Way</span>
            </h2>
            <p className="text-secondary font-normal">
              Download and enjoy Payy for free with no obligations
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
          <div className="flex justify-end lgMax:hidden">
            <img src={tracking_2} className="max-w-full h-[379px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
