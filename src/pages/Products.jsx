import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";

function Products() {

  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 1999,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 2999,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2499,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Backpack",
      category: "Fashion",
      price: 1499,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Dumbell",
      category: "Gym equipments",
      price: 1500,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop"
    }
  ];

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="section">

      <h1>All Products</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductGrid
        products={filteredProducts}
      />

    </section>
  );
}

export default Products;