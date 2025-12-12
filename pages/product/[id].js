// [id].js - placeholder content
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: 40 }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Coming soon…</p>
    </div>
  );
}
