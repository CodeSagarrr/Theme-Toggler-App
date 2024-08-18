
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext } from './Context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <>
    <ThemeContext>
      <App />
    </ThemeContext>
    </>
)
