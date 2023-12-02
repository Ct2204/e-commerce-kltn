import React, { useEffect, useState } from "react";
import "./AdminHome.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  getProductDetail,
  getProductsByCategory,
} from "../../services/product";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-router-dom";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../store/reducers/auth";
import {
  getProductOfSellerById,
  postProductOfSeller,
} from "../../services/productSeller";
import { logoutAsync } from "../../store/reducers/auth.js";

const AdminHome = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [productByCategoryNhan, setProductByCategoryNhan] = useState([]);
  const [productByCategoryDongHo, setProductByCategoryDongHo] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [saveProducts, setSaveProducts] = useState([]);

  const [productId, setProductId] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProductsByCategoryNhan = async () => {
    setIsLoading(true);
    const responseData = await getProductsByCategory(2);
    setProductByCategoryNhan(responseData.listProducts);
    setIsLoading(false);
  };
  const handleProductsByCategoryDongHo = async () => {
    setIsLoading(true);
    const responseData = await getProductsByCategory(1);
    setProductByCategoryDongHo(responseData.listProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    handleProductsByCategoryDongHo();
  }, []);

  useEffect(() => {
    handleProductsByCategoryNhan();
  }, []);

  const showModalHandler = async (e, id) => {
    if (e) e.preventDefault();
    if (id > 0) {
      const responseData = await getProductDetail(id);
      setProduct(responseData);
      handleShow();
    } else {
      setProduct({
        sellerId: "1",
        sku: "1",
        title: "",
        price: "",
        priceSales: "",
        percentDiscount: "",
      });
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

  const handleAddProduct = async (e) => {
    try {
      setIsLoading(true);
      const responseData = await postProductOfSeller(product);
      if (responseData) {
        setProductId(responseData.data.productId);
      } else {
        // Xử lý khi request thất bại hoặc có lỗi
        console.error("Failed to add product.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleAddProduct: ", err);
      setIsLoading(false);
    }
  };

  const getProductSellerById = async (e) => {
    try {
      setIsLoading(true);
      const responseData = await getProductOfSellerById(productId);
      if (responseData) {
        setProducts((prevProducts) => {
          return [
            ...(Array.isArray(prevProducts) ? prevProducts : []),
            responseData.data,
          ];
        });
      } else {
        // Xử lý khi request thất bại hoặc có lỗi
        console.error("Failed to add product.");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in handleAddProduct: ", err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductSellerById();
  }, [productId]);
  console.log(products);

  // Chuyển đổi mảng thành chuỗi JSON
  const productsString = JSON.stringify(products);

  // Lưu chuỗi JSON vào localStorage với một key cụ thể, ví dụ 'products'
  localStorage.setItem("products", productsString);

  const userInfor = useSelector((state) => state.auth.userInfo);
  console.log("hello",userInfor.user_id);

  return (
    <div className="d-flex row my-override-class">
      <div className="navbar-parent col-2 p-0" style={{ height: "100vh" }}>
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            class="sidebar-brand text-decoration-none d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div class="sidebar-brand-icon text-white rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3 text-white">SB Admin</div>
          </a>

          <hr class="sidebar-divider my-0" />

          <li class="nav-item">
            <a class="nav-link text-white" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt mx-3"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr class="sidebar-divider" />

          <div class="sidebar-heading text-white mx-3">Interface</div>

          <li class="nav-item text-white">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog mx-3"></i>
              <span>Components</span>
            </a>
          </li>

          <li class="nav-item text-white">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-fw fa-wrench mx-3"></i>
              <span>Utilities</span>
            </a>
          </li>

          <hr class="sidebar-divider" />

          <div class="sidebar-heading text-white mx-3">Addons</div>

          <li class="nav-item text-white">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder mx-3"></i>
              <span>Pages</span>
            </a>
          </li>

          <li class="nav-item text-white">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area mx-3"></i>
              <span>Charts</span>
            </a>
          </li>

          <li class="nav-item text-white">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table mx-3"></i>
              <span>Tables</span>
            </a>
          </li>

          <hr class="sidebar-divider d-none d-md-block" />

          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

          <div class="sidebar-card d-none d-lg-flex">
            <img
              class="sidebar-card-illustration mb-2"
              src="img/undraw_rocket.svg"
              alt="..."
            />
            <p class="text-center mb-2">
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <a
              class="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </a>
          </div>
        </ul>
      </div>
      <div className="navbar-child col-10 p-0">
        <nav className="navbar navbar-padding navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <ul class="navbar-nav navbar-ul ml-auto">
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small text-start"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-bell fa-fw"></i>

                <span class="badge badge-danger badge-counter">3+</span>
              </a>

              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 class="dropdown-header">Alerts Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </a>
                <a
                  class="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>
              </div>
            </li>

            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-envelope fa-fw"></i>

                <span class="badge badge-danger badge-counter">7</span>
              </a>

              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 class="dropdown-header">Message Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt="..."
                    />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt="..."
                    />
                    <div class="status-indicator"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt="..."
                    />
                    <div class="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div class="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a
                  class="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                  Admin Account
                </span>
                <img
                  onClick={() => dispatch(logoutAsync())}
                  class="img-profile rounded-circle"
                  src="#"
                />
              </a>

              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div class="container-fluid">
          <h1 class="h3 mb-2 text-gray-800">Tables</h1>
          <p class="mb-4">
            DataTables is a third party plugin that is used to generate the demo
            table below. For more information about DataTables, please visit the{" "}
            <a target="_blank" href="https://datatables.net" rel="noreferrer">
              official DataTables documentation
            </a>
            .
          </p>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <div
                  id="dataTable_wrapper"
                  class="dataTables_wrapper dt-bootstrap4"
                >
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="dataTables_length" id="dataTable_length">
                        <label className="">
                          Show{" "}
                          <select
                            name="dataTable_length"
                            aria-controls="dataTable"
                            class="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex ">
                      <div id="dataTable_filter" class="dataTables_filter">
                        <label className="d-flex">
                          Search:
                          <input
                            type="search"
                            class="form-control form-control-sm"
                            placeholder=""
                            aria-controls="dataTable"
                          />
                        </label>
                      </div>
                      <div className="">
                        <button onClick={(e) => showModalHandler(e, 0)}>
                          <i class="fa-solid fa-plus"></i>
                          Add
                        </button>
                      </div>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            {product.id > 0 ? "Update" : "New"} Product
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>
                            <div class="mb-3 row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                Title
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  name="title"
                                  value={product.title}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div class="mb-3 row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                Price
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="number"
                                  name="price"
                                  value={product.price}
                                  onChange={handleChange}
                                  class="form-control"
                                />
                              </div>
                            </div>
                            <div class="mb-3 row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                PriceSales
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="number"
                                  name="priceSales"
                                  value={product.priceSales}
                                  onChange={handleChange}
                                  class="form-control"
                                />
                              </div>
                            </div>
                            <div class="mb-3 row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                PercentPriceSale
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="number"
                                  name="percentDiscount"
                                  value={product.percentDiscount}
                                  onChange={handleChange}
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={(e) => handleAddProduct()}
                          >
                            Understood
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <table
                        class="table table-bordered dataTable"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                        role="grid"
                        aria-describedby="dataTable_info"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr role="row">
                            <th>Id</th>
                            <th
                              class="sorting sorting_asc"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "179px" }}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                            >
                              Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "274px" }}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Position
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "129px" }}
                              aria-label="Office: activate to sort column ascending"
                            >
                              Office
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "129px" }}
                              aria-label="Office: activate to sort column ascending"
                            >
                              Option
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "59px" }}
                              aria-label="Age: activate to sort column ascending"
                            >
                              Age
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "122px" }}
                              aria-label="Start date: activate to sort column ascending"
                            >
                              Start date
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="dataTable"
                              rowspan="1"
                              colspan="1"
                              style={{ width: "109px" }}
                              aria-label="Salary: activate to sort column ascending"
                            >
                              Salary
                            </th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th rowspan="1" colspan="1">
                              Name
                            </th>
                            <th rowspan="1" colspan="1">
                              Position
                            </th>
                            <th rowspan="1" colspan="1">
                              Office
                            </th>
                            <th rowspan="1" colspan="1">
                              Option
                            </th>
                            <th rowspan="1" colspan="1">
                              Age
                            </th>
                            <th rowspan="1" colspan="1">
                              Start date
                            </th>
                            <th rowspan="1" colspan="1">
                              Salary
                            </th>
                          </tr>
                        </tfoot>
                        {isLoading ? (
                          <h1>Đang load dữ liệu</h1>
                        ) : (
                          <tbody>
                            {products.map((aProducts, idx) => (
                              <tr key={idx} class="odd">
                                <td></td>
                                <td class="sorting_1">{aProducts.title}</td>
                                <td>
                                  <img
                                    style={{ height: "50px", width: "50px" }}
                                    src=""
                                  />
                                </td>
                                <td>Thien</td>
                                <td>{aProducts.price}</td>
                                <td>{aProducts.percentDiscount}%</td>
                                <td>{aProducts.priceSales}</td>
                                <td className="d-flex">
                                  <button
                                    onClick={(e) =>
                                      showModalHandler(e, aProducts.id)
                                    }
                                  >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                  </button>
                                  <button>
                                    <i class="fa-solid fa-trash-can"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                            {productByCategoryDongHo.map((aProducts, idx) => (
                              <tr key={idx} class="odd">
                                <td>{aProducts.id}</td>
                                <td class="sorting_1">{aProducts.title}</td>
                                <td>
                                  <img
                                    style={{ height: "50px", width: "50px" }}
                                    src={aProducts.listMediaProduct[0].url}
                                  />
                                </td>
                                <td>{aProducts.price}</td>
                                <td>{aProducts.percentDiscount}%</td>
                                <td>{aProducts.priceSales}</td>
                                <td className="d-flex">
                                  <button
                                    onClick={(e) =>
                                      showModalHandler(e, aProducts.id)
                                    }
                                  >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                  </button>
                                  <button>
                                    <i class="fa-solid fa-trash-can"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="dataTable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="dataTable_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="dataTable_previous"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                            >
                              2
                            </a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="3"
                              tabindex="0"
                              class="page-link"
                            >
                              3
                            </a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="4"
                              tabindex="0"
                              class="page-link"
                            >
                              4
                            </a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="5"
                              tabindex="0"
                              class="page-link"
                            >
                              5
                            </a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="6"
                              tabindex="0"
                              class="page-link"
                            >
                              6
                            </a>
                          </li>
                          <li
                            class="paginate_button page-item next"
                            id="dataTable_next"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx="7"
                              tabindex="0"
                              class="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
