import { Message } from 'src/types/message'

export default function Messages() {
  const messages: Message[] = []

  return (
    <div className="flex w-full flex-col gap-4">
      {messages.length ? (
        <>
          {messages.map((message) => (
            <div key={message.message}>
              <p className="font-semibold">{message.author}</p>
              <p>{message.message}</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-stone-400 italic">No messages yet</p>
      )}
    </div>
  )
}
