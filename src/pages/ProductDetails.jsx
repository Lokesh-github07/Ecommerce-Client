import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>

      <p>Product ID: {id}</p>

      <h2>Product Name</h2>
      <p>Product description will appear here.</p>
      <h3>₹1,999</h3>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;