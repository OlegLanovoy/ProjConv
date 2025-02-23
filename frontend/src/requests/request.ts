import axios from "axios";

interface Curr {
  title: string;
  current: number;
}

const BASE_URL = "http://localhost:5174";

export const getAll = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const postData = async (url: string, payload: Curr) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, payload);
  console.log(data);
  return data;
};

export const getOne = async (url: string, payload: string) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, payload);
  return data;
};
