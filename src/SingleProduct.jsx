import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "./context/ProductContext";
import PageNavigation from "./Component/PageNavigation";
import MyImage from "./Component/MyImage";
import FormatePrice from "./FormatePrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Component/Star";
import AddTocart from "./Component/AddTocart";


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useGlobalContext();
  console.log(singleProduct);

  const { id } = useParams();
  // console.log(id)

  const {
    id: alis,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">....SingleLoading</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">

          {/* product image */}
          <div className="product-image">
            <MyImage imgs={image} />
          </div>

          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars= {stars} reviews= {reviews} />

            <p className="product-data-price">
              MRP: 
              <del>
              <FormatePrice price={price + 25000} /></del>
            </p>

              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatePrice price={price} />
              </p>

              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Pooja Delivered</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty</p>
                </div>
              </div>

              <div className="product-data-info">
                <p>Available: <span>{stock > 0 ? 'in stock' : 'out of stock'}</span></p>

                <p>ID: <span>{id}</span></p>

                <p>Brand: <span>{company}</span></p>

              </div>
            <hr />

             {stock > 0 && <AddTocart product = {singleProduct}/>}

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.container{
  padding: 5rem 0;
}

.product-image{
  display: flex;
  align-items: center;
}

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.6rem;
  }

  .product-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.6rem;
  }

  .product-data-real-price {
    color: ${({ theme }) => theme.colors.helper};
    font-size: 1.2rem;
  }

  .product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin: 1rem;
  }

  .product-warranty-data {
    text-align: center;
  }

  .warranty-icon {
    font-size: 1.5rem;
  }

  .product-data-info {
p{
margin: .5rem;
}
    span{
    font-weight: 500;
    font-size: 20px;
  }
  } 

  hr{
    max-width: 100%;
    width: 90%;
    border: 2px solid #000;
    color: red;
  }
`;

export default SingleProduct;
