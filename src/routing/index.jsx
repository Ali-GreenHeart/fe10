import { lazy, Suspense } from 'react'

import { Route, Routes } from "react-router"
import Service from '../pages/Service'
import Countries from '../pages/Countries'
import Country from '../pages/Country'

// import About from "../pages/About"
const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))
const Home = lazy(() => import("../pages/Home"))
const Services = lazy(() => import("../pages/Services"))
const NotFound = lazy(() => import("../pages/NotFound"))

// code-splitting  lazy-loading
const Loading = () => {
    return <div className='loading'></div>
}
const WebRouting = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:id" element={<Service />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/countries/:name" element={<Country />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
export default WebRouting
