import { useAuth } from "@src/hooks/useAuth";
import api from "@src/utils/api";
import { Avatar, notification, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BorderedInput = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <div className="w-full">
      {label ? (
        <label className="block text-base text-secondary mb-4">{label}</label>
      ) : null}
      <input
        value={value}
        onChange={onChange}
        className="block bg-black bg-opacity-[0.06] border  border-black border-opacity-50 focus:border-opacity-90 focus:outline-none  px-4 h-[50px] rounded-[50px] focus:text-black text-secondary w-full text-base"
        placeholder={placeholder}
      />
    </div>
  );
};

interface EditForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

const EditProfile = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const { user } = useAuth();
  const [form, setForm] = useState<EditForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    setForm({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      avatar: user?.avatar,
    });
    console.log(user);
  }, [user]);

  const updateProfile = async () => {
    try {
      setUpdatingProfile(true);
      await api("/users/me", {
        method: "PATCH",
        data: form,
      });
      notification.success({
        message: "profile updated successfuly",
      });
    } catch (error: any) {
      notification.error({
        message:
          error?.message ??
          "something went wrong, unable to update the profile",
      });
    }
    setUpdatingProfile(false);
  };

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingAvatar(true);
      const formData = new FormData();
      const file = e.target?.files?.[0];
      formData.append(
        "file",
        new Blob([file as BlobPart], { type: file?.type })
      );
      const { data } = await api("/media", {
        data: formData,
      });
      setForm((p) => ({ ...p, avatar: data.file.url }));
    } catch (error: any) {
      notification.error({
        message:
          error?.message ??
          "something went wrong, unable to update the profile",
      });
    }
    setUploadingAvatar(false);
  };

  return (
    <div className="w-full lg:p-10 lg:pb-0">
      <div className="md:inline-block text-center">
        <h2 className="text-2xl font-semibold">Edit Profile</h2>
        <div className="relative mt-10 mb-5 inline-block">
          <Avatar
            src={form?.avatar}
            size={100}
            className="bg-primary font-bold  text-white"
          >
            {uploadingAvatar ? (
              <Spin className="light-spin" />
            ) : (
              <span className="text-[40px]">A</span>
            )}
          </Avatar>
          <input
            ref={ref}
            type="file"
            accept="images/*"
            onChange={uploadAvatar}
            className="hidden"
          />
          <button
            onClick={() => ref.current?.click()}
            className="w-[30px] h-[30px] rounded-full bg-[#F1F1F2] border-2 border-white grid place-content-center absolute top-0 right-0"
          >
            <AiOutlineEdit />
          </button>
        </div>
        <h3 className="text-xl font-medium text-secondary">
          {user?.firstName} {user?.lastName}
        </h3>
      </div>
      <div className="bg-white rounded-[4px] py-10 lg:px-12 px-5 mt-10">
        <div className="grid md:grid-cols-2 lg:gap-10 gap-4">
          <BorderedInput
            value={form.firstName}
            label="Frist Name"
            placeholder="Amelia"
            onChange={(e) =>
              setForm((p) => ({ ...p, firstName: e.target.value }))
            }
          />
          <BorderedInput
            value={form.lastName}
            label="Last Name"
            placeholder="Emma"
            onChange={(e) =>
              setForm((p) => ({ ...p, lastName: e.target.value }))
            }
          />
        </div>
        <div className="flex items-center mdMax:flex-col md:mt-10 mt-4">
          <BorderedInput
            label="Email Address"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
          <p className="mx-4 text-secondary md:mt-10 mt-4">or</p>
          <BorderedInput
            label="Phone"
            placeholder="+1234 5678 895"
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            value={form.phone}
          />
        </div>
        <button
          onClick={updateProfile}
          className="hover:bg-opacity-90 bg-primary text-center w-full rounded-[50px] flex items-center justify-center h-[49px] text-white font-medium text-base mt-10"
        >
          {updatingProfile ? <Spin className="light-spin" /> : "Save"}
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
