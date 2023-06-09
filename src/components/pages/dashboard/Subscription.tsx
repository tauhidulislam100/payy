import ToggleSliderSwitch from "@components/common/ToggleSliderSwitch";
import { useAuth } from "@src/hooks/useAuth";
import { useSubscriptionPackage } from "@src/hooks/useSubscriptionPackage";
import api from "@src/utils/api";
import { Spin, notification } from "antd";
import { useEffect, useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";

const Subscription = () => {
  const { user } = useAuth();
  const [planMode, setPlanMode] = useState("monthly");
  const [planData, setPlanData] = useState<Record<string, any>>();
  const [currentSubscription, setCurrentSubscription] = useState(
    user?.subscription?.level ?? "Free"
  );
  const [selectedSubscription, setSelectedSubscription] = useState(
    user?.subscription?.level ?? "Free"
  );
  const [loading, setLoading] = useState(false);
  const { data } = useSubscriptionPackage();

  useEffect(() => {
    setPlanData(data?.data);
  }, [data]);

  const upgradePlan = async () => {
    const subscriptionId =
      planData?.productIds[selectedSubscription]?.web?.[planMode]?.["stripe"];
    if (!subscriptionId) {
      return notification.warning({
        message: "subscription plan does not exist",
      });
    }
    try {
      setLoading(true);
      const params = new URLSearchParams(window.location.search);
      const params2 = new URLSearchParams(window.location.search);
      params.set("checkout", "true");
      params2.set("checkout", "false");
      const successUrl = `${window.location.origin}${
        window.location.pathname
      }?${params.toString()}${window.location.hash}`;

      const cancelUrl = `${window.location.origin}${
        window.location.pathname
      }?${params2.toString()}${window.location.hash}`;
      const { data } = await api("/subscriptions/stripe/create-session", {
        method: "POST",
        data: {
          priceId: subscriptionId,
          successUrl: successUrl,
          cancelUrl: cancelUrl,
        },
      });
      window.location.assign(data.url);
    } catch (error: any) {
      notification.error({
        message:
          error?.message ??
          "unable upgrade the subscription plan please try again",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full md:p-10 md:pb-0">
      <h2 className="text-2xl font-semibold">Choose your plan</h2>
      <div className="bg-white rounded-md py-10 md:px-12 px-4 mt-10">
        <div className="text-center">
          <h3 className="text-3xl font-medium text-black mb-10">
            Let’s go Premium
          </h3>
          <ToggleSliderSwitch
            value={planMode}
            onChange={(e) => setPlanMode(e.target.value)}
          />
          <p className="text-base font-medium text-[#D97706] mt-5">
            Get 2 months off of the {planMode} plan
          </p>
        </div>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 mt-20">
          {Object.keys(planData?.productIds ?? {})?.map((k) => (
            <div
              onClick={() => setSelectedSubscription(k)}
              key={k}
              className={`${
                selectedSubscription === k
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              } border-2 border-[#F1F1F2] rounded-md text-center relative  text-black  p-5 cursor-pointer group ${
                currentSubscription === k ? "active-subscription" : ""
              }`}
            >
              <h2 className="text-2xl font-semibold">{k}</h2>
              <p
                className={`mt-2 text-base  ${
                  selectedSubscription === k
                    ? " text-white"
                    : "group-hover:text-white text-secondary"
                }  capitalize `}
              >
                {planMode} Price
              </p>
              <h2 className="mt-6 text-2xl font-semibold">
                {user?.currency?.symbol ?? "$"}
                {planData?.cost?.[k]?.[planMode]}
              </h2>
            </div>
          ))}
        </div>
        {planData ? (
          <>
            <div className="mt-10">
              <div className="flex items-center justify-between border-b border-[#F1F1F2] last-of-type:border-0 py-4">
                <p className="text-secondary text-base">
                  {planData?.contracts?.text}
                </p>
                <p className="text-black font-medium">
                  {planData?.contracts?.[selectedSubscription]
                    ? planData?.contracts?.[selectedSubscription] > 1000000
                      ? "Unlimited"
                      : planData?.contracts?.[selectedSubscription]
                    : selectedSubscription === "Enterprise"
                    ? "Unlimited"
                    : ""}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#F1F1F2] last-of-type:border-0 py-4">
                <p className="text-secondary text-base">
                  {planData?.members?.text}
                </p>
                <p className="text-black font-medium">
                  {planData?.members?.[selectedSubscription]
                    ? planData?.members?.[selectedSubscription] > 1000000
                      ? "Unlimited"
                      : planData?.members?.[selectedSubscription]
                    : selectedSubscription === "Enterprise"
                    ? "Unlimited"
                    : ""}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#F1F1F2] last-of-type:border-0 py-4">
                <p className="text-secondary text-base">
                  {planData?.manualReminder?.text}
                </p>
                <p className="text-black font-medium">
                  {planData?.manualReminder?.[selectedSubscription]
                    ? planData?.manualReminder?.[selectedSubscription]
                    : selectedSubscription === "Enterprise"
                    ? "Unlimited"
                    : ""}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#F1F1F2] last-of-type:border-0 py-4">
                <p className="text-secondary text-base">
                  {planData?.paymentReminders?.text}
                </p>
                <p className="text-black font-medium">
                  {planData?.paymentReminders?.[selectedSubscription]
                    ? planData?.paymentReminders?.[selectedSubscription] >
                      1000000
                      ? "Unlimited"
                      : planData?.paymentReminders?.[selectedSubscription]
                    : selectedSubscription === "Enterprise"
                    ? "Unlimited"
                    : ""}
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#F1F1F2]  py-4">
                <p className="text-secondary text-base">
                  {planData?.customPaymentChannels?.text}
                </p>
                <p className="text-black font-medium">
                  {planData?.customPaymentChannels?.[selectedSubscription]
                    ? planData?.customPaymentChannels?.[selectedSubscription] >
                      1000000
                      ? "Unlimited"
                      : planData?.customPaymentChannels?.[selectedSubscription]
                    : selectedSubscription === "Enterprise"
                    ? "Unlimited"
                    : ""}
                </p>
              </div>
            </div>
            {currentSubscription !== selectedSubscription ? (
              <button
                onClick={upgradePlan}
                className="hover:bg-opacity-90 bg-primary text-center w-full rounded-[50px] flex items-center justify-center h-[49px] text-white font-medium text-base mt-10"
              >
                {loading ? <Spin className="light-spin" /> : "Upgrade"}
              </button>
            ) : null}
          </>
        ) : (
          <div className="flex items-center justify-center">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
