import React, { createContext, useState, useEffect } from "react";
import cookie from "js-cookie";
import { useUser } from "@src/hooks/useUser";
import { useUserHome } from "@src/hooks/useUserHome";
import api from "@src/utils/api";

export interface User {
  currency: {
    code: string;
    symbol: string;
  };
  _id: string;
  phone: string;
  __v: number;
  active: boolean;
  createdAt: string;
  paymentChannels: [];
  publicId: string;
  subscription: {
    level: string;
    _id: string;
  };
  updatedAt: string;
  lastLoggedIn: string;
  username: string;
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  notifications?: {
    email?: boolean;
    sms?: boolean;
    push?: boolean;
  };
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  userHomeData: Record<string, any>;
  authenticate: (token: string) => Promise<void>;
  logout?: (path?: string) => void;
  updateUser?: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  userHomeData: [],
  authenticate: async (token) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { data, error, isLoading } = useUser();
  const { data: homeData } = useUserHome();

  useEffect(() => {
    if ((!data && !error && cookie.get("token")) || isLoading) {
      setLoading(true);
      return;
    }
    setUser(data?.data || null);
    setLoading(false);
  }, [data, error, isLoading]);

  const authenticate = async (token: string) => {
    if (!token) return;
    cookie.set("token", token, { expires: 1 });
  };

  const logout = async (path = "/login") => {
    await api("/me/logout").catch(console.log);
    cookie.remove("token");
    setUser(null);
    window.location.href = path;
  };

  const updateUser = (u: User | null) => {
    setUser(u);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userHomeData: homeData?.data,
        updateUser,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
