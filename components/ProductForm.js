import axios from "axios";

export default function ProductForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", {
      name: "product1",
      description: "some product",
      price: 10000,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>

        <input type="text" name="name" />

        <label htmlFor="price">Price : </label>

        <input type="text" name="price" id="price" />

        <label htmlFor="description">Description: </label>

        <textarea name="description" rows="2"></textarea>

        <button>Save Product</button>
      </form>
    </div>
  );
}
