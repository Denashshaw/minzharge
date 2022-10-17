import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import NotFound from './pages/NotFound'
import { useEffect, useState } from "react"
import ProductsSubNav from "./pages/ProductsSubNav"
import ProductBrands from "./pages/ProductBrands"
import ProductView from "./pages/ProductView"
import Footer from "./components/Footer"
import { NavbarContext } from './context/NavbarStatus';

const App = () => {
    const [expand, setExpand] = useState(false)
    const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';

    return (
        <Router>
            <NavbarContext.Provider value={{expand, setExpand}}>
            <Navbar />
                <Routes>
                    <Route path={homePath} exact element={<Home />} />
                    <Route path='works' element={<Works />} />
                    <Route path='products' element={<ProductsSubNav />}>
                        <Route path=':brand' element={<ProductBrands />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='product/:id' element={<ProductView />} />
                </Routes>
                <Footer />
                </NavbarContext.Provider>
        </Router>
    )
}

export default App