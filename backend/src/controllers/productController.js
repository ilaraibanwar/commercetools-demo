import { fetchProducts } from "../services/productService.js";

export async function getProducts(req, res) {
  try {
    const province = req.query.province?.toUpperCase() || "ON";
    const data = await fetchProducts(province);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
