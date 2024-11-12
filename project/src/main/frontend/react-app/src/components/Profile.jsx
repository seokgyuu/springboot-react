import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-name">최석규</h1>
      </div>
      <div className="profile-body">
        <p className="profile-introduction">
          안녕하세요, 개발자로 성장하고 있는 최석규입니다. 
		  Spring을 중심으로 안정적이고 확장 가능한 서버 애플리케이션을 구축하는 데 강점을 가지고 있으며, 
		  이를 통해 사용자에게 신뢰성 있는 서비스를 제공하는 것을 목표로 하고 있습니다. 
		  협업과 지속적인 학습을 통해 더 나은 개발자로 발전하기 위해 항상 노력하고 있습니다. 
		  또한 Spring뿐만 아니라 다양한 기술 스택을 바탕으로 유연한 문제 해결이 가능하며, 
		  사용자 중심의 서비스를 누구보다 중시하며 프로젝트를 구현하고 있습니다. 
		  이를 위해 React를 활용한 프론트엔드 개발도 가능하여, 보다 완성도 높은 사용자 경험을 제공할 수 있습니다.
        </p>
		<p classNmae="profile-mystory1">
		</p>
        <div className="profile-contact">
          <h3>Contact Information</h3>
          <ul>
            <li>Email: <a href="mailto:your.email@example.com">tommyne99@naver.com</a></li>
            <li>Phone: +82-10-4228-6771</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
