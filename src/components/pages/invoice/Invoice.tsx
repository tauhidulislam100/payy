import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import StoreLink from "@src/components/StoreLink/StoreLink";
import logo from "/src/assets/logo.png";
import dummy from "/src/assets/dummy_1.jpeg";
import secure from "/src/assets/secure.png";
import AngleDown from "@src/components/Icons/AngleDown";

const ActionLink = ({ text = "", href = "", className = "", icon }:{text?:string, href?:string,className?:string,icon?:any}) => {
  return (
    <NavLink
      data-animate
      to={href}
      className={`inline-flex gap-x-2 items-center text-base px-6 leading-none rounded-[20px] font-medium text-white bg-primary  h-[38px]  ${className}`}
    >
      {text} {icon ? <span className="text-sm"><AngleDown/> </span> : null} 
    </NavLink>
  );
};

const Invoice = () => {
  return (
    <div className="min-h-screen bg-[#F1F1F2]">
      <div className="border-b-4 border-primary bg-white">
        <div className="container">
          <nav className="flex items-center justify-between flex-wrap py-6">
            <div
              data-animate
              className="flex items-center flex-shrink-0 text-white mr-6"
            >
              <NavLink to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-[90px] object-contain"
                />
              </NavLink>
            </div>

            <div>
              <ActionLink text="Contract  Area" href="/auth/signin" />
            </div>
          </nav>
        </div>
      </div>
      <div className="container mt-[42px]">
        <div className="min-h-[99px] md:py-0 py-4 bg-primary-100 rounded-[10px] border-b-[5px] border-black flex flex-wrap gap-4 items-center sm:px-10 px-4 justify-between">
          <div className="flex items-center font-black text-2xl gap-x-2">
            <h3 className="font-semibold">Proforma:</h3>{" "}
            <p className="font-normal">Launch party</p>
          </div>
          <div className="flex sm:gap-4 gap-2 items-center">
            <ActionLink text="Accept" href="/auth/signin" />
            <ActionLink text="Decline" href="/auth/signin" />
            <ActionLink text="Download" href="/auth/signin" />
          </div>
        </div>

        <div className="mt-20 flex lg:justify-between lg:items-end justify-center items-center flex-wrap gap-6">
          <div className="flex flex-col justify-between items-center">
            <div className="w-[148px] h-[148px] rounded-full bg-white flex items-center justify-center border-2 border-primary">
                <Avatar
                size={140}
                className="bg-primary font-bold  text-white border-[4px] border-primary"
                src={dummy}
                ></Avatar>
            </div>

            <div className="w-[345px] rounded-[10px] bg-white border-b-[3px] border-primary text-center mt-5 py-4">
              <h4 className="text-2xl font-medium">John Kiwi</h4>
              <p className="text-lg font-normal my-3">john@letwroks.com</p>
              <p className="font-light text-base max-w-[260px] mx-auto">
                348 Junior Road, Atlanta GA, 30033 United States
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-end items-center">
           <div className="w-[152px] h-[152px] rounded-full border border-primary flex items-center justify-center bg-white">
            <img src={logo} className="object-cover h-[26px]"/>
           </div>
            <div className="max-w-[401px] mt-5 lg:text-right text-center">
              <h1 className="text-[40px] mb-10">Fero Technologies, LLC</h1>
              <address className="italic text-2xl font-medium">
                348 Junior Road, Atlanta GA, 30033 United States
              </address>
              <div className="italic text-2xl font-medium">
                <strong className="font-bold">Code:</strong> 20s93f-i2pso2
              </div>
              <div className="text-2xl italic font-medium">
                <strong className="font-bold">Date:</strong> July 25th, 2022
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-[99px] bg-white rounded-[10px] border-b-[5px] border-primary flex items-center md:px-10 px-4 justify-between mb-4">
            <div className="flex items-center font-black text-2xl gap-x-4">
              <h3 className="font-semibold">Payment Info:</h3>{" "}
              <p className="font-medium italic">--------- John Kiwi</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">
                <table className="table-fixed w-full border border-primary">
                    <thead className="bg-primary bg-opacity-30">
                    <tr className="">
                        <td className="td">No.</td>
                        <td className="td !text-left" colSpan={3}>
                        Items
                        </td>
                        <td className="td">Unite Price</td>
                        <td className="td">Qty.</td>
                        <td className="td">Sub Total</td>
                    </tr>
                    </thead>
                    <tbody className="">
                    <tr className="payment-info-row">
                        <td className="td">01.</td>
                        <td className="td" colSpan={3}>
                        Shoe
                        </td>
                        <td className="td">20,000.00</td>
                        <td className="td">2</td>
                        <td className="td">40000</td>
                    </tr>
                    <tr className="payment-info-row">
                        <td className="td">02.</td>
                        <td className="td" colSpan={3}>
                        Pants
                        </td>
                        <td className="td">12000.00</td>
                        <td className="td">4</td>
                        <td className="td">48000</td>
                    </tr>
                    </tbody>
                    <tfoot className="bg-[#FCFCFC]">
                    <tr className="">
                        <td colSpan={6} className="td !pl-20 font-bold !text-left">
                        total
                        </td>
                        <td className="td font-bold">88000</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-[99px] bg-white rounded-[10px] border-b-[5px] border-primary flex items-center md:px-10 px-4 justify-between mb-4">
            <div className="flex items-center font-black text-2xl gap-x-4">
              <h3 className="font-semibold">Payment Plan:</h3>{" "}
              <p className="font-medium italic">-------- Installment</p>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <div className="min-w-[1440px]">
          <table className="table-fixed w-full border border-primary">
            <thead className="bg-primary bg-opacity-30">
              <tr className="">
                <td className="td">Label</td>
                <td className="td">Amount</td>
                <td className="td">Due Date</td>
                <td className="td" colSpan={2}>
                  Download
                </td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="payment-info-row payment-plan">
                <td className="td">Deposit</td>
                <td className="td">$5,000</td>
                <td className="td">July, 3rd 2023</td>
                <td className="td" colSpan={2}>
                  <div className="flex gap-4 w-full justify-between">
                    <ActionLink icon={<AngleDown/>} text="Make Payment" href="/auth/signin" />
                    <ActionLink  text="Mark as Paid" href="/auth/signin" />
                    <ActionLink  text="Download Invoice" href="/auth/signin" />
                  </div>
                </td>
              </tr>
              <tr className="payment-info-row payment-plan">
                <td className="td">Final Payment</td>
                <td className="td">$7,000</td>
                <td className="td">July, 5rd 2023</td>
                <td className="td" colSpan={2}>
                  <div className="flex gap-4 w-full justify-between">
                    <ActionLink icon={<AngleDown/>} text="Make Payment" href="/auth/signin" />
                    <ActionLink  text="Mark as Paid" href="/auth/signin" />
                    <ActionLink  text="Download Invoice" href="/auth/signin" />
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-[#FCFCFC]">
              <tr className="">
                <td className="td font-bold !text-left">total</td>
                <td className="td font-bold !text-left !pl-28" colSpan={4}>
                  88000
                </td>
              </tr>
            </tfoot>
          </table>
            </div>

          </div>
        </div>
      </div>
      <hr className="border-primary mt-44 mb-24" />

      <section id="download" className="pb-20">
        <div className="container">
          <div className="grid grid-cols-3 lgMax:grid-cols-1">
            <div className=""></div>
            <div className="flex flex-col items-center justify-center text-center self-start">
              <img
                data-animate
                src={secure}
                className="max-w-full object-contain"
                alt="secure"
              />
              <h2
                data-animate
                className="xl:text-4xl md:text-3xl text-[25px] font-bold my-4 max-w-[670px]"
              >
                Download Payy to keep track
              </h2>
                <span className="font-normal text-4xl mb-4">of this contract and more</span>
              <p data-animate className="text-secondary font-normal ">
                Download and enjoy Payy for free with no obligations
              </p>
              <div className=" mt-10">
                <StoreLink />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
