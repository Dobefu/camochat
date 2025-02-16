import { useCallback, useEffect, useRef, useState } from 'react'
import { Message } from 'src/types/message'
import Messages from './messages'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const focusInput = useCallback(() => inputRef.current.focus(), [])
  const onFocusInput = useCallback(() => setIsFocused(true), [])
  const onBlurInput = useCallback(() => setIsFocused(false), [])
  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const message = inputRef.current.value

      setMessages([
        ...messages,
        { author: 'AUTHOR', message, timestamp: new Date().getTime() },
      ])

      inputRef.current.value = ''
    },
    [inputRef, messages],
  )

  useEffect(() => {
    const abortController = new AbortController()

    inputRef.current.addEventListener(
      'keypress',
      (e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()

          if (inputRef.current.value) {
            formRef.current.requestSubmit()
          }
        }
      },
      {
        signal: abortController.signal,
      },
    )

    return () => abortController.abort()
  }, [inputRef, formRef])

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-1 flex-col items-center justify-end">
        <Messages messages={messages} />
      </div>

      <form
        aria-selected={isFocused}
        className="relative rounded-xl aria-selected:outline-2"
        onClick={focusInput}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <div className="w-full rounded-xl border border-stone-300 shadow-inner dark:border-stone-600">
          <textarea
            autoFocus
            className="-mb-2 w-full resize-none rounded-t-xl p-2 outline-none"
            onBlur={onBlurInput}
            onFocus={onFocusInput}
            placeholder="Enter a message..."
            ref={inputRef}
          />

          <div className="flex justify-end p-2">
            <input
              className="font-medium text-stone-600 dark:text-stone-300"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
