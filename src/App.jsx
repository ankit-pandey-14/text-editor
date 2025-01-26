import React, { Suspense } from "react";

const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeScreen />
        </Suspense>
    );
};

export default App;