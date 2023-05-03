import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext([])

const modes = {
    dark: "darkMode",
    green: "greenMode",
    light: ""
}
const ModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light") // "dark", "green"

    useEffect(() => {
        setMode(localStorage.getItem("mode"))
    }, [])


    const toggleMode = (_mode) => {
        setMode(_mode)
        localStorage.setItem("mode", _mode)
    }

    return <ModeContext.Provider value={[mode, toggleMode]}>
        <div className={modes[mode]}>
            {children}
        </div>
    </ModeContext.Provider>
}

export default ModeContextProvider;
