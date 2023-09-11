import { styled } from 'styled-components';

export const CourseCount = styled.h1`
  width: 100%;
  font-size: 11px;
  margin: 0;
  padding-bottom: 12px;
  padding-left: 1%;
  text-align: left;
  border-bottom: 1px solid rgb(183, 183, 183);
`;

export const CourseListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 0;
`;

export const CourseList = styled.li`
  width: 20.5vw;
  height: 24vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgb(194, 194, 194);

  & > img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 40%;
  }
`;

export const CourseTitle = styled.div`
  width: 100%;
  margin: 0;
  height: 210px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  & > span {
    margin: 0;
    background-color: white;
  }

  & > span:nth-of-type(1) {
    color: rgb(82, 79, 161);
    font-weight: 900;
    font-size: 12px;
  }

  & > span:nth-of-type(2) {
    font-weight: 900;
    font-size: 14.5px;
  }

  & > span:nth-of-type(3) {
    font-size: 13px;
    color: rgb(147, 147, 148);
    font-weight: 500;
  }
`;

export const CoursePrice = styled.div`
  background-color: white;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px;
  gap: 8px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  & > span {
    background-color: white;
    margin: 0;
  }

  & > span:nth-of-type(1) {
    font-weight: 900;
    font-size: 17px;
  }

  & > span:nth-of-type(2) {
    color: rgb(187, 187, 187);
    font-weight: 900;
    font-size: 14px;
  }

  & > span:nth-of-type(3) {
    font-size: 14px;
    color: rgb(255, 0, 0);
    font-weight: 900;
  }
`;
