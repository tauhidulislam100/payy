import { useAuth } from "@src/hooks/useAuth";
import api from "@src/utils/api";
import { notification, Spin, Switch } from "antd";
import React, { useState } from "react";

const NotificationSetting = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: false,
    sms: false,
    push: false,
    ...user?.notifications,
  });

  const updateNotification = async () => {
    try {
      setLoading(true);
      await api("/users/me", {
        method: "PATCH",
        data: { notifications: form },
      });
      notification.success({
        message: "notification settings updated successfuly",
      });
    } catch (error: any) {
      notification.error({
        message:
          error?.message ??
          "something went wrong, unable to update notification settings",
      });
    }
    setLoading(false);
  };
  return (
    <div className="w-full md:p-10">
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <div className="bg-white rounded-md py-10 md:px-12 px-5 mt-10">
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">SMS</h4>
          <Switch
            className="setting-switch"
            checked={form.sms}
            onChange={(e) => setForm((p) => ({ ...p, sms: e }))}
          />
        </div>
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">Email</h4>
          <Switch
            checked={form.email}
            className="setting-switch"
            onChange={(e) => setForm((p) => ({ ...p, email: e }))}
          />
        </div>
        <div className="flex justify-between mb-8">
          <h4 className="text-[17px] text-secondary">Push Notification</h4>
          <Switch
            className="setting-switch"
            checked={form.push}
            onChange={(e) => setForm((p) => ({ ...p, push: e }))}
          />
        </div>
        <button
          onClick={updateNotification}
          className="bg-primary text-center w-full rounded-[50px] flex items-center justify-center h-[49px] text-white font-medium text-base mt-10"
        >
          {loading ? <Spin className="light-spin" /> : "Save"}
        </button>
      </div>
    </div>
  );
};

export default NotificationSetting;
