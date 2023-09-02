import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Avatar, Dropdown, Modal, Spin } from "antd";
import StoreLink from "@src/components/StoreLink/StoreLink";
import logo from "/src/assets/logo.png";
import secure from "/src/assets/secure.png";
import AngleDown from "@src/components/Icons/AngleDown";
import { formatDate, useContractDetail } from "@src/hooks/useContractDetail";

const ActionLink = ({ text = "", href = "", className = "", icon, download=false, disabled=false, }:{text?:string, href?:string,className?:string,icon?:any, download?:boolean, disabled?: boolean;}) => {
  return (
    <NavLink
      download={download}
      to={disabled ? '' : href}
      className={`inline-flex gap-x-2 items-center text-base px-6 leading-none rounded-[20px] font-medium text-white bg-primary  h-[38px]  ${className} ${disabled ? 'bg-opacity-70' :""}`}
    >
      {text} {icon ? <span className="text-sm"><AngleDown/> </span> : null} 
    </NavLink>
  );
};

const ActionButton = ({className='', text='', onClick, ...rest}: {onClick?: ()=>void; className?: string, text?: string;disabled?:boolean;}) => {
  return (
    <button {...rest} onClick={onClick} className={`inline-flex gap-x-2 items-center text-base px-6 leading-none rounded-[20px] font-medium text-white bg-primary  h-[38px]  ${className}`}>
      {text}
    </button>
  )
}

