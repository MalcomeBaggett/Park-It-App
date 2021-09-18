import axios from "axios";

const baseApiCall = async (url, params = null) => {
  const requestConfig = {
    baseURL: API_URL,
    headers: {
      "X-Api-Key": API_KEY,
    },
    url,
  };
  if (params) {
    requestConfig.params = params;
  }
  try {
    return await axios(requestConfig);
  } catch (err) {
    console.log("axios encountered an error", err);
  }
};

export const getParks = async () => {
  const parks = await baseApiCall("parks", { limit: 465 });
  return parks.data.data;
};
