import Footer from "@components/Footer/Footer";
import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import ArrowRight from "@src/components/Icons/ArrowRight";
import { useEffect, useState } from "react";
import {
  AiFillCaretRight,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import Activity from "./Activity";
import CurrencySetting from "./CurrencySetting";
import EditProfile from "./EditProfile";
import NotificationSetting from "./NotificationSetting";
import Sidebar from "./Sidebar";
import Subscription from "./Subscription";
import { notification } from "antd";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("activity");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("checkout=false")) {
      notification.error({
        message: "something went wrong subscription failed.",
      });
    }
    if (window.location.href.includes("checkout=true")) {
      notification.success({
        message: "subscription successfully created.",
      });
    }
  }, []);
  return (
    <>
      <div className="bg-white border-b-[5px] border-primary">
        <HeaderNavigationBar />
      </div>
      {/* <div
        className="cover bg-cover h-[250px] w-full bg-no-repeat"
        style={{ backgroundImage: "url(/src/assets/profile_cover.jpg)" }}
      ></div>
      <div className="w-full bg-white h-[160px]">
        <div className="container">
          <div className="flex">
            <img
              src="/src/assets/profile.png"
              className="rounded-full w-[200px] h-[200px] -mt-24 object-cover border-[6px] border-white shadow-md"
            />
            <div className="ml-10 mt-10">
              <h2 className="font-semibold text-[36px] mb-1">Amelia Emma</h2>
              <p className="text-base text-secondary font-medium">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#F1F1F2] pt-10 pb-20 relative">
        <div className="container">
          <div className="flex w-full">
            <div
              className={`transition-all transform sm:w-[330px] w-[260px] bg-white min-h-[50vh] sm:p-8 p-4 rounded-[4px] lgMax:fixed top-0 left-0 lgMax:min-h-screen z-40 ${
                isMenuOpen ? "lgMax:left-0" : "left-[-110%]"
              }`}
            >
              <Sidebar onChange={setSelectedMenu} />
            </div>
            <div className="w-[calc(100%-330px)] lgMax:w-full">
              {selectedMenu === "activity" ? <Activity /> : null}
              {selectedMenu === "edit-profile" ? <EditProfile /> : null}
              {selectedMenu === "notification" ? <NotificationSetting /> : null}
              {selectedMenu === "currency-setting" ? <CurrencySetting /> : null}
              {selectedMenu === "subscription" ? <Subscription /> : null}
            </div>
          </div>
        </div>
        <button
          title="sidebar"
          onClick={() => setIsMenuOpen((p) => !p)}
          className={`${
            isMenuOpen ? "sm:left-[330px] left-[260px]" : "left-0"
          } fixed top-36  transform transition-all text-lg hover:text-xl bg-white w-6 h-6 rounded-r-full hidden lgMax:grid place-items-center text-secondary z-40 shadow-lg`}
        >
          {isMenuOpen ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
        </button>
      </div>
      <div
        style={{ backgroundImage: "/src/assets/footer-bg.png" }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Footer />
      </div>
      {isMenuOpen ? (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 left-0 min-h-screen w-screen bg-black bg-opacity-50 z-10"
        />
      ) : null}
    </>
  );
};

export default Dashboard;
