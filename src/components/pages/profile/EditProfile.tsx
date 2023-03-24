import { Avatar } from "antd";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

interface InputProps {
  label?: string;
  placeholder?: string;
}
const BorderedInput = ({ label, placeholder }: InputProps) => {
  return (
    <div className="w-full">
      {label ? (
        <label className="block text-base text-secondary mb-4">{label}</label>
      ) : null}
      <input
        className="block bg-black bg-opacity-[0.06] border border-dashed border-black border-opacity-50 focus:border-opacity-90 focus:outline-none  px-4 h-[50px] rounded-sm focus:text-black text-secondary w-full text-base"
        placeholder={placeholder}
      />
    </div>
  );
};
const EditProfile = () => {
  return (
    <div className="w-full p-10">
      <div className="inline-block text-center">
        <h2 className="text-2xl font-semibold">Edit Profile</h2>
        <div className="relative mt-10 mb-5">
          <Avatar size={100} className="bg-primary font-bold  text-white">
            <span className="text-[40px]">A</span>
          </Avatar>

          <button className="w-[30px] h-[30px] rounded-full bg-[#F1F1F2] border-2 border-white grid place-content-center absolute top-0 right-3">
            <AiOutlineEdit />
          </button>
        </div>
        <h3 className="text-xl font-medium text-secondary">Amelia Emma</h3>
      </div>
      <div className="bg-white rounded-[4px] py-10 px-20 mt-10">
        <div className="grid grid-cols-2 gap-10">
          <BorderedInput label="Frist Name" placeholder="Amelia" />
          <BorderedInput label="Last Name" placeholder="Emma" />
        </div>
        <div className="flex items-center mt-10">
          <BorderedInput
            label="Email Address"
            placeholder="example@gmail.com"
          />
          <p className="mx-4 text-secondary mt-10">or</p>
          <BorderedInput label="Phone" placeholder="+1234 5678 895" />
        </div>
        <button className="bg-primary text-center w-full rounded-sm flex items-center justify-center h-[49px] text-white font-medium text-base mt-10">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
