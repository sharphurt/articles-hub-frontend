import React from 'react';
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";
import Home from './Home';
import ArticlePage from "./ArticlePage";

const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/article/:id" element={<ArticlePage/>}/>
            </Routes>
        </Router>
    );
};
export default Webpages;