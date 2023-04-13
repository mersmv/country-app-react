import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"

const Router = () => {
    return (
        <Routes>
            <Route path='/' elemento={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default Router