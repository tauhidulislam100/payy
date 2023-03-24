import { Switch } from "antd";
import React from "react";

const NotificationSetting = () => {
  return (
    <div className="w-full p-10">
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <div className="bg-white rounded-md py-10 px-12 mt-10">
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">SMS</h4>
          <Switch className="setting-switch" />
        </div>
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">Email</h4>
          <Switch checked className="setting-switch" />
        </div>
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">Push Notification</h4>
          <Switch className="setting-switch" />
        </div>
        <button className="bg-primary text-center max-w-[263px] w-full rounded-sm flex items-center justify-center h-[49px] text-white font-medium text-base mt-16">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotificationSetting;
