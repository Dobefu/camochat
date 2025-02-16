import { Message } from 'src/types/message'

export type Props = Readonly<{
  messages: Message[]
}>

export default function Messages({ messages }: Props) {
  return (
    <div className="flex max-h-full w-full flex-col gap-4">
      {messages.length ? (
        <>
          {messages.map((message) => (
            <div key={message.timestamp}>
              <p className="font-semibold">
                {message.author}{' '}
                <span className="font-normal">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </p>
              <p className="whitespace-pre-line">{message.message}</p>
            </div>
          ))}
        </>
      ) : (
        <p className="text-stone-400 italic">No messages yet</p>
      )}
    </div>
  )
}
