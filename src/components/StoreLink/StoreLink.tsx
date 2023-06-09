import googlePlay from "/src/assets/google_play.png";
import appStore from "/src/assets/app_store.png";

const StoreLink = () => {
  return (
    <div className="flex gap-5 mdMax:justify-center">
      <a data-animate href="#">
        <img src={googlePlay} className="max-w-full" />
      </a>
      <a data-animate href="#">
        <img src={appStore} className="max-w-full" />
      </a>
    </div>
  );
};

export default StoreLink;
