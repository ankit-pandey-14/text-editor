import { createContext, useState } from "react";

const DeviceContext = createContext();

const DeviceContextProvider = ({ children }) => {
    const [activeDevice, setActiceDevice] = useState('tablet');

    return (
        <DeviceContext.Provider value={{ activeDevice, setActiceDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export { DeviceContextProvider, DeviceContext };