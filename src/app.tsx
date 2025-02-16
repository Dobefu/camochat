import { createRoot } from 'react-dom/client'
import Chat from './components/chat'
import Chrome from './components/chrome'
import Layout from './components/layout'

const root = createRoot(document.body)

root.render(
  <Chrome>
    <Layout>
      <h2 className="text-2xl font-medium">CamoChat</h2>
      <Chat />
    </Layout>
  </Chrome>,
)
