import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import api from "@src/utils/api";
import getDialingCode from "@src/utils/getDialingCode";
import { notification, Select, Spin } from "antd";
import { useState } from "react";
import cookie from "js-cookie";
import { useAuth } from "@src/hooks/useAuth";
import { Route, Router, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const dialCodes = getDialingCode();

const Login = () => {
  const navigate = useNavigate();
  const [retryTime, setRetryTime] = useState(0);
  const { updateUser } = useAuth();
  const [form, setForm] = useState({
    code: "+1",
    phone: "",
    password: "",
    codeLoading: false,
    loading: false,
    visiblePassword: false,
  });

  const sendCode = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (retryTime > 0) return;
    try {
      setForm((p) => ({ ...p, codeLoading: true }));
      await api("/auth/request-login-code", {
        data: { phone: `${form.code}${form.phone}` },
      });
      setRetryTime(120);
      const tmid = setInterval(() => {
        setRetryTime((t) => {
          const r = t - 1;
          if (r <= 0) {
            clearInterval(tmid);
          }
          return r;
        });
      }, 1000);
    } catch (error: any) {
      notification.error({
        message: error?.message ?? "unable to send code",
      });
    }
    setForm((p) => ({ ...p, codeLoading: false }));
  };

  const handleLogin = async function (e: React.MouseEvent) {
    e.preventDefault();
    setForm((p) => ({ ...p, loading: true }));
    try {
      const { data } = await api("/auth/login", {
        data: {
          phone: `${form.code}${form.phone}`,
          password: form.password,
        },
      });
      cookie.set("token", data.token, { expires: 1 });
      updateUser?.(data);
      navigate("/dashboard");
    } catch (error: any) {
      notification.error({
        message: error?.message ?? "unable to login something went wrong",
      });
    }
    setForm((p) => ({ ...p, loading: false }));
  };

  return (
    <div className="bg-[#EFEFEF] bg-opacity-[0.85] min-h-screen">
      <HeaderNavigationBar />
      <div className="container flex items-center justify-center 2xl:min-h-[90.5vh] min-h-[87vh]">
        <form className="login-form w-[640px] max-w-full 2xl:px-12 md:px-6 p-5 2xl:py-[54px]">
          <h4 className="font-bold text-2xl text-black">Welcome!</h4>
          <h2 className="text-[38px] font-bold text-back mb-5">
            Login to payy
          </h2>
          <label className="block text-lg text-secondary mb-1">
            Phone Number
          </label>
          <div className="flex gap-3 mt-4">
            <Select
              showSearch
              options={dialCodes}
              className="dialingCode"
              placeholder="+1"
              value={form.code}
              onChange={(v) => setForm((p) => ({ ...p, code: v }))}
            />
            <input
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              value={form.phone}
              className="w-full h-[50px] rounded-[39px] box-border text-black text-sm border-2 border-white  focus:outline-none focus:bg-opacity-40 bg-secondary bg-opacity-[0.24] px-4"
              placeholder="1234 5624 258"
            />
          </div>
          <button
            title={!form.code || !form.phone ? "please enter phone number" : ""}
            onClick={sendCode}
            disabled={!form.code || !form.phone}
            className="disabled:cursor-not-allowed disabled:bg-gray-400 mb-4 rounded-[39px] bg-primary w-full h-[50px] inline-flex items-center justify-center mt-5 font-medium text-base text-white"
          >
            {retryTime > 0 ? (
              `Retry in ${retryTime}s`
            ) : form.codeLoading ? (
              <Spin size="small" className="light-spin" />
            ) : (
              "Get Code"
            )}
          </button>
          <div className="mb-5">
            <label className="block text-lg text-secondary mb-1">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) =>
                  setForm((p) => ({ ...p, password: e.target.value }))
                }
                value={form.password}
                className="w-full h-[50px] rounded-[39px] box-border text-black text-sm border-2 border-white  focus:outline-none focus:bg-opacity-40 bg-secondary bg-opacity-[0.24] px-4"
                type={form.visiblePassword ? "text" : "password"}
                placeholder="password"
              />
              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() =>
                  setForm((p) => ({
                    ...p,
                    visiblePassword: !p.visiblePassword,
                  }))
                }
              >
                {form.visiblePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            {/* <p className="text-base font-normal mt-2 text-secondary">
              Forgot Password?{" "}
              <a href="#" className="font-medium text-black">
                Click Here
              </a>
            </p> */}
          </div>
          <button
            title={!form.password ? "please enter password" : ""}
            disabled={!form.password}
            onClick={handleLogin}
            className="disabled:cursor-not-allowed disabled:bg-gray-400 rounded-[39px] bg-black w-full h-[50px] inline-flex items-center justify-center mt-5 font-medium text-base text-white"
          >
            {form.loading ? <Spin className="light-spin" /> : "Login"}
          </button>
          {/* <p className="text-base font-normal mt-5 text-secondary text-center">
            Don't have an account yet?{" "}
            <a href="#" className="font-medium text-black">
              Register for free
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
