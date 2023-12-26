import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { toast } from 'react-toastify'

import {
  postDescriptionBySeller,
  postProductOfSeller,
} from '../../services/productSeller'

import AddOptionProduct from './AddOptionProduct/AddOptionProduct.js'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState({})

  const [productId, setProductId] = useState(0)

  const [inputValue, setInputValue] = useState('')

  const [description, setDescription] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      sellerId: 1,
      ...prevProduct,
      [name]: value,
    }))
  }

  const handleCategoryChange = (categoryId) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      categoryId: categoryId,
    }))
  }

  const handleAddProduct = async () => {
    try {
      console.log('product', product)

      const responseData = await postProductOfSeller(product)
      console.log(responseData)

      if (responseData.code === 201) {
        setProductId(responseData.data.productId)
        toast.success('Add sucessful.')
      } else {
        toast.error(responseData.message)
      }
    } catch (err) {
      console.error('Error in handleAddProduct: ', err)
    }
  }

  console.log('Productid', productId)

  const handleInputChange = (event) => {
    // Lấy giá trị từ thẻ input khi có sự thay đổi
    const value = event.target.value
    // Cập nhật state với giá trị mới
    setInputValue(value)
  }

  const handleDescriptionChange = (event) => {
    // Lấy giá trị từ textarea
    const newDescription = event.target.value

    // Lưu giá trị vào state
    setDescription(newDescription)
  }

  const handleToCreateDescription = async () => {
    let descriptionProduct = {
      productId: productId,
      sellerId: 1,
      description: description,
      images: [],
    }
    console.log(descriptionProduct, 'proddctDescription')
    const responseData = await postDescriptionBySeller(descriptionProduct)
    console.log(responseData)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'hsl(0,0%,95%)',
          padding: '50px',
          margin: '0',
          position: 'relative',
        }}
      >
        <div className="addProduct-container">
          <Link to="/dashboard">
            <button
              type="button"
              class="btn btn-danger"
              style={{ position: 'absolute', top: '110px', right: '130px' }}
            >
              <span>X</span>
            </button>
          </Link>

          <div className="createProduct-container">
            <h2 style={{ marginBottom: '10px' }}>Thông tin cơ bản</h2>
            <div
              style={{
                padding: '40px 110px',
              }}
            >
              <div
                className="mb-3 row"
                style={{
                  width: '490px',
                  paddingBottom: '20px',
                }}
              >
                <label htmlFor="inputPassword" className="col-4 lable">
                  Tên sản phẩm :
                </label>
                <div className="col-8">
                  <input
                    style={{ width: '500px' }}
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
                style={{
                  width: '490px',
                  paddingBottom: '20px',
                }}
              >
                <label htmlFor="inputPassword" className="col-4 lable">
                  Sku :
                </label>
                <div className="col-8">
                  <input
                    style={{ width: '500px' }}
                    type="text"
                    name="sku"
                    value={product.sku}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div
                className="mb-3 row"
                style={{
                  width: '490px',
                  paddingBottom: '20px',
                }}
              >
                <label htmlFor="inputPassword" className="col-4 lable">
                  Giá sản phẩm :
                </label>
                <div className="col-8">
                  <input
                    style={{ width: '500px' }}
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
                style={{
                  width: '490px',
                  paddingBottom: '20px',
                }}
              >
                <label htmlFor="inputPassword" className="col-4 lable">
                  Giá khuyến mại :
                </label>
                <div className="col-8">
                  <input
                    style={{ width: '500px' }}
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
                style={{
                  width: '490px',
                  paddingBottom: '20px',
                }}
              >
                <label htmlFor="inputPassword" className="col-4 lable">
                  Phần trăm khuyến mại :
                </label>
                <div className="col-8">
                  <input
                    style={{ width: '500px' }}
                    type="number"
                    name="percentDiscount"
                    value={product.percentDiscount}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="d-flex mt-3" style={{ paddingTop: '20px' }}>
                  <label htmlFor="inputPassword" className="col-4 lable">
                    Ngành hàng :
                  </label>
                  <div className="form-check mt-1 mx-2 d-flex">
                    <input
                      className="form-check-input"
                      style={{ marginRight: '20px' }}
                      type="radio"
                      name="categoryId"
                      id="radioOption1"
                      value="1"
                      checked={product.categoryId === 1}
                      onChange={() => handleCategoryChange(1)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioOption1"
                      style={{
                        fontSize: '17px',
                        fontWeight: '600',
                      }}
                    >
                      Đồng hồ
                    </label>
                  </div>
                  <div className="form-check mt-1 mx-2 d-flex">
                    <input
                      style={{ marginRight: '20px' }}
                      className="form-check-input"
                      type="radio"
                      name="categoryId"
                      id="radioOption2"
                      value="2"
                      checked={product.categoryId === 2}
                      onChange={() => handleCategoryChange(2)}
                    />
                    <label
                      className="form-check-label "
                      style={{
                        fontSize: '17px',
                        fontWeight: '600',
                      }}
                      htmlFor="radioOption2"
                    >
                      Nhẫn cưới
                    </label>
                  </div>
                  <div className="form-check mt-1 mx-2 d-flex">
                    <input
                      style={{ marginRight: '20px' }}
                      className="form-check-input"
                      type="radio"
                      name="categoryId"
                      id="radioOption2"
                      value="2"
                      checked={product.categoryId === 3}
                      onChange={() => handleCategoryChange(3)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioOption2"
                      style={{
                        fontSize: '17px',
                        fontWeight: '600',
                      }}
                    >
                      Kính mát
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              style={{
                height: '50px',
                marginLeft: '700px',
                fontSize: '20px',
                fontWeight: '600',
              }}
              onClick={handleAddProduct}
            >
              Thêm sản phẩm
            </button>
          </div>

          <div></div>
          {/* description */}
          <div className="description-container">
            <h2 style={{ marginBottom: '0px' }}>Thêm mô tả sản phẩm</h2>
            <div style={{ padding: '40px 110px' }}>
              <div className="col-8">
                <textarea
                  className="form-control mx-2"
                  style={{
                    height: '200px',
                    width: '760px',
                  }}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                height: '50px',
                width: '180px',
                marginLeft: '700px',
                fontSize: '20px',
                fontWeight: '600',
              }}
              onClick={handleToCreateDescription}
            >
              Thêm mô tả
            </button>
          </div>

          <div className="option-container">
            <h2 style={{ marginBottom: '50px' }}>Thông tin bán hàng</h2>
            <AddOptionProduct productId={productId} />
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct
