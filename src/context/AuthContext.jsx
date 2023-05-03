import { createContext } from "react"

const obj = {
    username: 'ali',
    email: 'alion@gm.com'
}

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider

