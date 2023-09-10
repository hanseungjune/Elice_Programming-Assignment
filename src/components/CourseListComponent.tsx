import React, { useEffect } from 'react';
import styled from 'styled-components';

export const CourseCount = styled.h1`
  width: 100%;
  font-size: 11px;
  margin: 0;
  padding-bottom: 12px;
  padding-left: 1%;
  text-align: left;
  border-bottom: 1px solid rgb(183, 183, 183);
`;

interface DummyType {
  id: number;
  sub: string;
  title: string;
  content: string;
  imgUrl: string;
  salePrice: string;
  originalPrice: string;
  salesPercent: string;
}

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

  & > img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 40%;
  }
`;

export const CourseTitle = styled.div`
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

const CourseListComponent = () => {
  const dummyData: DummyType[] = [];

  for (let i = 0; i < 200; i++) {
    dummyData.push({
      id: i + 1,
      sub: '소제목',
      title: '나는 이거 진짜 재밌어서 하는거야...',
      content:
        'React는 데이터의 흐름이 한 방향으로만 흐르는 단방향 데이터 흐름을 가집니다.',
      imgUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAAAtFBMVEX///8AAAD/AADV1dXq6uqcnJw9PT2BgYGBAAA9AADqAAD/8fE9QED/oKD/cnL//Pz/ubn/zs7/9vb/kpL/1dX/WVn/g4P/7Oz/Fxf/s7P/vb3/JCT/rq7/3t7/f3//Z2f/bm7/5eX/PT3/SEj/xsb/eXn/Y2P/Q0POzs7VwsJaWlr/qKj/UVH/mpr/NTX/i4uBWlr/HR09ISGBLy89GRmBDAz/LCx3d3fq8/PqMDDqpaXqvr52D9/8AAAEQUlEQVR4nO3daXuaQBiF4ZSkm1ZRo+K+a9ImmqZLuv3//1UYNGqYyQFeE2E890dovIYnAhPtxZydERERERERERHR1vW53vVnw468ee44rs9jFLp4c+K+4EZvjz3Go8PvJDZiIyxeo/e6HY6vD388+8r+cVyadr4TNRoHjWqSwWVEyT+OsmmnrFHHf+muKxlcRlT8A3kw7ZQ1GvgvPRIMLTPUCVE07JQ16vqvfCMaXFYEjSqGfaJG1eCVx7LBZcTIP5KhYZ+oUfDCt7KxZUVwQXIMV1ZJI3US96Sjy4aaY75sSBrN/ZdtmS50eVM239kEjerOcxOvvKmbTwpBo4ktE8hQI5jraQ8nfaPBM2dwHqmbdFO3J3WjdvCSq4OMLiOGwRFVNTvSNpo59syN1jzHcA9K2UhNJ4wT05y6CY5pGt2ertFSJVoebnjZEFy2nUZkc5pGtVvHeH3LNXelIj29uSVv5PZUIefu4EM8vnFLnW7e/takjdz2JExUeokxHl1fRWp19jYma1RtdsNC2nukDfrh4c13b2/xG329u3I2yvZMr58qdiPnSfxGHx4LTWx9EynucH2Yl5v3UvJGjdnLjvH4eps3Q6PUDzp9StaosbRqam3gzR/Pmfvb0eBb7EbfB6WZLR8WQfWFs/VR9h2kvcYDNophNnhgI8yrVi7nP9gIin9fO91Gsu9pTwMbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRHGRhgbYWyEsRGW4DnsdRsWfkwj0TPG78vtk3k69I7Ez2FfdE7u7ZTwOexqIaj2K4wrK+qdZTn+c49/bh9Mvqq/wuiOz+0s7pM+P7vf3iyZYOE6PhHeXdrnsFem6/UzPPAjOVdsSp7nPwtXhHKsPt8qrU2gq2Ez/roQ2zlkz+7lfM7W6zj6hhXPTfkc9vHK6neSO91fqCbl3yJq+Q1r1qbdVwtXg1g8Hl3av9fK6lw9/ACPL1yoztlZXiz137RqXUBrVvDdoQ6s29/ZkrqRq96Rff2/z7GSSrQ3s0n/2YhazU2zCme+hWvU7U/+BJ8f3Tw5ba0w1dywJZ+xTey7bKvVm58udSlpNLNuJulqf+2iz2qDBSJHhxhbVqjfemSdQlGjnm0TyaH26iFqVLTsql3TH4/se5GGXR8lqSt2dLOsUc+uKVJTf32VNaoH4e35DiBYvrcX3Sz8DjI6Kc0zw19XB2hkzQzJ01+OEjT6dRH1+0+hUPj7W7Mnj/75B1PQbI/f6LSxEcZGGG6kvho4Zaf7H4uIiIiIiIiIiIiIKOf+A82pP6p5wepXAAAAAElFTkSuQmCC',
      salePrice: '9000',
      originalPrice: '10000',
      salesPercent: '0.1',
    });
  }

  useEffect(() => {
    console.log(dummyData);
  }, [dummyData]);

  return (
    <>
      <CourseCount>전체 {dummyData.length}개</CourseCount>
      <CourseListContainer>
        {dummyData.map((course: DummyType) => (
          <CourseList key={course.id}>
            <img src={course.imgUrl} alt="냠냠" />
            <CourseTitle>
              <span>{course.sub}</span>
              <span>{course.title}</span>
              <span>{course.content}</span>
            </CourseTitle>
            <span
              style={{
                borderBottom: '1px solid rgb(203, 203, 203)',
                width: '90%',
              }}
            ></span>
            {course.salePrice ? (
              <CoursePrice>
                <span>{Number(course.salePrice).toLocaleString()}원</span>
                <span style={{ textDecoration: 'line-through' }}>
                  {Number(course.originalPrice).toLocaleString()}원
                </span>
                <span>{(Number(course.salesPercent) * 100).toFixed(0)}%</span>
              </CoursePrice>
            ) : (
              <CoursePrice>
                <span style={{ fontWeight: 900 }}>
                  {course.originalPrice}원
                </span>
              </CoursePrice>
            )}
          </CourseList>
        ))}
      </CourseListContainer>
    </>
  );
};

export default CourseListComponent;
