// pages/index.js
import Link from "next/link";
import { useRouter } from "next/router";

const CATEGORY_DATA = [
  { slug: "saree", label: "Sarees", image: "/images/categories/sarees.jpg" },
  { slug: "kurti", label: "Kurtis", image: "/images/categories/kurtis.jpg" },
  { slug: "lehenga", label: "Lehengas", image: "/images/categories/lehengas.jpg" },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="site-wrapper">
      <header className="mz-header">
        <div>
          <div className="mz-logo">MyZapCart Fashion</div>
          <div className="mz-tagline">Where Royal Style Meets Real People</div>
        </div>

        <nav className="mz-nav">
          <Link href="/shop">Shop</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/account">Account</Link>
          <Link href="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
          </Link>
        </nav>
      </header>

      <main className="site-main">
       <section className="hero">
  <div className="hero-inner">
    <h1 className="hero-title">Royal Fashion for Real People</h1>
    <p className="hero-subtitle">
      Handpicked sarees, kurtis and lehengas inspired by Indian heritage.
    </p>

    <div className="hero-cta">
      <button
        className="btn-primary"
        onClick={() => router.push("/shop")}
      >
        Shop Now
      </button>
    </div>
  </div>
</section>


        <section className="category-section">
          <h2 className="category-title">Explore by Category</h2>

          <div className="category-grid">
            {CATEGORY_DATA.map((cat) => (
              <div
                key={cat.slug}
                className="category-card"
                onClick={() => router.push(`/shop?category=${cat.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(`/shop?category=${cat.slug}`);
                }}
              >
                <div
                  className="category-image"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="category-title-only">{cat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mz-footer">
        © {new Date().getFullYear()} MyZapCart Fashion, All Rights Reserved
      </footer>
    </div>
  );
}
