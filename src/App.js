import { useState } from "react"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {
    const [page, setPage] = useState(0) // 0 - home, 1-about, 2-contact 3 - service

    return (
        <>
            <button onClick={() => setPage(0)}>home</button>
            <button onClick={() => setPage(1)}>about</button>
            <button onClick={() => setPage(2)}>contact</button>
            <button onClick={() => setPage(3)}>service</button>

            {page === 0 && <Home />}
            {page === 1 && <About />}
            {page === 2 && <Contact />}
            {page === 3 && <Services />}

        </>
    )
}
export default App


// import/export [module] {import export} +
// props, state, component
