// cart.js - placeholder content
// pages/cart.js
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="page-shell">
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

      <main className="site-main cart-page">
        <h1>Your Cart</h1>
        <p>No items in cart yet.</p>
        <Link href="/shop" className="back-to-shop-link">
          Browse products
        </Link>
      </main>

      <footer className="mz-footer">
        © {new Date().getFullYear()} MyZapCart Fashion • Built in Hyderabad with love.
      </footer>
    </div>
  );
}
