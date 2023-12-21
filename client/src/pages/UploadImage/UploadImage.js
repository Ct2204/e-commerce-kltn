import React, { useEffect, useRef, useState } from 'react'
import './UploadImage.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
const UploadImage = ({ onFileChange }) => {
  const [fileName, setFileName] = useState('No selected file')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]

    if (selectedFile) {
      setFileName(selectedFile.name)

      onFileChange && onFileChange(selectedFile)
    }
  }
  return (
    <main>
      <form
        className="uploadImage-container"
        action=""
        onClick={() => {
          document.querySelector('.input-field').click()
        }}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleFileChange}
        />
        <MdCloudUpload color="#1475cf" size={60} />
      </form>
    </main>
  )
}

export default UploadImage
