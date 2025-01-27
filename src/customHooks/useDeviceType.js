import { useContext } from "react"
import { DeviceContext } from "../context/DeviceContext"

export const useDeviceType = () => {
    return useContext(DeviceContext);
};
