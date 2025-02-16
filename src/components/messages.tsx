import { Message } from 'src/types/message'

export default function Messages() {
  const messages: Message[] = [
    {
      author: 'Author',
      message: 'Some message',
    },
  ]

  return (
    <>
      {messages.map((message) => (
        <div>
          <div>{message.author}</div>
          <div>{message.message}</div>
        </div>
      ))}
    </>
  )
}
