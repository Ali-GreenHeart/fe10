import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router"
import Hooks from '../pages/Hooks'


const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))
const Home = lazy(() => import("../pages/Home"))
const Services = lazy(() => import("../pages/Services"))
const NotFound = lazy(() => import("../pages/NotFound"))
const Service = lazy(() => import("../pages/Service"))
const Countries = lazy(() => import("../pages/Countries"))
const Country = lazy(() => import("../pages/Country"))
const ToDo = lazy(() => import("../components/ToDo"))
const Counter = lazy(() => import("../components/Counter"))
const Users = lazy(() => import("../pages/Users"))
const UserDetail = lazy(() => import("../pages/Users/UserDetail"))


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
                <Route path='/counter' element={<Counter />} />
                <Route path='/todo' element={<ToDo />} />
                <Route path='/users' element={<Users />} />
                <Route path='/hooks' element={<Hooks />} />
                <Route path='/users/:id' element={<UserDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
export default WebRouting
