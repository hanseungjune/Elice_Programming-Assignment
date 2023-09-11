import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0 auto;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    background-color: #f0f1f3;
    padding: 0;

    -webkit-user-select: none; /* Chrome, Safari, Opera */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE 10+/ Edge */
    user-select: none;         /* Standard */
  }

  img {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
  }
`;

export const CourseSection = styled.section`
  margin-top: 38px;
  width: 64%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CourseSectionTitle = styled.h1`
  width: 60px;
  font-size: 15px;
  font-weight: 900;
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 4px solid rgb(82, 79, 161);
  color: rgb(82, 79, 161);
  text-align: center;
`;
