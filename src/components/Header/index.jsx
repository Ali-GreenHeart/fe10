import { useContext } from 'react'
import styles from './index.module.css'
import { AuthContext } from '../../context/AuthContext'
import { ModeContext } from '../../context/ModeContext'

const Header = () => {

    const { username, email } = useContext(AuthContext)
    const [mode, toggleMode] = useContext(ModeContext)

    return (
        <header className={styles.header}>
            <p>logo</p>

            <button onClick={() => toggleMode("dark")}>
                dark
            </button>
            <button onClick={() => toggleMode("green")}>
                green
            </button>
            <button onClick={() => toggleMode("light")}>
                light
            </button>
            <p>{username} {email}</p>
        </header >
    )
}
export default Header
