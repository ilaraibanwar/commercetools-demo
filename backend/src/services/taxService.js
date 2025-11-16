import axios from "axios";
import { config } from "../config/env.js";

let canadaTaxCache = null;

export async function getCanadaTaxRates() {
  if (canadaTaxCache) return canadaTaxCache;

  try {
    const res = await axios.get(
      `${config.tax.baseUrl}/canada_rate_list`,
      { headers: { apikey: config.tax.apiKey } }
    );

    canadaTaxCache = res.data?.data || [];
    return canadaTaxCache;
  } catch (e) {
    console.error("Tax API error:", e.message);
    return [{ state: "DEFAULT", combined_rate: 0.05 }];
  }
}

export async function getProvinceRate(province) {
  const rates = await getCanadaTaxRates();
  const found = rates.find((r) => r.state === province);
  return found ? found.combined_rate : 0.05;
}
