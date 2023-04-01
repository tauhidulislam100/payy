import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import cookie from "js-cookie";

const api = async <T = any,>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> => {
  const token = cookie.get("token");

  const requestOptions = {
    ...options,
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    "Content-Type": "application/json",
  };

  if (token) {
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (!requestOptions.method && !requestOptions.data) {
    requestOptions.method = "GET";
  }

  if (!requestOptions.method && requestOptions.data) {
    requestOptions.method = "POST";
  }

  try {
    const response: AxiosResponse<T> = await axios.request<T>({
      url,
      ...requestOptions,
    });
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(
        (response?.data as any)?.message ??
          "something went wrong, internal server error"
      );
    }
  } catch (err: any) {
    if (err?.response?.data) {
      throw new Error(
        err?.response?.data?.message ??
          "something went wrong, internal server error"
      );
    } else {
      throw err;
    }
  }
};

export default api;
