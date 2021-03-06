import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate()
  const { _id,img, name, description, availableQuantity,price,minimumOrderQuantity } = product;
  const [des, setDes] = useState(false);
  let count;
  if (!des) {
    count = 100;
  }
  const handlePurchase = (id) => {
     navigate(`/product/${id}`)
  }
  return (
    <div data-aos="zoom-in"
    data-aos-duration="600"
    data-aos-delay="50"
    className="card bg-base-100 shadow-xl rounded-sm lg:w-full md:w-96">
      <div className="mx-auto px-3 min-h-fit md:mx-auto">
        <img src={img} alt={name} className="w-96" />
      </div>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <p>
          {description?.slice(0, count)}{" "}
          <span
            onClick={() => setDes(!des)}
            className="font-bold cursor-pointer"
          >
            {des ? "less" : "See More"}
          </span>
        </p>
        <div>
          <p className="text-xl">Price: ${price}</p>
          <p>Available Quantity: <span className="font-semibold">{availableQuantity}/p</span></p>
          <p>Minimum Purchase: <span className="font-semibold">{minimumOrderQuantity}/p</span></p>
        </div>
        <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Purchase</button>
      </div>
    </div>
  );
};

export default Product;
