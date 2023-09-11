import React from 'react';
import { Container, ContainerDummy, MenuBar, OtherBar } from '../styles/NavStyle';
import { FaMicrosoft } from 'react-icons/fa';

const Nav = () => {
  return (
    <>
      <Container>
        <MenuBar>
          <img
            src="https://cdn-api.elice.io/api/file/58c7f7253d0c45b384e757953c1dcd55/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5_kr%404x.png?se=2100-12-31T00%3A00%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=ambqFbUklwfxNCv8ohIXBGpyBwmE7AdZH9rKKTBg150%3D"
            alt="엘카데미"
          />
          <span>홈</span>
          <span>프로젝트</span>
          <span>학습 순위</span>
          <span>🧠 ChatGPT</span>
          <span>내일배움카드</span>
          <span>기업교육문의</span>
        </MenuBar>
        <OtherBar>
          <span>패스/과목 검색</span>
          <span>
            <FaMicrosoft style={{ marginRight: '5px' }} /> 내 대시보드
          </span>
          <span>🔔</span>
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtdKLfb2qla47WM73m8kiIpIDCfXkbC-Fl0m8MUd-EV6AHY=s96-c"
            alt="내 이미지"
          />
        </OtherBar>
      </Container>
      <ContainerDummy></ContainerDummy>
    </>
  );
};

export default Nav;
