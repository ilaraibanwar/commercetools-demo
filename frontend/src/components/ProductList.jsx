import { useEffect, useState, useCallback } from "react";
import { provinces } from "../data/provinces";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [province, setProvince] = useState("ON");
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/products?province=${province}`
      );
      setProducts(await res.json());
    } finally {
      setLoading(false);
    }
  }, [province]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="p-8">

      {/* Province Dropdown */}
      <div className="mb-6">
        <label className="text-gray-300 mr-3">Province:</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 text-white px-3 py-2 rounded-md"
        >
          {provinces.map((p) => (
            <option key={p.code} value={p.code}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-3xl font-bold text-green-400 mb-6">
        Products Catalog
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((p) => (
            <div
              key={p.id}
              className="bg-neutral-900 border border-neutral-700 p-5 rounded-xl text-white shadow-md hover:shadow-green-500/20 transition"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-contain bg-neutral-800 rounded-md mb-4 p-2"
                />
              ) : (
                <div className="w-full h-56 bg-neutral-800 rounded-md mb-4" />
              )}

              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {p.description?.slice(0, 70) || "No description"}...
              </p>

              <div className="text-sm">
                <p><strong>Base:</strong> {p.basePrice.toFixed(2)} {p.currency}</p>
                <p><strong>Tax:</strong> {(p.taxRate * 100).toFixed(2)}%</p>
                <p><strong>Final:</strong> {p.finalPrice} {p.currency}</p>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
