import { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head/Head'

import {EmailContext} from './context/EmailContext'

function App() {
  const [email, setEmail] = useState("");

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const emailData = {
    email,
    updateEmail,
  };
  return (
    <>
      <EmailContext.Provider value={emailData}>
        <BrowserRouter>
          <Head/>
        </BrowserRouter>
      </EmailContext.Provider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
