'use client'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation'
import { FC, useRef, useState, useTransition } from 'react'
import { signIn, signOut } from 'next-auth/react'

interface FormProps {
  isAuthenticated: boolean
}
const Form: FC<FormProps> = ({ isAuthenticated }) => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFetching(true)

    if (inputRef.current) {
      const res = await fetch('/api/guestbook', {
        body: JSON.stringify({ message: inputRef.current.value }),
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
  }
  return (
    <>
      {!isAuthenticated && (
        <p className="text-xl text-zinc-200 mt-4">
          In order to leave a message in the guestbook, you need to authenticate
          yourself. Don't worry, its really straight forward.
        </p>
      )}
      <Button
        className="mt-6"
        onClick={() => (isAuthenticated ? signOut() : signIn('github'))}
      >
        <div className="text-center">
          {isAuthenticated ? 'Sign out' : 'Sign in with GitHub'}
        </div>
      </Button>

      {isAuthenticated && (
        <form onSubmit={onSubmit}>
          <div className="flex w-full max-w-md items-center space-x-4 mt-8">
            <Input ref={inputRef} placeholder="Type your message here" />
            <Button disabled={isMutating} className="w-[150px]" type="submit">
              Send
            </Button>
          </div>
        </form>
      )}
    </>
  )
}

export default Form
