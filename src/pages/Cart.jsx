import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyCard}>
          <h2 style={styles.title}>Your Shopping Cart is Empty</h2>
          <p style={styles.subtitle}>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" style={styles.primaryButton}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Shopping Cart</h1>
      <div style={styles.cartLayout}>
        <div style={styles.itemsList}>
          {cartItems.map((item) => {
            const id = item._id || item.id;
            return (
              <div key={id} style={styles.cartCard}>
                <img src={item.image} alt={item.name || item.title} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemTitle}>{item.name || item.title}</h3>
                  <p style={styles.itemPrice}>₹{item.price}</p>
                </div>
                <div style={styles.quantityContainer}>
                  <button
                    onClick={() => updateQuantity(id, item.quantity - 1)}
                    style={styles.qtyBtn}
                  >
                    -
                  </button>
                  <span style={styles.qtyText}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(id, item.quantity + 1)}
                    style={styles.qtyBtn}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div style={styles.summaryCard}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>
          <div style={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr style={styles.divider} />
          <div style={{ ...styles.summaryRow, fontWeight: "700", fontSize: "1.1rem" }}>
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            style={styles.checkoutBtn}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 1rem",
    fontFamily: "Inter, sans-serif",
  },
  mainTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "1.5rem",
  },
  cartLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "2rem",
    alignItems: "start",
  },
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  cartCard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1rem 1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    gap: "1.5rem",
  },
  itemImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 0.25rem 0",
  },
  itemPrice: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#4f46e5",
    margin: 0,
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "#f1f5f9",
    padding: "0.25rem 0.5rem",
    borderRadius: "6px",
  },
  qtyBtn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    color: "#334155",
  },
  qtyText: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#1e293b",
  },
  removeBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "#ef4444",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  summaryTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#1e293b",
    marginTop: 0,
    marginBottom: "1rem",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
    fontSize: "0.95rem",
    color: "#475569",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e2e8f0",
    margin: "1rem 0",
  },
  checkoutBtn: {
    width: "100%",
    padding: "0.85rem",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background-color 0.2s",
  },
  emptyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    padding: "1rem",
  },
  emptyCard: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "3rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    maxWidth: "450px",
    width: "100%",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#64748b",
    marginBottom: "1.5rem",
  },
  primaryButton: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Cart;