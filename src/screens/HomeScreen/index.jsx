import React, { useState } from 'react';
import '../../styles/screen/home.css';


// Lazy importing of components
const SideBar = React.lazy(() => import('../../components/sidebar'));
const PreviewPost = React.lazy(() => import("./sections/previewPost"));
const WritePost = React.lazy(() => import("./sections/writePost"));


const HomeScreen = () => {
    const [post, setPost] = useState('');

    return (
        <main className="d-grid home-screen">
            <SideBar />
            <WritePost post={post} setPost={setPost} />
            <PreviewPost post={post} />
        </main>
    );
};

export default HomeScreen;