import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function Home() {

  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      description: "Latest gadgets and electronics"
    },
    {
      name: "Fashion",
      icon: "👕",
      description: "Trendy clothing and accessories"
    },
    {
      name: "Shoes",
      icon: "👟",
      description: "Comfortable and stylish footwear"
    },
    {
      name: "Home",
      icon: "🏠",
      description: "Everything for your home"
    }
  ];

  return (
    <div>

      {/* Hero */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO SHOEASE
          </p>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p>
            Discover thousands of products
            at amazing prices.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            Shop Now →
          </Link>

        </div>

      </section>


      {/* Categories */}

      <section className="section">

        <h2>Shop By Category</h2>

        <div className="category-grid">

          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}

        </div>

      </section>


      {/* Features */}

      <section className="features">

        <div>
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery.</p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Secure Payment</h3>
          <p>Your payment is completely secure.</p>
        </div>

        <div>
          <span>↩️</span>
          <h3>Easy Returns</h3>
          <p>Simple and hassle-free returns.</p>
        </div>

        <div>
          <span>🎧</span>
          <h3>24/7 Support</h3>
          <p>We're here whenever you need us.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;