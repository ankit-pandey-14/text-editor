import React, { useState } from 'react';
import '../../styles/screen/home.css';
import { useDeviceType } from '../../customHooks/useDeviceType';


// Lazy importing of components
const SideBar = React.lazy(() => import('../../components/sidebar'));
const PreviewPost = React.lazy(() => import("./sections/previewPost"));
const WritePost = React.lazy(() => import("./sections/writePost"));


const deviceSpecificStyle = {
    'phone': 'home-screen-phone',
    'tablet': 'home-screen-tablet',
    'desktop': 'home-screen-desktop',
};

const HomeScreen = () => {
    const {activeDevice} = useDeviceType();
    const [post, setPost] = useState('');

    return (
        <main className={`d-grid home-screen ${deviceSpecificStyle[activeDevice]}`}>
            <SideBar />
            <WritePost post={post} setPost={setPost} />
            <PreviewPost post={post} />
        </main>
    );
};

export default HomeScreen;