import { useAuth } from "@src/hooks/useAuth";
import api from "@src/utils/api";
import { notification, Select, Spin } from "antd";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const opts = [
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
  { value: "NGN", label: "₦" },
];

const CurrencySetting = () => {
  const { user } = useAuth();
  const [defaultCurrency, setDefaultCurrency] = useState(
    user?.currency?.code ?? "USD"
  );

  const [loading, setLoading] = useState(false);

  const updateCurrency = async () => {
    const currency = opts.find((item) => item.value === defaultCurrency);
    try {
      setLoading(true);
      await api("/users/me", {
        method: "PATCH",
        data: { currency: { symbol: currency?.label, code: currency?.value } },
      });
      notification.success({
        message: "default currency settings updated successfuly",
      });
    } catch (error: any) {
      notification.error({
        message:
          error?.message ??
          "something went wrong, unable to update default currency settings",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full md:p-10">
      <h2 className="text-2xl font-semibold">Currency</h2>
      <div className="bg-white rounded-md py-10 md:px-12 mt-10 text-center">
        <p className="text-[17px] text-secondary mb-5">
          Choose your default currency!
        </p>
        <Select
          options={opts}
          value={defaultCurrency}
          onChange={setDefaultCurrency}
          className="w-[140px] currency-select"
          suffixIcon={<AiFillCaretDown />}
          placeholder="Select Default Currency"
        />
        <div className="flex justify-center">
          <button
            onClick={updateCurrency}
            className="bg-primary text-center w-full max-w-[343px] rounded-[50px] flex items-center justify-center h-[49px] text-white font-medium text-base mt-10"
          >
            {loading ? <Spin className="light-spin" /> : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencySetting;
