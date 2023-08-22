"use server";
import axios, { CreateAxiosDefaults } from "axios";
import { cookies } from "next/headers";

// let axiosDefaults: CreateAxiosDefaults = {
//   baseURL: "http://backend:4000",
//   timeout: 1000,
// };

// export const serverAxios = axios.create(axiosDefaults);
// const cookieStore = cookies();

// if (cookieStore.has("access_token"))
//   serverAxios.defaults.headers.common.Authorization =
//     "Bearer " + cookieStore.get("access_token")?.value;
