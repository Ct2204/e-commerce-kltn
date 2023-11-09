import React from "react";

class ProductCart extends React.Component {

  render() {
    const { title, brand, imageSrc, imageSrc1, price, ...others } = this.props;
    return (
      <>
        <div
          className="card box-hover"
          style={{ width: "100%", height: "100%" }}
        >
          <img src={imageSrc} alt="" />
          <img src={imageSrc1} alt="" className="img-change"></img>
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
            <p className="card-title text-center">{title}</p>
            <div class="wrapper-action-loop ">
              <p class="proloop--price on-sale  ">
                <span class="price">1,020,000₫</span>
                <span class="price-del">1,440,000₫</span>
                <span class="pro-percent">-29%</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCart;
