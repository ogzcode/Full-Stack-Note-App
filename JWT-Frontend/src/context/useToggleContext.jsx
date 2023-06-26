import { createContext, useContext, useState } from "react";


const ToggleContext = createContext();

export const useToggleContext = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => setToggle(!toggle);

    return (
        <ToggleContext.Provider value={{ toggle, handleToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}