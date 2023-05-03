import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Footer = () => {
    const value = useContext(AuthContext)
    console.log('footer', value)
    return (
        <footer style={{ backgroundColor: 'red' }}>
            <p>made by FE10 && Ali</p>
        </footer>
    )
}
export default Footer
