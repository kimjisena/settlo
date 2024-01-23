import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";

const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.EXPO_PUBLIC_CLIENT_SECRET;

const apiCall = async (endpoint: string, body: any) => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: endpoint,
    data: {
      username: body?.username,
      password: body?.password,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("tenemos un error", error);
    return {};
  }
};

export const login = async (username: string, password: string) => {
  return apiCall(
    `https://admin.settlo.app/api/v1/sign-in?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    { username, password }
  );
};

export const getToken = async (key: string) => {
  try {
    return SecureStore.getItemAsync(key);
  } catch (err) {
    return null;
  }
};

export const saveToken = async (key: string, value: string) => {
  try {
    return SecureStore.setItemAsync(key, value);
  } catch (err) {
    return;
  }
};
