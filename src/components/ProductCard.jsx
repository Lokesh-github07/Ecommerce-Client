import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <h2>₹{product.price}</h2>

        <Link
          to={`/products/${product.id}`}
          className="view-product"
        >
          View Product
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;