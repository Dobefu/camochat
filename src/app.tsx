import { createRoot } from 'react-dom/client'
import Chrome from './components/chrome'

const root = createRoot(document.body)

root.render(
  <Chrome>
    <h2 className="text-2xl font-medium">CamoChat</h2>
  </Chrome>,
)
