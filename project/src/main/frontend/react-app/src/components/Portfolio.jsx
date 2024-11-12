import React from "react";
import { Link } from "react-router-dom";
import gyu from "../assets/img/gyu.jpg";

const Portfolio = () => {

	const portfolioItems = [
		{id: 1, title: "" , imgSrc: gyu , link: "/Port1"},
		{id: 2, title: "" , imgSrc: gyu , link: "/Port2"},
	];
	
	return(
		<section id="port">
		 <div className= "port_inner">
		 	<h1 className="title">portfolio</h1>
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