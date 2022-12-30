import React from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";

const Products = ({ id, image, name, price, category }) => {
  console.log(price, category, name)
  return (
    <NavLink to={`/singleProduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} />
          {/* <figcaption className="caption">{category}</figcaption> */}
        </figure>

        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data-price">{<FormatePrice price={price} />}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Products;
