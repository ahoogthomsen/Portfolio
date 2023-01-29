'use client'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation'
import { FC, useRef, useState, useTransition } from 'react'

interface IProps {}

const Form: FC<IProps> = ({}) => {
  const router = useRouter()
  const inputRef = useRef(null)
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const onSubmit = async () => {
    setIsFetching(true)
    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({ message: 'input text' }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    setIsFetching(false)
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex w-full max-w-md items-center space-x-4 mt-8">
        <Input ref={inputRef} placeholder="Type your message here" />
        <Button type="submit">Send</Button>
      </div>
    </form>
  )
}

export default Form
