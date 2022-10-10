import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import NotFound from './pages/NotFound'
import { useState } from "react"
import Products from "./pages/Products"
import ProductBrands from "./pages/ProductBrands"
import ProductView from "./pages/ProductView"

const App = () => {
    const [data, setdata] = useState(false)
    const getMenuData = (open) => {
        setdata(!data)
    }

    const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';

    return (
        <Router>
            <Navbar getMenuData={getMenuData} />
                <Routes>
                    <Route path={homePath} exact element={<Home data={data} />} />
                    <Route path='works' element={<Works />} />
                    <Route path='products' element={<Products />}>
                        <Route path=':brand' element={<ProductBrands />} />
                    </Route>
                    <Route path='product/:id' element={<ProductView />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        </Router>
    )
}

export default App