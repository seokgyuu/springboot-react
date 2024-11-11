import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Profile from "../components/Profile";
import Portfolio from "../components/Portfolio";
import Port1 from "../components/Port1";
import Port2 from "../components/Port2";
import Footer from "../components/Footer";

const HomeView = () => {
	 return (
	    <>
	      <Header />
	      <Routes>
	        <Route path="/" element={<Main />} />
	        <Route path="/profile" element={<Profile />} />
	        <Route path="/portfolio" element={<Portfolio />} />
			<Route path="/Port1" element={<Port1 />} />
			<Route path="/Port2" element={<Port2 />} />
	      </Routes>
	      <Footer />
	    </>
	  );
	};

export default HomeView;

