import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import HomeView from "./views/HomeView";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;
