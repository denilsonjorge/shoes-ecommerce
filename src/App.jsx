
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import "./index.css"

function App() {
  return (

    <div className="lg:w-full mx-auto">
    <Header/>
    <Main>
      <Banner/>
    </Main>
    </div>
  )
}

export default App
