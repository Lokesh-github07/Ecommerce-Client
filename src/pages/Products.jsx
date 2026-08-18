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
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 2999,
      rating: 4.3,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2499,
      rating: 4.6,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 4,
      name: "Backpack",
      category: "Fashion",
      price: 1499,
      rating: 4.2,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 5,
      name: "Dumbell",
      category: "Gym equipments",
      price: 1500,
      rating: 4.5,
      image: "https://via.placeholder.com/300"
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