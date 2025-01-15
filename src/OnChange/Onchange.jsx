/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

const Onchange = () => {
  const [name, setName] = useState("Default");
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setIsNotShipping] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleComment = (e) => {
    setAddress(e.target.value);
  };
  
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const handleShipping = (e) => {
    setIsNotShipping(e.target.value);
  };
  
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name:{name}</p>
      
      <input type="number" value={quantity} onChange={handleQuantity}  />
      <p>Quantity:{quantity}</p>

      <textarea type="text" value={address} onChange={handleComment} placeholder="Enter Necessary details"  cols={50} rows={10}/>
      <p>Comment:{address}</p>


      <select name={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">MasterCard</option>
        <option value="RuPay">RuPay</option>
      </select>
      <p>Payment method:{payment}</p>
      <p>
        <input type="radio" value="pickup" checked={shipping === "pickup"}  onChange={handleShipping} />pickup</p>
        <p><input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShipping} />Delivery </p>

        <p>Shipping method:{shipping}</p>
     </div>
  );
};

export default Onchange;
