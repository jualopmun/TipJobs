import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalContextProvider } from './context/globalContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
)
