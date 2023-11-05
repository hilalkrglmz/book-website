import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProductsPage from "./pages/ProductsPage"
import Header from "./components/Header"
import ProductDetail from "./pages/ProductDetail"
import Undefined from "./pages/Undefined"

const App = () => {

  return (
    
<BrowserRouter>

{/* her sayfada ortak olarak görünmesi istenen elemanlar buraya yazılır. */}
<Header/>

<Routes>

<Route path="/ürünler" element={<ProductsPage/>}/>
<Route path="/" element={<MainPage/>}/>
<Route path="/ürün/:id" element={<ProductDetail/>} />
<Route path="*" element={<Undefined/>}/>
</Routes>



</BrowserRouter>

  )
}

export default App
