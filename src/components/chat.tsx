export default function Chat() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex flex-1 flex-col items-center justify-end">
        <div>MESSAGES</div>
      </div>

      <form className="relative">
        <div className="w-full rounded-xl border border-gray-300 shadow-inner">
          <textarea
            className="-mb-2 w-full resize-none rounded-t-xl p-2"
            placeholder="Enter a message..."
          />

          <div className="flex justify-end p-2">
            <input className="font-medium" value="Send" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
