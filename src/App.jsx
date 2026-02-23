import { useState } from 'react'
import logoSerasa from './assets/logo_serasa.png'
import './App.css'

function App() {
  const [onlineUsers, setOnlineUsers] = useState(1247)

  const handleVerifyValues = () => {
    window.location.href = 'https://emprestimosimgl.vercel.app/'
  }

  return (
    <div className="container">
      <div></div>
      <div>
        <div className="screen">
          <h1 className="title">Consulta de Valores Disponíveis</h1>
          
          <p className="subtitle">
            Existem valores disponíveis a serem consultados. Clique no botão abaixo para consultar agora.
          </p>

          <button className="btn-primary btn-verify" onClick={handleVerifyValues}>
            Verificar Valores
          </button>

          {/* Contador de pessoas online */}
          <div className="online-users">
            <div className="online-indicator"></div>
            <span>{onlineUsers.toLocaleString('pt-BR')} pessoas consultando agora</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default App
