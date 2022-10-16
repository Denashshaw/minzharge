import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import NotFound from './pages/NotFound'
import { useState } from "react"
import ProductsSubNav from "./pages/ProductsSubNav"
import ProductBrands from "./pages/ProductBrands"
import ProductView from "./pages/ProductView"
import Footer from "./components/Footer"

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
                    <Route path='products' element={<ProductsSubNav />}>
                        <Route path=':brand' element={<ProductBrands />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='product/:id' element={<ProductView data={data} />} />
                </Routes>
                <Footer />
        </Router>
    )
}

export default App