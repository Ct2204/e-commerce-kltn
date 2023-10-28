import React from 'react';


class ProductCart extends React.Component{
    render(){
        const { title, brand, imageSrc, imageSrc1, price, ...others } = this.props;
        return(
            <>
            <div
                  className="card box-hover"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={imageSrc}
                    alt=""
                  />
                  <img
                    src={imageSrc1}
                    alt=""
                    className="img-change"
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
                    <p className="card-title">
                      {title}
                    </p>
                    <a
                      href="//zalo.me/0901866099"
                      className="btn-proloop btn-proloop-contact"
                    >
                      {price}
                    </a>
                  </div>
                </div>
            </>
        )
    }
}

export default ProductCart;