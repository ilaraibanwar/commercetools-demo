import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,

  ct: {
    projectKey: process.env.CTP_PROJECT_KEY,
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
    authUrl: process.env.CTP_AUTH_URL,
    apiUrl: process.env.CTP_API_URL,
    scopes: process.env.CTP_SCOPES,
  },

  tax: {
    apiKey: process.env.APILAYER_KEY,
    baseUrl: "https://api.apilayer.com/tax_data",
  },
};
