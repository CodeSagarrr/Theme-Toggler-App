import { useContext } from 'react'
import './App.css'
import { ThemeProvider } from './Context/ThemeContext';

function App() {
const {theme , toggleTheme} = useContext(ThemeProvider)

  return (
    <>
    <div className={`app ${theme}`}>
      <h1>{theme === 'light'?'Light Theme':'Dark Theme'}</h1>
      <button onClick={toggleTheme}>
        Toggle the {theme === 'light'?'dark':'light'} theme
      </button>
    </div>
    </>
  )
}

export default App
