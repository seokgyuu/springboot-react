import React from "react";
import { Link } from "react-router-dom";
import gyu from "../assets/img/port1img.jpg";
import gyu2 from "../assets/img/logo.jpg";
import profile from "../assets/img/gyu.jpg";

const Portfolio = () => {

	const portfolioItems = [
		{id: 1, title: "portfolio1" , imgSrc: gyu , link: "/Port1"},
		{id: 2, title: "portfolio2" , imgSrc: gyu2 , link: "/Port2"},
		{id: 3, title: "profile" , imgSrc: profile, link: "/Profile"},
	];
	
	return(
		<section id="port">
		 <div className= "port_inner">
			<div className="port_grid">
			{portfolioItems.map((item) => (
			            <div key={item.id} className="portfolio_item">
			              <Link to={item.link}>
			                <h2>{item.title}</h2>
			                <img src={item.imgSrc} alt={`Portfolio ${item.id}`} />
			              </Link>
			            </div>
					))}
					        </div>
					      </div>
					    </section>
					  );
					};

export default Portfolio;