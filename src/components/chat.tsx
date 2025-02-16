import { useCallback, useRef, useState } from 'react'

export default function Chat() {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const focusInput = useCallback(() => inputRef.current.focus(), [])
  const onFocusInput = useCallback(() => setIsFocused(true), [])
  const onBlurInput = useCallback(() => setIsFocused(false), [])

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex flex-1 flex-col items-center justify-end">
        <div>MESSAGES</div>
      </div>

      <form
        aria-selected={isFocused}
        className="relative rounded-xl aria-selected:outline-2"
        onClick={focusInput}
      >
        <div className="w-full rounded-xl border border-stone-300 shadow-inner dark:border-stone-600">
          <textarea
            autoFocus
            className="-mb-2 w-full resize-none rounded-t-xl p-2 outline-none"
            placeholder="Enter a message..."
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            ref={inputRef}
          />

          <div className="flex justify-end p-2">
            <input
              className="font-medium text-stone-600 dark:text-stone-300"
              value="Send"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
