import { ctClient } from "../config/commercetools.js";
import { config } from "../config/env.js";
import { getProvinceRate } from "./taxService.js";

export async function fetchProducts(province = "ON") {
  const response = await ctClient.execute({
    uri: `/${config.ct.projectKey}/product-projections`,
    method: "GET",
  });

  const products = response.body?.results || [];
  const taxRate = await getProvinceRate(province);

  return products.map((p) => {
    const priceObj = p.masterVariant?.prices?.[0]?.value;
    if (!priceObj) return null;

    const basePrice = priceObj.centAmount / 100;
    const currency = priceObj.currencyCode;

    return {
      id: p.id,
      name: Object.values(p.name || {})[0] || "Unnamed",
      description: Object.values(p.description || {})[0] || "",
      image: p.masterVariant?.images?.[0]?.url || null,
      basePrice,
      currency,
      taxRate,
      finalPrice: (basePrice * (1 + taxRate)).toFixed(2),
      province,
    };
  }).filter(Boolean);
}
