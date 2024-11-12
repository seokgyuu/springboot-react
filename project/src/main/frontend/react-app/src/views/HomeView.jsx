import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Portfolio from "../components/Portfolio";
import Port1 from "../components/Port1";
import Port2 from "../components/Port2";

const HomeView = () => {
	 return (
	    <>
	      <Header />
	      <Routes>
		  	<Route path="/" element={<Portfolio />} />
	        <Route path="/profile" element={<Profile />} />
			<Route path="/Port1" element={<Port1 />} />
			<Route path="/Port2" element={<Port2 />} />
			<Route path="*" element={<Navigate to="/" />} />
	      </Routes>
	    </>
	  );
	};

export default HomeView;

