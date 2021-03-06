import axios from "axios";

const { VUE_APP_WHATHER_APP_KEY, VUE_APP_GEOCODING_APP_KEY } = process.env;

export const getWeatherAPI = (lat, lon) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VUE_APP_WHATHER_APP_KEY}&units=metric`
  );
};

export const getLocalName = (lat, lon) => {
  return axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
    {
      method: "GET",
      headers: { Authorization: `KakaoAK ${VUE_APP_GEOCODING_APP_KEY}` }
    }
  );
};
