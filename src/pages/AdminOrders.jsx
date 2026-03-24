import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = null || useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`);
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="admin-orders-container">
        <h2>Loading orders...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-orders-container">
        <h2>Error</h2>
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="admin-orders-container">
      <div className="admin-header">
        <h1>Admin Dashboard - Orders</h1>
        <p>Manage and view all customer orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <h3>No orders found</h3>
          <p>You haven't received any orders yet.</p>
        </div>
      ) : (
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Items</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="order-id">{order._id.substring(order._id.length - 6).toUpperCase()}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td>{order.customer?.fullName || 'N/A'}</td>
                  <td>{order.customer?.phoneNumber || 'N/A'}</td>
                  <td className="order-address">
                    {order.customer?.address || 'N/A'}, {order.customer?.city || ''} - {order.customer?.pincode || ''}
                  </td>
                  <td>
                    <div className="order-items-list">
                      {order.items?.map((item, index) => (
                        <div key={index} className="order-item">
                          <span>{item.name} (x{item.quantity})</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="order-total">₹{order.total?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="orders-summary">
            <p>Total Orders: <strong>{orders.length}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
