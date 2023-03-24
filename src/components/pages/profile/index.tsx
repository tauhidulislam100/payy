import Footer from "@components/Footer/Footer";
import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import { useState } from "react";
import Activity from "./Activity";
import CurrencySetting from "./CurrencySetting";
import EditProfile from "./EditProfile";
import NotificationSetting from "./NotificationSetting";
import Sidebar from "./Sidebar";

const Profile = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("activity");
  return (
    <>
      <div
        style={{ backgroundImage: "/src/assets/header-bg.png" }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <HeaderNavigationBar />
      </div>
      <div
        className="cover bg-cover h-[250px] w-full bg-no-repeat"
        style={{ backgroundImage: "url(/src/assets/cover.jpeg)" }}
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
      </div>
      <div className="bg-[#F1F1F2] pt-10 pb-20">
        <div className="container">
          <div className="flex gap-10 w-full">
            <div className="w-[330px] bg-white min-h-[50vh] p-8 rounded-[4px]">
              <Sidebar onChange={setSelectedMenu} />
            </div>
            <div className="w-[calc(100%-330px)]">
              {selectedMenu === "activity" ? <Activity /> : null}
              {selectedMenu === "edit-profile" ? <EditProfile /> : null}
              {selectedMenu === "notification" ? <NotificationSetting /> : null}
              {selectedMenu === "currency-setting" ? <CurrencySetting /> : null}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "/src/assets/footer-bg.png" }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Footer />
      </div>
    </>
  );
};

export default Profile;
