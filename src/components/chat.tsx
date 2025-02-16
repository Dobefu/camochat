import { useCallback, useState } from 'react'

export default function Chat() {
  const [isFocused, setIsFocused] = useState(false)

  const focusInput = useCallback(() => setIsFocused(true), [])
  const blurInput = useCallback(() => setIsFocused(false), [])

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex flex-1 flex-col items-center justify-end">
        <div>MESSAGES</div>
      </div>

      <form
        aria-selected={isFocused}
        className="relative rounded-xl aria-selected:outline-2"
      >
        <div className="w-full rounded-xl border border-gray-300 shadow-inner">
          <textarea
            autoFocus
            className="-mb-2 w-full resize-none rounded-t-xl p-2 outline-none"
            placeholder="Enter a message..."
            onFocus={focusInput}
            onBlur={blurInput}
          />

          <div className="flex justify-end p-2">
            <input className="font-medium" value="Send" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
