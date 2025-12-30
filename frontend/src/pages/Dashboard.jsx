import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

const Dashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/product/vendor/${user._id}`).then(res => setProducts(res.data));
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Welcome, {user.name}
          </h2>
          <p className="text-gray-500 text-sm">
            Manage your submitted products
          </p>
        </div>

        <Link to="/add-product" className="btn-primary">
          + Add Product
        </Link>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Category</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3 text-center">₹{p.price}</td>
                <td className="p-3 text-center">{p.category}</td>
                <td className="p-3 text-center">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No products submitted yet
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
