import HeaderNavigationBar from "@components/Navigation/HeaderNavigationBar";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <HeaderNavigationBar />
      <div className="container flex items-center justify-center min-h-[90.5vh]">
        <form className="w-[640px] max-w-full border-[4px] border-white rounded-[40px] px-[70px] pt-[54px] pb-[28px] login-form">
          <h4 className="font-bold text-2xl text-black">Welcome!</h4>
          <h2 className="text-[38px] font-bold text-back mb-5">
            Login to payy
          </h2>
          <label className="block text-lg text-secondary mb-1">
            Phone Number
          </label>
          <div className="flex gap-5 mt-4">
            <input
              className="w-[60px] h-[50px] rounded-[20px] text-center box-border text-secondary text-sm border-2 border-primary border-opacity-[0.18%] focus:outline-none focus:border-primary bg-white bg-opacity-40"
              placeholder="+1"
            />
            <input
              className="bg-white bg-opacity-40 w-full h-[50px] rounded-[39px] box-border px-4 text-secondary text-sm border border-dashed border-primary border-opacity-25 focus:border-opacity-100 focus:outline-none"
              placeholder="+1"
            />
          </div>
          <button className="rounded-[39px] bg-primary w-full h-[50px] inline-flex items-center justify-center mt-5 font-medium text-base text-white">
            Get Code
          </button>
          <div className="mb-5 mt-10">
            <label className="block text-lg text-secondary mb-1">
              Password
            </label>
            <input
              className="bg-white bg-opacity-40 w-full h-[50px] rounded-[39px] box-border px-4 text-secondary text-sm border border-dashed border-primary border-opacity-25 focus:border-opacity-100 focus:outline-none"
              placeholder="password"
            />
            <p className="text-base font-normal mt-2 text-secondary">
              Forgot Password?{" "}
              <a href="#" className="font-medium text-black">
                Click Here
              </a>
            </p>
          </div>
          <Link
            to={"/profile"}
            className="rounded-[39px] bg-black w-full h-[50px] inline-flex items-center justify-center mt-5 font-medium text-base text-white"
          >
            Login
          </Link>
          <p className="text-base font-normal mt-5 text-secondary text-center">
            Don't have an account yet?{" "}
            <a href="#" className="font-medium text-black">
              Register for free
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
