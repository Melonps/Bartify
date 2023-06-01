import React, { useState, useEffect } from 'react';

const Table = ({ items, totalItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  }, [items]);

  const updateTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < totalItems; i++) {
      totalPrice += items[i].product.price * items[i].product.quantity;
    }
    setTotal(totalPrice);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <ListItem
              key={product.id}
              value={product}
              updateTotal={updateTotal}
            />
          ))}
          <tr className="totalTr">
            <td className="totalText">Total:</td>
            <td></td>
            <td></td>
            <td className="totalTR">{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ListItem = ({ value, updateTotal }) => {
  const [name, setName] = useState(value.product.name);
  const [price, setPrice] = useState(value.product.price);
  const [quantity, setQuantity] = useState(value.product.quantity);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [price, quantity]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'price') setPrice(value);
    if (name === 'quantity') setQuantity(value);
  };

  const calculateTotal = () => {
    const itemTotal = price * quantity;
    setTotal(itemTotal);
    updateTotal();
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name..."
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="Price..."
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={handleChange}
          placeholder="Quantity..."
        />
      </td>
      <td className="total">{total}</td>
    </tr>
  );
};

const Calculator = () => {
  const [counter, setCounter] = useState(2);
  const [items, setItems] = useState([
    { id: "0", product: { name: "Example 1", price: "25", quantity: "3" } },
    { id: "1", product: { name: "Example 2", price: "32", quantity: "4" } }
  ]);

  const addRow = () => {
    setCounter(counter + 1);
    const listItem = { id: counter, product: { name: "", price: "", quantity: "" } };
    setItems([...items, listItem]);
  };

  return (
    <div className="container">
      <Table items={items} totalItems={counter} />
      <div>
        <button onClick={addRow}>+ Add Product</button>
      </div>
    </div>
  );
};

export default Calculator;
