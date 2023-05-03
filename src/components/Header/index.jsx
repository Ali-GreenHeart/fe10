import { useContext } from 'react'
import styles from './index.module.css'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {

    const { username, email } = useContext(AuthContext)

    return (
        <header className={styles.header}>
            <p>logo</p>
            <p>{username} {email}</p>
        </header>
    )
}
export default Header
