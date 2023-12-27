import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import smooth from "./utils/smooth";
import link from "./utils/link";
import ProjectIntro from "./views/ProjectIntro";

const App = () => {
    useEffect(() => {
        smooth();
        link();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/projectIntro" element={<ProjectIntro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;