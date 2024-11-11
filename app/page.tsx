import Link from "next/link";
import ProductPage from "./components/ProductPage";

export default function Home() {
  return (
    <div>
      <h1>my next js app</h1>
      <Link href="/users">User </Link>
      <ProductPage />
    </div>
  );
}
