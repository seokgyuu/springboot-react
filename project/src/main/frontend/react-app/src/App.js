import './App.css';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <HomeView />
    </BrowserRouter>
  );
};

export default App;