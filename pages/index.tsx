import { useReducer } from 'react'
import UploadImage from '@components/UploadImage'

export enum IMAGE_TYPE {
  ImageUrl = 'ImageUrl',
  RemovedBgImage = 'RemovedBgImage',
}

export type UploadImageType = IMAGE_TYPE.ImageUrl | IMAGE_TYPE.RemovedBgImage

interface State {
  imageUrl: string
  removedBgImage: string
}

interface Action {
  type: UploadImageType
  payload: string
}

const initialState = {
  imageUrl: '',
  removedBgImage: '',
}

const imageReducer = (state: State, action: Action) => {
  switch (action.type) {
    case IMAGE_TYPE.ImageUrl:
      return { ...state, imageUrl: action.payload }
    case IMAGE_TYPE.RemovedBgImage:
      return { ...state, removedBgImage: action.payload }
    default:
      return state
  }
}

export default function UploadComponent() {
  const [state, dispatch] = useReducer(imageReducer, initialState)
  const { imageUrl, removedBgImage } = state

  const onChange = (type: UploadImageType, value: string) => {
    dispatch({ type: type, payload: value })
  }

  return (
    <div>
      <UploadImage
        imageUrl={imageUrl}
        removedBgImage={removedBgImage}
        onChange={onChange}
      />
    </div>
  )
}
