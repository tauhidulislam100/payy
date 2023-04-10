import StoreLink from "@components/StoreLink/StoreLink";
import { useAuth } from "@src/hooks/useAuth";
import { Collapse, Modal, Select, Spin } from "antd";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const { Panel } = Collapse;

function timeAgo(dateString: string) {
  const date: any = new Date(dateString);
  const today: any = new Date();
  const diffTime = today - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  return rtf.format(-diffDays, "day");
}

const Activity = () => {
  const { userHomeData, homeDataLoading, user } = useAuth();
  const [selectedOption, setSelectedOption] = useState("my-contract");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:p-10 lg:pb-0">
      <h3 className="text-secondary text-2xl font-semibold mb-5">
        Welcome, {user?.firstName} {user?.lastName}
      </h3>
      <div className="bg-white sm:px-10 px-4 py-10 rounded-[4px]">
        <div className="h-[160px] rounded-md activity-header flex flex-col items-center justify-center text-center">
          <div className="gap-4 flex text-white">
            <div className="w-[140px]">
              <Select
                options={[
                  { label: "My Contracts", value: "my-contract" },
                  { label: "Outgoing Payments", value: "outgoing-payment" },
                ]}
                placeholder="My Contract"
                suffixIcon={<AiFillCaretDown />}
                className="w-full contact-selection"
                value={selectedOption}
                onChange={(v) => setSelectedOption(v)}
              />
            </div>
            <div className="bg-white bg-opacity-20 h-[32px] rounded w-[88px] px-4 text-sm font-normal inline-flex items-center">
              {selectedOption === "my-contract"
                ? userHomeData?.totalIncomingAmount?.[0]?.currencySymbol
                : userHomeData?.totalOutgoingAmount?.[0]?.currencySymbol}
            </div>
          </div>
          {selectedOption === "my-contract" ? (
            <h2 className="text-white font-semibold text-3xl mt-4">
              {userHomeData?.totalIncomingAmount?.[0]?.currencySymbol}{" "}
              {userHomeData?.totalIncomingAmount?.[0]?.amount}
            </h2>
          ) : (
            <h2 className="text-white font-semibold text-3xl mt-4">
              {userHomeData?.totalOutgoingAmount?.[0]?.currencySymbol}{" "}
              {userHomeData?.totalOutgoingAmount?.[0]?.amount}
            </h2>
          )}
        </div>

        {/* <div className="flex items-center justify-center gap-5 my-10">
          <button
            onClick={() => setOpen(true)}
            className="bg-primary rounded-[4px] h-[35px] inline-flex items-center text-center px-4 text-white"
          >
            Create a Contract
          </button>
          <button
            onClick={() => setOpen(true)}
            className="border-2 border-[#F1F1F2] rounded-[4px] h-[35px] inline-flex items-center text-center px-4"
          >
            Make Payment
          </button>
        </div> */}
        {selectedOption === "my-contract" ? (
          <div className="border border-[##F1F1F2] rounded-[10px] p-6 my-10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Incomming Payments
              </h2>
              <button className="text-primary font-medium text-base">
                View All
              </button>
            </div>
            <Collapse
              defaultActiveKey="1"
              ghost
              className="mt-4 info-collapse"
              expandIconPosition="right"
              expandIcon={(p) => (
                <span {...p} className="text-[#A9A9BC]">
                  {p.isActive ? (
                    <AiFillCaretDown className="text-[#A9A9BC] text-lg" />
                  ) : (
                    <AiFillCaretRight className="text-[#A9A9BC] text-lg" />
                  )}
                </span>
              )}
            >
              {homeDataLoading ? (
                <div className="flex items-center justify-center">
                  <Spin />
                </div>
              ) : null}

              {userHomeData?.incomingPayments?.map(
                (payment: Record<string, any>, index: number) => (
                  <Panel
                    key={index}
                    className="px-0"
                    header={
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-base text-secondary">
                            Due {timeAgo(payment.dueDate)}
                          </h5>
                          <h2 className="text-base font-medium text-black mt-2">
                            {payment.name}
                          </h2>
                        </div>
                        <h4 className="text-base font-medium text-black">
                          {payment.currencySymbol} {payment.amount}
                        </h4>
                      </div>
                    }
                  ></Panel>
                )
              )}
              {/* <Panel
              key={"2"}
              className="px-0"
              header={
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-base text-secondary">Due 2 days ago</h5>
                    <h2 className="text-base font-medium text-black mt-2">
                      Maths Class
                    </h2>
                  </div>
                  <h4 className="text-base font-medium text-black">$ 200.00</h4>
                </div>
              }
            ></Panel> */}
            </Collapse>
          </div>
        ) : (
          <div className="border border-[##F1F1F2] rounded-[10px] p-6 my-10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Outgoing Payments
              </h2>
              <button className="text-primary font-medium text-base">
                View All
              </button>
            </div>
            <Collapse
              defaultActiveKey="1"
              ghost
              className="mt-4 info-collapse"
              expandIconPosition="right"
              expandIcon={(p) => (
                <span {...p} className="text-[#A9A9BC]">
                  {p.isActive ? (
                    <AiFillCaretDown className="text-[#A9A9BC] text-lg" />
                  ) : (
                    <AiFillCaretRight className="text-[#A9A9BC] text-lg" />
                  )}
                </span>
              )}
            >
              {homeDataLoading ? (
                <div className="flex items-center justify-center">
                  <Spin />
                </div>
              ) : null}
              {userHomeData?.outgoingPayments?.map(
                (payment: Record<string, any>, index: number) => (
                  <Panel
                    key={index}
                    className="px-0"
                    header={
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-base text-secondary">
                            Due {timeAgo(payment.dueDate)}
                          </h5>
                          <h2 className="text-base font-medium text-black mt-2">
                            {payment.name}
                          </h2>
                        </div>
                        <h4 className="text-base font-medium text-black">
                          {payment?.currencySymbol ??
                            userHomeData?.totalOutgoingAmount?.[0]
                              ?.currencySymbol}{" "}
                          {payment.amount}
                        </h4>
                      </div>
                    }
                  ></Panel>
                )
              )}
            </Collapse>
          </div>
        )}
      </div>
      <Modal
        open={open}
        footer={null}
        width={400}
        centered
        onCancel={() => setOpen(false)}
      >
        <div className="flex justify-center flex-col items-center py-2 mt-6 text-center">
          <h3 className="font-semibold text-2xl mb-6">
            Download{" "}
            <img
              src="/src/assets/logo.png"
              className="max-w-full w-[80px] object-cover inline-block"
            />{" "}
            to create and track your payments{" "}
          </h3>
          <StoreLink />
        </div>
      </Modal>
    </div>
  );
};

export default Activity;
