import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <HomePage />
          {/* <SeatsPage /> */}
          {/* <SessionsPage /> */}
          {/* <SuccessPage /> */}
        </Routes>

      </BrowserRouter >
    </>
  )
}
