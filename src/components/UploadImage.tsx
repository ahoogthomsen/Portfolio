import { ChangeEvent, FC, useRef, useState } from 'react'
import { useS3Upload } from 'next-s3-upload'
import { IMAGE_TYPE, UploadImageType } from 'pages'

interface IProps {
  imageUrl: string
  removedBgImage: string
  onChange: (type: UploadImageType, value: string) => void
}

const UploadImage: FC<IProps> = ({ imageUrl, removedBgImage, onChange }) => {
  const { uploadToS3 } = useS3Upload()

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files?.length) return

    let file = event.target.files[0]
    let { url: publicUrl } = await uploadToS3(file)
    onChange(IMAGE_TYPE.ImageUrl, publicUrl)

    const options = {
      method: 'POST',
      body: JSON.stringify({ publicUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch('http://localhost:5000/', options)
      .then((response) => response.text())
      .then((data) => {
        onChange(IMAGE_TYPE.RemovedBgImage, data)

        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <input type="file" onChange={handleFileChange} />

      <div className="flex gap-4">
        {imageUrl && (
          <img style={{ maxWidth: '800px', height: 'auto' }} src={imageUrl} />
        )}
        {removedBgImage && (
          <img
            style={{ maxWidth: '800px', height: 'auto' }}
            src={removedBgImage}
          />
        )}
      </div>
    </>
  )
}

export default UploadImage
