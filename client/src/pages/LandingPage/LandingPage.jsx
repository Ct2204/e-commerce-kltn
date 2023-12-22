import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../../services/product";
import ProductCart from "../../components/ProductCart";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productByCategoryDongHo, setProductByCategoryDongHo] = useState([]);

  const navigate = useNavigate();
  const initialItemCount = 8;
  const dataArrayForDongHo = productByCategoryDongHo; // Điền mảng của bạn vào đây
  const [visibleItemCountForDongHo, setVisibleItemCountForDongHo] =
    useState(initialItemCount);
  const additionalItemCountForDongHo = Math.max(
    0,
    productByCategoryDongHo.length - visibleItemCountForDongHo
  );

  const handleShowMoreForDongHo = () => {
    setVisibleItemCountForDongHo(
      visibleItemCountForDongHo + additionalItemCountForDongHo
    );
  };

  const handleProductsByCategoryDongHo = async () => {
    setIsLoading(true);
    const responseData = await getProductsByCategory(1);
    setProductByCategoryDongHo(responseData.listProducts);
    setIsLoading(false);
  };

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const changePageHandler = async (e, id) => {
    navigate(`productdetail?productId=${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleProductsByCategoryDongHo();
  }, []);
  return (
    <>
      <div class="" style={{ fontFamily: "Tinos, sans-serif" }}>
        <picture>
          <img
            style={{ width: "100%", height: "100%" }}
            src="//theme.hstatic.net/200000593853/1001115480/14/ldpage01_bannertop_image.jpg?v=45"
            alt=""
          />
        </picture>
      </div>
      <div class="mt-3">
        <div class="text-center">
          <picture>
            <img
              src="//theme.hstatic.net/200000593853/1001115480/14/ldpage01_bannerbottom_image.jpg?v=45"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="mt-5">
        <div class="text-center">
          <h1 style={{ color: "red" }}>Ưu đãi đầu năm, Săn Deal cực bốc</h1>
        </div>
      </div>
      <div style={{ fontFamily: "Tinos, sans-serif" }}>
        <div>
          <p className="text-center fw-bold">ƯU ĐÃI KẾT THÚC</p>
        </div>
        <div className=" d-flex justify-content-center">
          <div style={{ width: "79px", height: "92px" }} className="bg-danger ">
            <div className=" d-flex justify-content-center">
              <div
                style={{ width: "51px", height: "48px" }}
                className="bg-white mt-2"
              >
                <div className="text-center">
                  <h3 className="text-danger mt-2">00</h3>
                </div>
              </div>
            </div>

            <div
              className="text-center text-white mt-2 fw-bold"
              style={{ fontSize: "13px" }}
            >
              Ngày
            </div>
          </div>
          <div
            style={{ width: "79px", height: "92px" }}
            className="bg-danger mx-2"
          >
            <div className=" d-flex justify-content-center">
              <div
                style={{ width: "51px", height: "48px" }}
                className="bg-white mt-2"
              >
                <div className="text-center">
                  <h3 className="text-danger mt-2">00</h3>
                </div>
              </div>
            </div>

            <div
              className="text-center text-white mt-2 fw-bold"
              style={{ fontSize: "13px" }}
            >
              Giờ
            </div>
          </div>
          <div style={{ width: "79px", height: "92px" }} className="bg-danger ">
            <div className=" d-flex justify-content-center">
              <div
                style={{ width: "51px", height: "48px" }}
                className="bg-white mt-2"
              >
                <div className="text-center">
                  <h3 className="text-danger mt-2">00</h3>
                </div>
              </div>
            </div>

            <div
              className="text-center text-white mt-2 fw-bold"
              style={{ fontSize: "13px" }}
            >
              Phút
            </div>
          </div>
          <div
            style={{ width: "79px", height: "92px" }}
            className="bg-danger mx-2"
          >
            <div className=" d-flex justify-content-center">
              <div
                style={{ width: "51px", height: "48px" }}
                className="bg-white mt-2"
              >
                <div className="text-center">
                  <h3 className="text-danger mt-2">00</h3>
                </div>
              </div>
            </div>

            <div
              className="text-center text-white mt-2 fw-bold"
              style={{ fontSize: "13px" }}
            >
              Giây
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <h1>Đang load dữ liệu</h1>
        ) : (
          <div classname="container-fuild">
            <h3
              className="text-center my-5"
              style={{ fontSize: "30px", padding: "20px" }}
            >
              <a>Sản Phẩm</a>
            </h3>
            <div className="row mx-5 ">
              {productByCategoryDongHo
                .slice(0, visibleItemCountForDongHo)
                .map((aProducts, idx) => (
                  <div
                    key={idx}
                    className="col-3 product-card"
                    onClick={(e) => changePageHandler(e, aProducts.id)}
                  >
                    <ProductCart
                      title={aProducts.title}
                      imageSrc={aProducts.listMediaProduct[0].url}
                      imageSrc1={aProducts.listMediaProduct[1].url}
                      price={numberWithCommas(aProducts.priceSales)}
                      priceSale={numberWithCommas(aProducts.price)}
                      percentDiscount={aProducts.percentDiscount}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
