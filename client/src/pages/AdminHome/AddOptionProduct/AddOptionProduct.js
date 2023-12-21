import React, { useEffect, useRef, useState } from 'react'
import './AddOptionProduct.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { toast } from 'react-toastify'

import { FaTrash } from 'react-icons/fa'
import { Form } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import UploadImage from '../../UploadImage/UploadImage.js'
import { uploadImageProduct } from '../../../services/productSeller.js'

const AddOptionProduct = ({ productId }) => {
  //code add option

  const [options, setOptions] = useState([])
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [sku, setSku] = useState('')

  const [productItems, setProductItems] = useState([])

  const fileInputRef = useRef(null)
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState('')
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = (event, colorIndex) => {
    const file = event.target.files[0]

    setSelectedFile(file)
    setSelectedFileName(file.name || '')

    // Assuming you want to update the image for the first color option
    const updatedOptions = [...options]
    const updatedImages = [...options[0].images]

    // Assuming that each color will have one image for simplicity
    updatedImages[colorIndex] = {
      url: URL.createObjectURL(file),
      type: 'IMAGE',
    }

    updatedOptions[0] = { ...options[0], images: updatedImages }
    setOptions(updatedOptions)
  }

  const handleFileChange = async (selectedFile, option1Index) => {
    setIsLoading(true)
    const responseData = await uploadImageProduct(selectedFile)
    setIsLoading(false)
    if (responseData.code === 201) {
      setImage(responseData.data[0].url)
      console.log('url', responseData.data[0].url)
      toast.success(responseData.message)
      // Assuming you want to update the image for the first color option
      const updatedOptions = [...options]
      const updatedImages = [...options[0].images]

      if (!updatedImages[option1Index]) {
        updatedImages.push({
          url: responseData.data[0].url,
          type: 'IMAGE',
        })
      } else {
        // Assuming that each color will have one image for simplicity
        updatedImages.push({
          url: responseData.data[0].url,
          type: 'IMAGE',
        })
      }

      updatedOptions[option1Index] = {
        ...options[option1Index],
        images: updatedImages,
      }
      setOptions(updatedOptions)
    } else {
      toast.error(responseData.message)
    }
  }

  const handleInputChange = (event, colorIndex, property) => {
    const { value } = event.target
    if (productItems === undefined) {
      const newProductItem = {
        id: null, // You can set the actual product ID if available
        title: `${options[0].values[colorIndex]} - ${options[0].values[colorIndex]}`, // Adjust the title based on your requirements
        price: property === 'price' ? parseFloat(value) : 0,
        quantity: property === 'quantity' ? parseInt(value) : 0,
        sku: property === 'sku' ? value : '',
        images: options[0].images[colorIndex], // Set the image from the corresponding color index
        optionValueIndex: [colorIndex], // Include other relevant information
      }
      updatedProductItems.push(newProductItem)
      setProductItems(updatedProductItems)
    }

    // Tìm sản phẩm hiện tại trong mảng productItems bằng cách sử dụng includes
    const existingProductItemIndex = productItems.findIndex((item) =>
      item.optionValueIndex.includes(colorIndex)
    )

    // Biến cờ để kiểm tra xem sản phẩm đã được tìm thấy hay không
    let productFound = false

    // Nếu sản phẩm hiện tại được tìm thấy, cập nhật thuộc tính của nó
    const updatedProductItems = productItems.map((item, index) => {
      if (index === existingProductItemIndex) {
        productFound = true
        return {
          ...item,
          [property]:
            property === 'price'
              ? parseFloat(value)
              : property === 'quantity'
              ? parseInt(value)
              : value,
        }
      }
      return item
    })

    // Nếu sản phẩm không được tìm thấy, thêm mới một đối tượng mới
    if (!productFound) {
      const newProductItem = {
        id: null, // You can set the actual product ID if available
        title: `${options[0].values[colorIndex]} - ${options[0].values[colorIndex]}`, // Adjust the title based on your requirements
        price: property === 'price' ? parseFloat(value) : 0,
        quantity: property === 'quantity' ? parseInt(value) : 0,
        sku: property === 'sku' ? value : '',
        images: options[0].images[colorIndex], // Set the image from the corresponding color index
        optionValueIndex: [colorIndex], // Include other relevant information
      }
      updatedProductItems.push(newProductItem)
    }

    setProductItems(updatedProductItems)
  }

  const handleBlur = (event, colorIndex, property) => {
    // Trigger the same logic as handleInputChange on onBlur
    handleInputChange(event, colorIndex, property)
  }

  //product has 2 option
  const handleInputChangeOption2 = (event, colorIndex, sizeIndex, property) => {
    const { value } = event.target
    if (productItems === undefined) {
      const newProductItem = {
        id: null, // You can set the actual product ID if available
        title: `${options[0].values[colorIndex]} - ${options[0].values[colorIndex]}`, // Adjust the title based on your requirements
        price: property === 'price' ? parseFloat(value) : 0,
        quantity: property === 'quantity' ? parseInt(value) : 0,
        sku: property === 'sku' ? value : '',
        images: options[0].images[colorIndex], // Set the image from the corresponding color index
        optionValueIndex: [colorIndex, sizeIndex], // Include other relevant information
      }
      updatedProductItems.push(newProductItem)
      setProductItems(updatedProductItems)
    }

    // Tìm sản phẩm hiện tại trong mảng productItems bằng cách sử dụng includes
    const existingProductItemIndex = productItems.findIndex(
      (item) =>
        JSON.stringify(item.optionValueIndex) ===
        JSON.stringify([colorIndex, sizeIndex])
    )

    console.log('exitsingProduct', existingProductItemIndex)
    // Biến cờ để kiểm tra xem sản phẩm đã được tìm thấy hay không
    let productFound = false

    // Nếu sản phẩm hiện tại được tìm thấy, cập nhật thuộc tính của nó
    const updatedProductItems = productItems.map((item, index) => {
      if (index === existingProductItemIndex) {
        productFound = true
        return {
          ...item,
          [property]:
            property === 'price'
              ? parseFloat(value)
              : property === 'quantity'
              ? parseInt(value)
              : value,
        }
      }
      return item
    })

    // Nếu sản phẩm không được tìm thấy, thêm mới một đối tượng mới
    if (!productFound) {
      const newProductItem = {
        id: null, // You can set the actual product ID if available
        title: `${options[0].values[colorIndex]} - ${options[0].values[colorIndex]}`, // Adjust the title based on your requirements
        price: property === 'price' ? parseFloat(value) : 0,
        quantity: property === 'quantity' ? parseInt(value) : 0,
        sku: property === 'sku' ? value : '',
        images: options[0].images[colorIndex], // Set the image from the corresponding color index
        optionValueIndex: [colorIndex, sizeIndex], // Include other relevant information
      }
      updatedProductItems.push(newProductItem)
    }

    setProductItems(updatedProductItems)
  }

  const handleBlurOption2 = (event, colorIndex, sizeIndex, property) => {
    // Trigger the same logic as handleInputChange on onBlur
    handleInputChange(event, colorIndex, sizeIndex, property)
  }

  //code 2 option

  // console.log(options)
  // console.log('productItems', productItems)

  // const [formData, setFormData] = useState([]);

  const formData = {
    productId: 63,
    sellerId: 1,
    options: options,
    productItems: productItems,
  }

  console.log('data', formData)

  //option1

  const [showOption1, setShowOption1] = useState(false)
  const addOption1 = () => {
    setShowOption1(true)

    // Set an array with a single object
    setOptions([{ name: '', images: [], values: [] }])
  }

  const addOption2 = () => {
    const updatedOptions = [...options]
    const newOption = {
      name: '',
      images: [],
      values: [],
    }

    updatedOptions.push(newOption)

    setOptions(updatedOptions)
    setShowOption2(true)
  }
  console.log(options, 'optionssssss')

  const closeShowOption1 = () => {
    setShowOption1(false)
    const updatedOptions = [...options]

    // Xóa object trong mảng tại index cụ thể
    updatedOptions.splice(0, 1)

    // Cập nhật state với mảng mới
    setOptions(updatedOptions)
  }

  const closeShowOption2 = () => {
    setShowOption2(false)
    const updatedOptions = [...options]

    // Xóa object trong mảng tại index cụ thể
    updatedOptions.splice(1, 1)

    // Cập nhật state với mảng mới
    setOptions(updatedOptions)
  }

  const handleInputNameOption1 = (event) => {
    const { value } = event.target

    setOptions([
      {
        ...options[0],
        name: value,
      },
      ...options.slice(1), // Giữ nguyên các phần tử khác
    ])
  }

  const handleInputNameOption2 = (event) => {
    const { value } = event.target

    setOptions([
      ...options.slice(0, 1), // Giữ nguyên các phần tử từ đầu đến phần tử thứ hai
      {
        ...options[1],
        name: value,
      },
      ...options.slice(2), // Giữ nguyên các phần tử từ phần tử thứ ba trở đi
    ])
  }

  const [inputValuesOption1, setInputValuesOption1] = useState(['']) // State lưu trữ danh sách giá trị

  const handleInputOption1Change = (index, value) => {
    const updatedOptions = [...options]
    const updatedValues = [...options[0].values]

    // Thay đổi giá trị của option[0].values[index]
    updatedValues[index] = value

    // Cập nhật mảng options với giá trị mới
    updatedOptions[0] = {
      ...options[0],
      values: updatedValues,
    }

    setOptions(updatedOptions)

    //them thẻ input

    const newInputValues = [...inputValuesOption1]
    newInputValues[index] = value
    setInputValuesOption1(newInputValues)

    // Kiểm tra xem thẻ input cuối cùng đã được điền hay chưa
    if (index === newInputValues.length - 1 && value !== '') {
      newInputValues.push('') // Thêm một thẻ input mới nếu thẻ cuối cùng đã được điền
      setInputValuesOption1(newInputValues)
    }
  }

  const handleRemoveInputOption1 = (index) => {
    if (inputValuesOption1.length > 1) {
      const updatedOptions = [...options]
      const updatedValues = [...options[0].values]

      // Xóa giá trị tại index
      updatedValues.splice(index, 1)

      // Cập nhật mảng options với giá trị mới
      updatedOptions[0] = {
        ...options[0],
        values: updatedValues,
      }

      setOptions(updatedOptions)

      // xóa thẻ input
      const newInputValues = [...inputValuesOption1]
      newInputValues.splice(index, 1)
      setInputValuesOption1(newInputValues)
    }
  }

  //option 2
  const [showOption2, setShowOption2] = useState(false)
  const [inputValuesOption2, setInputValuesOption2] = useState(['']) // State lưu trữ danh sách giá trị

  const handleInputOption2Change = (index, value) => {
    const updatedOptions = [...options]
    const updatedValues = [...options[1].values]

    // Thay đổi giá trị của option[0].values[index]
    updatedValues[index] = value

    // Cập nhật mảng options với giá trị mới
    updatedOptions[1] = {
      ...options[1],
      values: updatedValues,
    }

    setOptions(updatedOptions)

    //them thẻ input

    const newInputValues = [...inputValuesOption2]
    newInputValues[index] = value
    setInputValuesOption2(newInputValues)

    // Kiểm tra xem thẻ input cuối cùng đã được điền hay chưa
    if (index === newInputValues.length - 1 && value !== '') {
      newInputValues.push('') // Thêm một thẻ input mới nếu thẻ cuối cùng đã được điền
      setInputValuesOption2(newInputValues)
    }
  }

  const handleRemoveInputOption2 = (index) => {
    if (inputValuesOption2.length > 1) {
      const updatedOptions = [...options]
      const updatedValues = [...options[1].values]

      // Xóa giá trị tại index
      updatedValues.splice(index, 1)

      // Cập nhật mảng options với giá trị mới
      updatedOptions[1] = {
        ...options[1],
        values: updatedValues,
      }

      setOptions(updatedOptions)

      //xoa thẻ input
      const newInputValues = [...inputValuesOption2]
      newInputValues.splice(index, 1)
      setInputValuesOption2(newInputValues)
    }
  }

  return (
    <>
      <div>
        <div className="addOption-container">
          {/* set option */}
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="inputPassword" className="lable">
              Phân loại hàng :
            </label>
          </div>
          {showOption1 ? (
            <div>
              <div style={{ marginBottom: '20px', position: 'relative' }}>
                <div className="option1">
                  <div>
                    <label htmlFor="inputPassword" className="option-lable">
                      Nhóm phân loại 1 :
                    </label>

                    <div className="d-flex mx-2">
                      <input
                        type="text"
                        className="form-control mx-2"
                        style={{ width: '300px' }}
                        placeholder="Ví dụ: màu sắc v.v"
                        value={options[0]?.name || ''}
                        onChange={(e) => {
                          handleInputNameOption1(e)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inputPassword" className="option-lable">
                      Nhóm loại hàng :
                    </label>

                    <div
                      className="d-flex mx-2"
                      style={{
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}
                    >
                      {inputValuesOption1.map((input, index) => (
                        <div
                          key={index}
                          className="d-flex mx-2"
                          style={{ margin: '10px' }}
                        >
                          <input
                            type="text"
                            className="form-control"
                            style={{
                              width: '300px',
                              marginRight: '10px',
                            }}
                            placeholder="Ví dụ: Trắng, đỏ, v.v"
                            value={input}
                            onChange={(e) =>
                              handleInputOption1Change(index, e.target.value)
                            }
                          />
                          <span onClick={() => handleRemoveInputOption1(index)}>
                            {' '}
                            <FaTrash
                              style={{
                                cursor: 'pointer',
                              }}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {showOption2 ? (
                <div style={{ position: 'relative' }}>
                  <div className="col-8">
                    <div className="option1">
                      <div>
                        <label htmlFor="inputPassword" className="option-lable">
                          Nhóm phân loại 2 :
                        </label>

                        <div className="d-flex mx-2">
                          <input
                            type="text"
                            className="form-control mx-2"
                            style={{ width: '300px' }}
                            placeholder="Ví dụ: kích thước v.v"
                            value={options[1]?.name || ''}
                            onChange={(e) => {
                              handleInputNameOption2(e)
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="inputPassword" className="option-lable">
                          Nhóm loại hàng :
                        </label>

                        <div
                          className="d-flex mx-2"
                          style={{
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                          }}
                        >
                          {inputValuesOption2.map((input, index) => (
                            <div
                              key={index}
                              className="d-flex mx-2"
                              style={{
                                margin: '5px',
                              }}
                            >
                              <input
                                type="text"
                                className="form-control"
                                style={{
                                  width: '300px',
                                  marginRight: '10px',
                                }}
                                placeholder="Ví dụ: S, M, v.v"
                                value={input}
                                onChange={(e) =>
                                  handleInputOption2Change(
                                    index,
                                    e.target.value
                                  )
                                }
                              />
                              <span
                                onClick={() => handleRemoveInputOption2(index)}
                              >
                                {' '}
                                <FaTrash
                                  style={{
                                    cursor: 'pointer',
                                  }}
                                />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={closeShowOption2}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={addOption2}
                  >
                    Thêm nhóm phân loại 2
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={addOption1}
              >
                Thêm nhóm phân loại
              </button>
            </div>
          )}
        </div>

        {options.length === 0 ? null : (
          <div className="optionDetail-container">
            {/* option have one value */}
            {options.length === 1 ? (
              <div className="mt-5">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th
                        scope="col"
                        style={{
                          width: '200px',
                          textAlign: 'center',
                        }}
                      >
                        {options[0].name || ''}
                      </th>

                      <th
                        scope="col"
                        style={{
                          width: '400px',
                          textAlign: 'center',
                        }}
                      >
                        Tên sản phẩm
                      </th>
                      <th
                        scope="col"
                        style={{
                          width: '100px',
                          textAlign: 'center',
                        }}
                      >
                        Số lượng kho hàng
                      </th>
                      <th
                        scope="col"
                        style={{
                          width: '300px',
                          textAlign: 'center',
                        }}
                      >
                        Giá sản phẩm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {options[0].values &&
                      options[0].values.map((product, idx) => (
                        <tr key={idx}>
                          <td>
                            {isLoading ? (
                              <h1>Đang load</h1>
                            ) : (
                              <div
                                className="d-flex"
                                style={{
                                  width: '200px',
                                  flexDirection: 'column',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <div>
                                  <p>{product}</p>
                                </div>
                                <div className="image-upload-container">
                                  {image ? (
                                    <img
                                      src={image}
                                      width={60}
                                      height={60}
                                      alt="hello"
                                    />
                                  ) : (
                                    <UploadImage
                                      onFileChange={(file) =>
                                        handleFileChange(file, idx)
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            )}
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) =>
                                handleInputChange(e, idx, 'price')
                              }
                              onBlur={(e) => handleBlur(e, idx, 'price')}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              onChange={(e) =>
                                handleInputChange(e, idx, 'quantity')
                              }
                              onBlur={(e) => handleBlur(e, idx, 'quantity')}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputChange(e, idx, 'sku')}
                              onBlur={(e) => handleBlur(e, idx, 'sku')}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-5">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col" className="mx-2">
                        {options[0].name || ''}
                      </th>
                      <th scope="col" className="mx-2">
                        {options[1].name || ''}
                      </th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng kho hàng</th>
                      <th scope="col">Giá sản phẩm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {options[0].values &&
                      options[0].values.map((product, idx) => (
                        <React.Fragment key={idx}>
                          <tr>
                            <td
                              rowSpan={
                                options[1].values &&
                                options[1].values.length + 1
                              }
                            >
                              <div
                                className="d-flex"
                                style={{
                                  width: '120px',
                                }}
                              >
                                <input
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, idx)}
                                />
                                <div>
                                  {options[0].images[idx] && (
                                    <img
                                      src={options[0].images[idx].url}
                                      alt={`Color ${product}`}
                                      style={{
                                        width: '50px',
                                        height: '50px',
                                        marginLeft: '10px',
                                      }}
                                    />
                                  )}
                                  <p className="mt-3">{product}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {options[1].values &&
                            options[1].values.map((size, idxS) => (
                              <tr key={idxS}>
                                <td>
                                  <div style={{ width: '50px' }}>
                                    <p className="mt-3">{size}</p>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      width: '300px',
                                    }}
                                  >
                                    <input
                                      type="text"
                                      className="form-control"
                                      onChange={(e) =>
                                        handleInputChangeOption2(
                                          e,
                                          idx,
                                          idxS,
                                          'price'
                                        )
                                      }
                                      onBlur={(e) =>
                                        handleBlurOption2(e, idx, idxS, 'price')
                                      }
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div style={{ width: '50px' }}>
                                    <input
                                      className="form-control"
                                      type="text"
                                      onChange={(e) =>
                                        handleInputChangeOption2(
                                          e,
                                          idx,
                                          idxS,
                                          'quantity'
                                        )
                                      }
                                      onBlur={(e) =>
                                        handleBlurOption2(
                                          e,
                                          idx,
                                          idxS,
                                          'quantity'
                                        )
                                      }
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div style={{ width: '100px' }}>
                                    <input
                                      type="text"
                                      className="form-control"
                                      onChange={(e) =>
                                        handleInputChangeOption2(
                                          e,
                                          idx,
                                          idxS,
                                          'sku'
                                        )
                                      }
                                      onBlur={(e) =>
                                        handleBlurOption2(e, idx, idxS, 'sku')
                                      }
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </React.Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default AddOptionProduct
