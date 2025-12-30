import { useEffect, useState } from "react";
import api from "../api/axios";
import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchPending = async () => {
    const res = await api.get("/product/pending");
    setProducts(res.data);
  };

  const updateStatus = async (id, status) => {
    await api.put(`/product/approve/${id}`, { status });
    fetchPending();
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <Layout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
        <p className="text-gray-500 text-sm">
          Approve or reject vendor products
        </p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center">Vendor</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3 text-center">
                  {p.vendorId?.name || "Vendor"}
                </td>
                <td className="p-3 text-center">₹{p.price}</td>
                <td className="p-3 text-center">
                  <StatusBadge status={p.status} />
                </td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => updateStatus(p._id, "approved")}
                    className="px-3 py-1 rounded bg-green-600 text-white text-xs hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(p._id, "rejected")}
                    className="px-3 py-1 rounded bg-red-600 text-white text-xs hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No pending products
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Admin;
