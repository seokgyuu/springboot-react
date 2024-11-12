import React from "react";
import Image1 from "../assets/img/table.jpg";

const Port2 = () => {
  return (
    <div className="port-contaioner">
	<h1 className="port-title">
	        <a
	          href="https://github.com/seokgyuu/lawreact"
	          target="_blank"
	          rel="noopener noreferrer"
	          className="port-link"
	        >
	          GitHub Link
	        </a>
	      </h1>
		<div className="port-explain">
		  <img
		    src={Image1}
		    alt="Project Overview"
		    className="port-image"
		  />
		  <p className="port-text">
		    이 프로젝트는 DVD 구매 서비스로 사용자 관리, 제품 관리, 파일 업로드,
		    공지사항, 결제, 쿠폰 등의 기능을 제공하는 웹 애플리케이션입니다.
		  </p>
		</div>
    </div>
  );
};

export default Port2;
