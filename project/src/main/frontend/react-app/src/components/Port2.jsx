import React from "react";
import Image21 from "../assets/img/2-1.jpg";
import Image22 from "../assets/img/2-2.jpg";
import Image23 from "../assets/img/2-3.jpg";

const Port2 = () => {
  return (
    <div className="port-contaioner">
	<div className="port-description">
	<h2>Project Overview</h2>
	<br></br>   
	    <p>
		법률 정보와 관련된 데이터를 사용자가 쉽고 직관적으로 이해할 수 있도록 돕는 웹 애플리케이션입니다.
		이 프로젝트는 React를 기반으로 한 프론트엔드와 python 기반의 백엔드 및 데이터 처리 기술을 사용하여 구축되었으며,다음과 같은 주요 목표를 가지고 있습니다:
		<br></br><br></br>
		법률 데이터의 시각화:
		법률 정보와 관련된 데이터를 사용자 친화적인 인터페이스를 통해 제공.
		복잡한 법률 용어나 조항을 쉽게 이해할 수 있도록 도표, 카드 형식 등의 시각적 요소를 활용.
		<br></br><br></br>
		사용자 중심 인터페이스:
		React의 컴포넌트 기반 아키텍처를 활용하여 간단하고 빠른 UX를 제공합니다.
		검색 기능을 통해 특정 법률 조항이나 관련 정보를 쉽게 탐색 가능합니다.

	        </p>
	</div>
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
		    src={Image21}
		    alt="Project Overview"
		    className="port-image"
		  />
		  <p className="port-text">
			사용자가 페이지를 열면 React가 초기화되며 기본적인 컴포넌트를 렌더링합니다.
		  		  </p>
		  <br></br><br></br>
		  <img
		    src={Image22}
		  	alt="Project Overview"
		  	className="port-image"
		  />
		  <p className="port-text">
		  	입력된 키워드는 프론트엔드에서 실시간으로 상태를 업데이트하며, 입력된 데이터를 API요청으로 백엔드에 전달합니다.<br></br>
			선택된 질문은 FastAPI를 통해 처리되고, LangChain과 LLM을 이용해 상세한 답변이 생성됩니다.<br></br>
			그 후 반환된 추천 질문을 리스트로 렌더링하여 사용자에게 보여줍니다.
		  </p>
		  <br></br><br></br>
		  <img
		  	src={Image23}
		  	alt="Project Overview"
		  	className="port-image"
		  />
		  <p className="port-text">
		  	상세한 답변이 생성되고, 단계별 설명과 함께 화면에 표시됩니다.
		  </p>
		  <br></br><br></br>
		</div>
    </div>
  );
};

export default Port2;
