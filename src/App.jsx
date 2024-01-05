
// import './App.css'
import Home from "./Pages/Homes/Home"
import { Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="" Component={Home}>

        </Route>
      </Routes>
    </>
  )
}

export default App
