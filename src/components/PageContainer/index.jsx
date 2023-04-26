import Footer from "../Footer"
import Header from "../Header"
import Navbar from "../Navbar/index"

const PageContainer = ({ children }) => {

    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default PageContainer
