import React, { useState, useEffect } from "react";

function FakeStoreForm() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Fetch data from the Fake Store API when the category changes
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, maybe set the category state here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p> men's clothing </p>
        <p> jewelery </p>
        <input
          type="text"
          placeholder="Enter a category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FakeStoreForm;
