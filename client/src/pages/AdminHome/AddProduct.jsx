import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  getProductDetail,
  getProductsByCategory,
} from "../../services/product.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input.jsx";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/reducers/auth.js";
import { toast } from "react-toastify";

import {
  deleteProductOfSellerById,
  getDescriptionBySeller,
  getPaging,
  getProductOfSellerById,
  postDescriptionBySeller,
  postFileImage,
  postProductOfSeller,
  updateProductOfSeller,
} from "../../services/productSeller.js";

import { logoutAsync } from "../../store/reducers/auth.js";

import { Accordion, Pagination } from "react-bootstrap";

const AddProuct = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [saveProducts, setSaveProducts] = useState([]);
  const [productId, setProductId] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState(10);
  const [pagingItems, setPagingItems] = useState(false);
  const [description, setDescription] = useState("");
  const [activeKey, setActiveKey] = useState("0");
  const [descriptionById, setDescriptionById] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  

  const showModalHandler = async (e, id) => {
    if (e) e.preventDefault();
    setProductId(id);
    if (id > 0) {
      const responseData = await getProductOfSellerById(id);
      setProduct(responseData.data);
      handleShow();
    } else {
      let product = {
        sellerId: "1",
        sku: "1",
        categoryId: "1",
        title: "",
        price: "",
        priceSales: "",
        percentDiscount: "",
      };
      // Kiểm tra nếu id > 0, thêm productId vào đối tượng setProduct
      if (id > 0) {
        product.productId = id;
      }

      // Sử dụng đối tượng setProduct
      setProduct(product);
      handleShow();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      categoryId: categoryId,
    }));
  };

  const handleAddProduct = async (e) => {
    try {
      setIsLoading(true);
      const responseData = await postProductOfSeller(product);
      if (responseData) {
        const fileImage = {
          productId: responseData.data.productId,
          sellerId: 1,
          options: [
            {
              name: "Color",
              images: [
                [
                  {
                    url: inputValue,
                    type: "IMAGE",
                  },
                ],
                [
                  {
                    url: inputValue,
                    type: "IMAGE",
                  },
                ],
              ],
              values: ["Red", "Yellow"],
            },
          ],
          productItems: [],
        };
        const response = await postFileImage(fileImage);

        const descriptionData = {
          productId: responseData.data.productId,
          sellerId: 1,
          description: description,
          images: [
            {
              url: "description1.jpg",
              type: "IMAGE",
            },
            {
              url: "description2.jpg",
              type: "IMAGE",
            },
            {
              url: "description3.mp4",
              type: "VIDEO",
            },
            {
              url: "description4.mp4",
              type: "VIDEO",
            },
            {
              url: "description5.jpg",
              type: "IMAGE",
            },
            {
              url: "description6.jpg",
              type: "IMAGE",
            },
          ],
        };
        const responseDescription = await postDescriptionBySeller(
          descriptionData
        );
        console.log(responseDescription);
        
        handleClose();
        toast.success("Add sucessful.");
      } else {
        // Xử lý khi request thất bại hoặc có lỗi
        toast.error("Delete failed.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleAddProduct: ", err);
      setIsLoading(false);
    }
  };

  const handleUpdateProduct = async (e) => {
    try {
      setIsLoading(true);
      console.log(product);
      const responseData = await updateProductOfSeller(product);
      if (responseData) {
        // handleGetListProduct();
        handleClose();
        toast.success("Update Successful.");
      } else {
        toast.error("Update Failed.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleUpdateProduct: ", err);
      setIsLoading(false);
    }
  };
  const handleDeleteProduct = async (id) => {
    try {
      setIsLoading(true);
      const responseData = await deleteProductOfSellerById(id);
      if (responseData) {
        // handleGetListProduct();
        toast.warn("Delete Successful.");
      } else {
        toast.error("Delete Failed.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleUpdateProduct: ", err);
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    // Lấy giá trị từ thẻ input khi có sự thay đổi
    const value = event.target.value;
    // Cập nhật state với giá trị mới
    setInputValue(value);
  };

  const handleChangePageLength = (e) => {
    setPage(1);
    setPageLength(e.target.value);
  };

  const handleDescriptionChange = (event) => {
    // Lấy giá trị từ textarea
    const newDescription = event.target.value;

    // Lưu giá trị vào state
    setDescription(newDescription);
  };

  const handleAccordionClick = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const handleGetDescription = async (id) => {
    try {
      setIsLoading(true);
      const responseData = await getDescriptionBySeller(id);
      if (responseData) {
        console.log(responseData);
        setDescriptionById(responseData.data.description);
      } else {
        toast.error("Delete Failed.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleUpdateProduct: ", err);
      setIsLoading(false);
    }
  };

  console.log(description);

  const userInfor = useSelector((state) => state.auth.userInfo);
  console.log("hello", userInfor.user_id);

  return (
    <div className="d-flex row my-override-class">
      
                          <form>
                            <div
                              className="mb-3 row"
                              style={{ width: "340px" }}
                            >
                              <label
                                htmlFor="inputPassword"
                                className="col-4 col-form-label"
                              >
                                Title
                              </label>
                              <div className="col-8">
                                <input
                                  type="text"
                                  name="title"
                                  value={product.title}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div
                              className="mb-3 row"
                              style={{ width: "340px" }}
                            >
                              <label
                                htmlFor="inputPassword"
                                className="col-4 col-form-label"
                              >
                                Price
                              </label>
                              <div className="col-8">
                                <input
                                  type="number"
                                  name="price"
                                  value={product.price}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div
                              className="mb-3 row"
                              style={{ width: "340px" }}
                            >
                              <label
                                htmlFor="inputPassword"
                                className="col-4 col-form-label"
                              >
                                PriceSales
                              </label>
                              <div className="col-8">
                                <input
                                  type="number"
                                  name="priceSales"
                                  value={product.priceSales}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div
                              className="mb-3 row"
                              style={{ width: "340px" }}
                            >
                              <label
                                htmlFor="inputPassword"
                                className="col-4 col-form-label"
                              >
                                PercentSale
                              </label>
                              <div className="col-8">
                                <input
                                  type="number"
                                  name="percentDiscount"
                                  value={product.percentDiscount}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="d-flex mt-3">
                                <label
                                  htmlFor="inputPassword"
                                  className="col-4 col-form-label"
                                >
                                  Category
                                </label>
                                <div className="form-check mt-1 mx-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryId"
                                    id="radioOption1"
                                    value="1"
                                    checked={product.categoryId === "1"}
                                    onChange={() => handleCategoryChange("1")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="radioOption1"
                                  >
                                    Đồng hồ
                                  </label>
                                </div>
                                <div className="form-check mt-1 mx-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryId"
                                    id="radioOption2"
                                    value="2"
                                    checked={product.categoryId === "2"}
                                    onChange={() => handleCategoryChange("2")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="radioOption2"
                                  >
                                    Nhẫn cưới
                                  </label>
                                </div>
                                <div className="form-check mt-1 mx-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryId"
                                    id="radioOption2"
                                    value="2"
                                    checked={product.categoryId === "3"}
                                    onChange={() => handleCategoryChange("3")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="radioOption2"
                                  >
                                    Kính mát
                                  </label>
                                </div>
                              </div>
                              <div
                                className="mb-3 row"
                                style={{ width: "340px" }}
                              >
                                <label
                                  htmlFor="inputPassword"
                                  className="col-4 col-form-label"
                                >
                                  Description
                                </label>
                                <div className="col-8">
                                  <textarea
                                    className="form-control mx-2"
                                    style={{
                                      height: "100px",
                                      width: "202.66px",
                                    }}
                                    onChange={handleDescriptionChange}
                                  ></textarea>
                                </div>
                              </div>
                              {productId > 0 ? (
                                <></>
                              ) : (
                                <div
                                  className="d-flex mt-3"
                                  style={{ width: "340px" }}
                                >
                                  <label
                                    htmlFor="inputPassword"
                                    className="col-4 col-form-label"
                                  >
                                    Enter Url
                                  </label>
                                  <div className="col-8">
                                    <input
                                      type="text"
                                      value={inputValue}
                                      onChange={handleInputChange}
                                      className="form-control mx-2"
                                      style={{ width: "202.66px" }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </form>
                       
                        
    </div>
  );
};

export default AddProuct;
