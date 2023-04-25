import api from "@src/utils/api";
import useSWR from "swr";
export const useSubscriptionPackage = () =>
  useSWR<any>("/subscriptions/packages", api, {
    revalidateOnFocus: false,
  });
