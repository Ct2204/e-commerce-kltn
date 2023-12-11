import React from "react";
import "./ProductCart.css";

class ProductCart extends React.Component {
  render() {
    const {
      title,
      brand,
      imageSrc,
      imageSrc1,
      price,
      priceSale,
      percentDiscount,
      ...others
    } = this.props;
    return (
      <>
        <div
          className="card box-hover product-card"
          style={{ width: "100%", height: "100%" }}
        >
          <span class="discount-percentage">{percentDiscount}%</span>
          <img src={imageSrc} alt="product" className="style-img-productcart" />
          <img
            src={imageSrc1}
            alt="product"
            className="img-change style-img-productcart"
          ></img>
          <div className="card-body">
            <p className="proloop--vender">
              <a
                className="text-decoration-none text-muted"
                title="Show vendor"
                href="/collections/vendors?q=seiko"
              >
                {brand}
              </a>
            </p>
            <ul className="list-unstyled d-flex">
              <li
                style={{ width: "16px", height: "16px" }}
                className="border bg-success mx-2"
              ></li>
              <li
                style={{ width: "16px", height: "16px" }}
                className="border bg-danger"
              ></li>
              <li
                style={{ width: "16px", height: "16px" }}
                className="border mx-2"
              ></li>
            </ul>

            <div class="wrapper-action-loop price-container">
              <p className="card-title text-center">{title}</p>
              <p class="proloop--price on-sale  ">
                <span class="price ">{price} VND</span>
                <span class="price-del">{priceSale} VND</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCart;
