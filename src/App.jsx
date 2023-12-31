import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {

  const [pegarInformações, setPegarInformações] = useState({});

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sessoes/:idFilme' element={<SessionsPage />} />
          <Route path='/assentos/:idSessao' element={<SeatsPage setPegarInformações={setPegarInformações} />} />
          <Route path='/sucesso' element={<SuccessPage pegarInformações={pegarInformações} />} />
        </Routes>

      </BrowserRouter >
    </>
  )
}
