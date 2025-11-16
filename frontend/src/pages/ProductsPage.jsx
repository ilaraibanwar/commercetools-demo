import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function ProductsPage({ user }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Header user={user} />
      <ProductList />
    </div>
  );
}
