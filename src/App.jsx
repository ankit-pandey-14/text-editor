import React, { Suspense } from "react";
import { DeviceContextProvider } from "./context/DeviceContext";

const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));

const App = () => {
    return (
        <DeviceContextProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeScreen />
            </Suspense>
        </DeviceContextProvider>
    );
};

export default App;