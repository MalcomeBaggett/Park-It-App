const express = require("express");
const axios = require("axios");
//import axios from 'axios'
const API_URL = process.env.REACT_APP_NPS_BASE_URL;
const API_KEY = process.env.REACT_APP_NPS_API_KEY;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

const baseApiCall = async (url, params = null) => {
  const requestConfig = {
    baseURL: API_URL,
    headers: {
      "X-Api-Key": API_KEY,
    },
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
  const parks = await baseApiCall("parks");
  return parks;
};

app.get("/", function (req, res, next) {
  // Handle the get for this route
});

app.post("/", function (req, res, next) {
  // Handle the post for this route
});
