import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import NotFound from './pages/NotFound'
import { useState } from "react"

const App = () => {
    const [data, setdata] = useState(false)
    const getMenuData = (open) => {
        setdata(!data)
    }

    return (
        <Router>
            <Navbar getMenuData={getMenuData} />
                <Routes>
                    <Route path='/' exact element={<Home data={data} />} />
                    <Route path='/works' exact element={<Works />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        </Router>
    )
}

export default App