import axios from "axios";

const baseURL = "https://dapi.kakao.com/v3/search/book"; // URL이 정확한지 확인하세요

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
  },
});

export default instance;
