import { createRoot } from 'react-dom/client'
import Chat from './components/chat'
import Chrome from './components/chrome'
import Layout from './components/layout'

const root = createRoot(document.body)

root.render(
  <Chrome>
    <Layout>
      <Chat />
    </Layout>
  </Chrome>,
)
