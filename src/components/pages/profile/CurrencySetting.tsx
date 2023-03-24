import { Select } from "antd";
import { AiFillCaretDown } from "react-icons/ai";

const opts = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
];

const CurrencySetting = () => {
  return (
    <div className="w-full p-10">
      <h2 className="text-2xl font-semibold">Currency</h2>
      <div className="bg-white rounded-md py-10 px-12 mt-10">
        <p className="text-[17px] text-secondary mb-5">
          Choose your default currency!
        </p>
        <Select
          options={opts}
          value="usd"
          className="w-[140px] currency-select"
          suffixIcon={<AiFillCaretDown />}
        />
        <button className="bg-primary text-center max-w-[263px] w-full rounded-sm flex items-center justify-center h-[49px] text-white font-medium text-base mt-16">
          Save
        </button>
      </div>
    </div>
  );
};

export default CurrencySetting;
