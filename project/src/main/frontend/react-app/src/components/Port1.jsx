import React from "react";
import Image from "../assets/img/table.jpg";
import Image1 from "../assets/img/1.jpg";
import Image2 from "../assets/img/2.jpg";
import Image3 from "../assets/img/3.jpg";
import Image4 from "../assets/img/4.jpg";

const Port1 = () => {
  return (
    <div className="port-contaioner">
	<div className="port-description">
	<h2>Project Overview</h2>
	<br></br>   
	    <p>
	          이 프로젝트는 DVD 구매 서비스 플랫폼으로, 사용자 관리, 제품 관리, 파일 업로드,
	          공지사항, 결제 및 쿠폰 관리 기능을 포함합니다. 이 설명은 프로젝트의 주요
	          목표 및 특징을 간략하게 소개합니다.
			  관리자 서비스 <br></br><br></br>

			  1.관리자 주요 기능<br></br>
			  유저 관리 : 유저전체 조회, 암호초기화, 유저별 작성한 댓글 조회<br></br>
			  상품 관리 : 상품전체 조회, 수정, 등록<br></br>
			  IP 관리 : 부적절한 접근을 시도한 IP 목록 조회, 차단 IP 목록 조회, IP 차단<br></br>
			  캐시 관리 : 캐시 충전 요청 조회 및 승인, 총 충전 완료 금액 조회<br></br>
			  쿠폰 관리 : 발급한 쿠폰 조회, 쿠폰 생성, 쿠폰 만료<br></br>
			  통계 관리 : 매출, 쿠폰 사용 금액, 상품별 매출 순위, 유저별 매출 순위 조회 <br></br>
			  2. 부가 기능 <br></br>
			  공지사항 : 조회, 작성, 삭제 <br></br> <br></br>
			  
			  1.사용자 주요 기능 <br></br>
			  	- 회원가입 - 로그인 - 캐시충전, 쿠폰입력 - 상품 구매 - 시청 <br></br>
			  2.   부가 기능 <br></br>
			  	-마이 페이지  <br></br>
			  		* 회원정보 수정 <br></br>
			  		* 회원 탈퇴 <br></br>
			  		* 쿠폰 관리 <br></br>
			  		* 시청 내역 확인 <br></br>
			  	-메인 페이지  <br></br>
			  		* 영화 제목으로 검색 <br></br>
			  		* 장르별 필터  <br></br>
			  		* 공지사항 


	        </p>
	</div>
	<h1 className="port-title">
	        <a
	          href="https://github.com/DHan0913/TeamProcject"
	          target="_blank"
	          rel="noopener noreferrer"
	          className="port-link"
	        >
	          GitHub Link
	        </a>
	      </h1>
		<div className="port-explain">
		  <img
		    src={Image}
		    alt="Project Overview"
		    className="port-image"
		  />
		  <p className="port-text">
		    프로젝트 테이블 설계입니다
		  </p>
		  <br></br><br></br>
		  <img
		    src={Image1}
		  	alt="Project Overview"
		  	className="port-image"
		  />
		  <p className="port-text">
		  	서버를 실행했을때 초기화면입니다. 사용자 기반 서비스인 만큼 한눈에 보일 수 있도록 설계를 했습니다.
		  </p>
		  <br></br><br></br>
		  <img
		  	src={Image2}
		  	alt="Project Overview"
		  	className="port-image"
		  />
		  <p className="port-text">
		  관리자아이디로 접속했을때 넘어갈 수 있는 페이지 입니다 DB에서 일반유저와 관리자를 role이라는 컬럼을 추가해 차이를 두었고,
		  admin 아이디로 접속했을때 회원관리, 매출량 통계 등 다양한 관리자 서비스를 구현했습니다.
		  
		  </p>
		  <br></br><br></br>
		  <img
			src={Image3}
			alt="Project Overview"
			className="port-image"
		   />
		   <p className="port-text">
			 사용자가 DVD를 구매하기 위해 구매를 하는 방식으로 구현하였고 구매하기 위한 캐시를 충전하는 화면입니다
		   </p>
		   <br></br><br></br>
		   <img
			 src={Image4}
			 alt="Project Overview"
			 className="port-image"
		    />
			<p className="port-text">
			 사용자가 캐시요청을 넣었을때 관리자 창에 위 사진처럼 승인 거절 버튼으로 처리할 수 있도록 구현했습니다.		
			</p>
				  
		</div>
    </div>
  );
};

export default Port1;