const Invoice = () => {
  let { code } = useParams();
  const [openMarkModal, setOpenMarkModal] = useState(false);
  const [memo, setMemo] = useState('');
  const [paymentPlan, setPaymentPlan] = useState<Record<string, any>|undefined>();
  const { contractData, contractItems, acceptOrDecline, markAsPaid, base_url, isLoading } = useContractDetail(code);

  return (
    <>
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
      { isLoading && !contractData ? <div className="w-full min-h-[80vh] flex items-center justify-center"><Spin size="large"/></div>:  <div className="container mt-[42px]">
        <div className="min-h-[99px] md:py-0 py-4 bg-primary-100 rounded-[10px] border-b-[5px] border-black flex flex-wrap gap-4 items-center sm:px-10 px-4 justify-between">
          <div className="flex items-center font-black text-2xl gap-x-2">
            <h3 className="font-semibold">{contractData?.contract?.documentType}:</h3>{" "}
            <p className="font-normal">{contractData?.contract?.name}y</p>
          </div>
          <div className="flex sm:gap-4 gap-2 items-center">
            {contractData?.payer?.status === "Pending" ? <>
              <ActionButton text="Accept" onClick={()=>acceptOrDecline(true)} />
              <ActionButton text="Decline" onClick={()=>acceptOrDecline(false)} />
            </>: null}
            {contractData?.payer?.status === "Accepted" ? <>
              <ActionLink  text="Download" href={`${base_url}/${contractData?.contract?.id}/download?authToken=${contractData?.token}`} download={true}/>
            </>: null}
          </div>
        </div>

        <div className="mt-20 flex lg:justify-between lg:items-end justify-center items-center flex-wrap gap-6">
          <div className="flex flex-col justify-between items-center">
            <h3 className="self-start text-2xl font-medium mb-2">BILLED TO:</h3>
            <div className="w-[148px] h-[148px] rounded-full bg-white flex items-center justify-center border-2 border-primary">
                <Avatar
                size={140}
                className="bg-primary font-bold  text-white border-[4px] border-primary uppercase"
                src={contractData?.payer?.avatar}
                >
                  {`${contractData?.payer?.name.split(" ")[0][0]} ${contractData?.payer?.name.split(" ")[1][0]}`}
                </Avatar>
            </div>

            <div className="w-[345px] rounded-[10px] bg-white border-b-[3px] border-primary text-center mt-5 py-4">
              <h4 className="text-2xl font-medium">{contractData?.payer?.name}</h4>
              <p className="text-lg font-normal mt-2">{contractData?.payer?.phone}</p>
              <p className="text-lg font-normal mb-2">{contractData?.payer?.email}</p>
              <p className="font-light text-base max-w-[260px] mx-auto">
              {contractData?.payer?.address}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-end items-center">
           <div className="w-[152px] h-[152px] rounded-full border border-primary flex items-center justify-center bg-white">
            {contractData?.payee?.avatar ? 
              <img src={contractData?.payee?.avatar} className="object-cover h-[26px]"/>
            : null}
            {!contractData?.payee?.avatar && contractData?.payee?.name ? <span className="font-medium text-2xl uppercase">{`${contractData?.payee?.name.split(" ")[0][0]} ${contractData?.payee?.name.split(" ")[1][0]}`}</span>: null}
           </div>
            <div className="max-w-[401px] mt-5 lg:text-right text-center">
              <h1 className="text-3xl mb-4">{contractData?.payee?.name}</h1>
              <p className="italic text-base font-medium">
                {contractData?.payee?.phone}
              </p>
              <address className="italic text-base font-medium">
                {contractData?.payee?.address}
              </address>
              <div className="italic text-2xl font-medium">
                <strong className="font-bold">Code:</strong> {code}
              </div>
              <div className="text-2xl italic font-medium">
                <strong className="font-bold">Date:</strong> {formatDate(contractData?.contract?.createdAt)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          {/* <div className="h-[99px] bg-white rounded-[10px] border-b-[5px] border-primary flex items-center md:px-10 px-4 justify-between mb-4">
            <div className="flex items-center font-black text-2xl gap-x-4">
              <h3 className="font-semibold">Payment Info:</h3>{" "}
              <p className="font-medium italic">--------- John Kiwi</p>
            </div>
          </div> */}
          <div className="overflow-x-auto">
            <div className="lg:min-w-full min-w-[1024px]">
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
                      {contractItems?.items.map((item: Record<string, any>) => (
                        <tr className="payment-info-row" key={item.id}>
                            <td className="td">{item.id}</td>
                            <td className="td" colSpan={3}>
                            {item.name}
                            </td>
                            <td className="td">{item.price}</td>
                            <td className="td">{item.quantity.amount}</td>
                            <td className="td">{item.subtotal}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-[#FCFCFC]">
                    <tr className="">
                        <td colSpan={6} className="td !pl-20 font-bold !text-left">
                        total
                        </td>
                        <td className="td font-bold">{contractItems?.total}</td>
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
              <p className="font-medium italic">-------- {contractData?.contract?.contractType}</p>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <div className="lg:min-w-full min-w-[1400px]">
          <table className="table-fixed w-full border border-primary">
            <thead className="bg-primary bg-opacity-30">
              <tr className="">
                <td className="td !text-left">Label</td>
                <td className="td">Amount</td>
                <td className="td">Due Date</td>
                <td className="td w-[600px]">
                  Download
                </td>
              </tr>
            </thead>
            <tbody className="">
              {contractData?.paymentPlan.map((plan: Record<string, any>) => (
                <tr className="payment-info-row payment-plan" key={plan.id}>
                  <td className="td">{plan.label}</td>
                  <td className="td">${plan.amount}</td>
                  <td className="td">{formatDate(plan.dueDate)}</td>
                  <td className="td w-[600px]">
                    <div className="flex gap-4 w-full justify-between">
                       <div>
                       <Dropdown  trigger={['click']}  menu={{items: contractData.contract.paymentChannels.map((item: any) => ({label: item.paymentChannel.name, key: item.paymentChannel.id})) as any}}>
                        <button disabled={contractData?.payer?.status != 'Accepted'} className="disabled:bg-opacity-70 inline-flex gap-x-2 items-center text-base leading-none px-6 rounded-[20px] font-medium text-white bg-primary  h-[38px]">
                          Make Payment <span className="text-sm"><AngleDown/> </span>
                        </button>
                       </Dropdown>

                       </div>
                      <ActionButton disabled={contractData?.payer?.status != 'Accepted'}  text="Mark as Paid" onClick={() => {
                        setPaymentPlan(plan);
                        setOpenMarkModal(true);
                      }}/>
                      <ActionLink disabled={contractData?.payer?.status != 'Accepted'} text="Download Invoice" href={`${base_url}/invoice/${contractData?.payer?.id}/${plan.id}?authToken=${contractData?.token}`} download={true}/>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
            <tfoot className="bg-[#FCFCFC]">
              <tr className="">
                <td className="td font-bold !text-left">total</td>
                <td className="td font-bold !text-left lg:!pl-8 xl:!pl-16 2xl:!pl-28 !pl-[6rem]" colSpan={3}>
                  {contractData?.paymentPlan?.reduce((p:number, c:any) => p+c.amount,0)}
                </td>
              </tr>
            </tfoot>
          </table>
            </div>

          </div>
        </div>
      </div>}
     
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

      <Modal open={openMarkModal} centered footer={null} title={null} closable={false} onCancel={()=>{
        setOpenMarkModal(false);
      }}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-normal text-black self-start mb-1">Memo/Payment Referrence</p>
          <textarea rows={5} className="w-full border border-primary rounded-md p-4" value={memo} onChange={e=>setMemo(e.target.value)}></textarea>
          <ActionButton onClick={() => {
            markAsPaid(memo, paymentPlan?.amount, paymentPlan?.id).then(()=>{
              setOpenMarkModal(false);
              setMemo('');
              setPaymentPlan(undefined);
            })
          }} disabled={!memo} text="Mark as Paid" className="mt-4 disabled:bg-opacity-70"/>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default Invoice;
