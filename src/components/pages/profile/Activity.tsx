import { Collapse, Select } from "antd";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const { Panel } = Collapse;

const Activity = () => {
  return (
    <div className="w-full p-10 bg-white rounded-[4px]">
      <h3 className="text-secondary text-2xl font-semibold">
        Welcome, Amelia Emma!
      </h3>

      <div className="h-[160px] rounded-md activity-header px-8 flex flex-col items-center justify-center text-center mt-10">
        <div className="gap-4 flex text-white">
          <div className="w-[120px]">
            <Select
              options={[{ label: "My Contact", value: "my-contact" }]}
              value="my-contact"
              suffixIcon={<AiFillCaretDown />}
              className="w-full contact-selection"
            />
          </div>
          <div className="bg-white bg-opacity-20 h-[32px] rounded w-[88px] px-4 text-sm font-normal inline-flex items-center">
            $
          </div>
        </div>
        <h2 className="text-white font-semibold text-3xl mt-4">$ 2050.00</h2>
      </div>

      <div className="flex items-center justify-center gap-5 my-10">
        <button className="bg-primary rounded-[4px] h-[35px] inline-flex items-center text-center px-4 text-white">
          Create a Contract
        </button>
        <button className="border-2 border-[#F1F1F2] rounded-[4px] h-[35px] inline-flex items-center text-center px-4">
          Make Payment
        </button>
      </div>

      <div className="border border-[##F1F1F2] rounded-[10px] p-6 mb-10">
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
          <Panel
            key={"1"}
            className="px-0"
            header={
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-base text-secondary">Due 7 days ago</h5>
                  <h2 className="text-base font-medium text-black mt-2">
                    Rent Payment
                  </h2>
                </div>
                <h4 className="text-base font-medium text-black">$ 200.00</h4>
              </div>
            }
          ></Panel>
          <Panel
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
          ></Panel>
        </Collapse>
      </div>
      <div className="border border-[##F1F1F2] rounded-[10px] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black">My Contracts</h2>
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
          <Panel
            key={"1"}
            className="px-0"
            header={
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-base text-secondary">Due 7 days ago</h5>
                  <h2 className="text-base font-medium text-black mt-2">
                    Rent Payment
                  </h2>
                </div>
                <h4 className="text-base font-medium text-black">$ 200.00</h4>
              </div>
            }
          ></Panel>
          <Panel
            key={"2"}
            className="px-0"
            header={
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-base text-secondary">
                    Instalment Payment
                  </h5>
                  <h2 className="text-base font-medium text-black mt-2">
                    Shalom’s Tutorials
                  </h2>
                </div>
                <h4 className="text-base font-medium text-black">$ 200.00</h4>
              </div>
            }
          ></Panel>
          <Panel
            key={"3"}
            className="px-0"
            header={
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-base text-secondary">One Time Payment</h5>
                  <h2 className="text-base font-medium text-black mt-2">
                    Chicken Republic
                  </h2>
                </div>
                <h4 className="text-base font-medium text-black">$ 200.00</h4>
              </div>
            }
          ></Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Activity;
