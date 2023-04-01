import { User } from "@src/contexts/AuthContext";
import api from "@src/utils/api";
import useSWR from "swr";
export const useUser = () =>
  useSWR<{ data: User }>("/users/me", api, {
    revalidateOnFocus: true,
  });
