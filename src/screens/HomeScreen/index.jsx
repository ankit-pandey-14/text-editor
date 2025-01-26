import React from 'react';
import '../../styles/screen/home.css';


// Lazy importing of components
const SideBar = React.lazy(() => import('../../components/sidebar'));
const PreviewPost = React.lazy(() => import("./sections/previewPost"));
const WritePost = React.lazy(() => import("./sections/writePost"));


const HomeScreen = () => {
    return (
        <main className="d-grid home-screen">
            <SideBar />
            <WritePost />
            <PreviewPost />
        </main>
    );
};

export default HomeScreen;