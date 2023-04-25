import api from "@src/utils/api";
import useSWR from "swr";
export const useUserHome = () =>
  useSWR<any>("/users/home", api, {
    revalidateOnFocus: true,
  });
