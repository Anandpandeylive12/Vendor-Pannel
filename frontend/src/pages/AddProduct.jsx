import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const AddProduct = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/product/add", form);
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto card">
        <h2 className="text-2xl font-semibold mb-6">
          Add New Product
        </h2>

        <form onSubmit={submit} className="space-y-5">
          <input className="input" placeholder="Product Name"
            onChange={e=>setForm({...form,name:e.target.value})}/>
          <textarea className="input" placeholder="Description"
            onChange={e=>setForm({...form,description:e.target.value})}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" type="number" placeholder="Price"
              onChange={e=>setForm({...form,price:e.target.value})}/>
            <input className="input" placeholder="Category"
              onChange={e=>setForm({...form,category:e.target.value})}/>
          </div>
          <input className="input" placeholder="Image URL"
            onChange={e=>setForm({...form,image:e.target.value})}/>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={()=>navigate("/dashboard")}
              className="btn-secondary">
              Cancel
            </button>
            <button className="btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
