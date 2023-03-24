import { MenuProps, Select } from "antd";
import { Menu } from "antd";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
  AiOutlineFile,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import React, { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Activity", "activity", <AiOutlineClockCircle />, []),
  getItem("Settings", "settings", <AiOutlineSetting />, [
    getItem(
      "General Information",
      null,
      null,
      [
        getItem("Edit Profile", "edit-profile", <AiOutlineUser />),
        getItem("Notification", "notification", <RiNotification4Line />),
      ],
      "group"
    ),
    getItem(
      "Payment",
      null,
      null,
      [
        getItem("Set Currency", "currency-setting", <AiOutlineDollarCircle />),
        getItem("Subscription", "subscription", <AiOutlineUser />),
      ],
      "group"
    ),
  ]),
  getItem("Subscriptions", "subscription-main", <AiOutlineFile />, []),
];

interface IProps {
  onChange: (activeMenu: string) => void;
}
const Sidebar = ({ onChange }: IProps) => {
  const [currentSetting, setCurrentSetting] = useState("");
  const [selectedMenus, setSelectedMenus] = useState<string[]>(["activity"]);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrentSetting(e.key);
  };

  const handleOpenChange: MenuProps["onOpenChange"] = (m) => {
    m = [m.pop() || "activity"];
    setSelectedMenus(m);
    if (!m.includes("settings")) {
      setCurrentSetting("");
    } else if (m.includes("settings") && !currentSetting) {
      setCurrentSetting("edit-profile");
    }
  };

  useEffect(() => {
    if (selectedMenus.includes("settings")) {
      onChange(currentSetting);
    } else {
      onChange(selectedMenus[0]);
    }
  }, [selectedMenus, currentSetting]);

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        onOpenChange={handleOpenChange}
        mode="inline"
        openKeys={selectedMenus}
        selectedKeys={[currentSetting]}
        items={items}
        expandIcon={(opt) => {
          return opt.isOpen ? (
            <AiFillCaretDown className="caret-icon" />
          ) : (
            <AiFillCaretRight className="caret-icon" />
          );
        }}
        className="profile-side-menu"
      />
      <button className="flex items-center justify-center gap-2 h-10 w-full rounded-sm text-white font-medium text-[17px] bg-secondary hover:bg-primary">
        <span>
          <IoMdLogOut />
        </span>
        Sign out
      </button>
    </>
  );
};

export default Sidebar;
