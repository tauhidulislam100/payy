import secure from "/src/assets/secure.png";
import tracking_2 from "/src/assets/tracking_2.png";
import StoreLink from "@components/StoreLink/StoreLink";

const Tracking = () => {
  return (
    <section id="download" className="tracking xl:pb-0 py-24 pt-32">
      <div className="container">
        <div className="grid grid-cols-3 lgMax:grid-cols-1">
          <div className=""></div>
          <div className="flex flex-col items-center justify-center text-center self-start">
            <img
              data-animate
              src={secure}
              className="max-w-full object-contain"
              alt="secure"
            />
            <h2
              data-animate
              className="xl:text-4xl md:text-3xl text-[25px] font-bold my-4 max-w-[646px]"
            >
              Payment Tracking in a Simple{" "}
              <span className="font-medium">& Effecient Way</span>
            </h2>
            <p data-animate className="text-secondary font-normal">
              Download and enjoy Payy for free with no obligations
            </p>
            <div className=" mt-10">
              <StoreLink />
            </div>
          </div>
          <div data-animate className="flex justify-end lgMax:hidden">
            <img src={tracking_2} className="max-w-full h-[379px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
