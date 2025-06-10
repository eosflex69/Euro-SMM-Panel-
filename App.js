import { useState } from "react";

export default function EuroSMMPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [earnings, setEarnings] = useState(0);

  const placeOrder = () => {
    const newOrder = { id: Date.now(), amount: 10 };
    setOrderHistory([...orderHistory, newOrder]);
    setEarnings(earnings + newOrder.amount);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>EuroSMM Panel</h1>

      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <input placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Place Order</h2>
          <input placeholder="Service" />
          <input placeholder="Link" />
          <input type="number" placeholder="Quantity" />
          <button onClick={placeOrder}>Submit Order</button>

          <h3>Order History</h3>
          <ul>
            {orderHistory.map((order) => (
              <li key={order.id}>Order ID: {order.id} | ₹{order.amount}</li>
            ))}
          </ul>

          <h3>Total Earnings: ₹{earnings}</h3>
        </div>
      )}
    </div>
  );
}