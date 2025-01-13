"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Product } from "@/types/product.types";

const AdminDashboard = () => {
  const supabase = createClientComponentClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error("Error fetching products:", error);
    else setProducts(data);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData) {
      const { error } = await supabase.from("products").insert([formData]);
      if (error) console.error("Error adding product:", error);
      else {
        fetchProducts();
        setFormData(null);
      }
    }
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) console.error("Error deleting product:", error);
    else fetchProducts();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="srcUrl"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Product
        </button>
      </form>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between">
              <span>{product.title}</span>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white p-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;