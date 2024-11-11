import React from "react";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header_inner">
        <div className="header_logo">
		<a href="/">portfolio</a>
		</div>
		<nav className="header_nav" role="navigation" aria-label="메인메뉴">
			<ul>
				<li><a href="profile">profile</a></li>
				<li><a href="portfolio">portfolio</a></li>
			</ul>	
		</nav>
      </div>
    </header>
  );
};

export default Header;
