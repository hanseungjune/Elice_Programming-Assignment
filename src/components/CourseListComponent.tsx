import React from 'react';
import { useSelector } from 'react-redux';
import {
  CourseCount,
  CourseList,
  CourseListContainer,
  CoursePrice,
  CourseTitle,
} from '../styles/CourseListComponentStyle';

export type CourseType = {
  id: number;
  taglist: string[];
  title: string;
  short_description: string;
  image_file_url: string;
  discount_rate: null | number;
  discounted_price: number;
  discount_begin_datetime: number;
  price: string;
}

export type RootState = {
  courses: CourseType[];
  count: number;
  isFreeSelected: boolean;
  isPaidSelected: boolean;
  title: string;
  currentPage: number;
}

const CourseListComponent = () => {
  const { courses, count } = useSelector((state: RootState) => state);

  return (
    <>
      <CourseCount>전체 {count}개</CourseCount>
      <CourseListContainer>
        {courses?.map((course: CourseType) => (
          <CourseList key={course.id}>
            {course.image_file_url ? (
              <img src={course.image_file_url} alt="image_file_url" />
            ) : (
              <img
                src="https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
                alt="noImage"
              />
            )}
            <CourseTitle>
              {course.taglist.length > 0 ? (
                <span>{course.taglist[0]}</span>
              ) : (
                <span>{'미설정'}</span>
              )}
              <span>{course.title}</span>
              {course.short_description.length > 750 ? (
                <span>{course.short_description.slice(0, 750) + '...'}</span>
              ) : (
                <span>{course.short_description.slice(0, 750)}</span>
              )}
            </CourseTitle>
            <span
              style={{
                borderBottom: '1px solid rgb(203, 203, 203)',
                width: '90%',
              }}
            ></span>
            {course.discounted_price > 0 ? (
              <CoursePrice>
                <span>
                  {Number(course.discounted_price).toLocaleString()}원
                </span>
                <span style={{ textDecoration: 'line-through' }}>
                  {Number(course.price).toLocaleString()}원
                </span>
                <span>{(Number(course.discount_rate) * 100).toFixed(0)}%</span>
              </CoursePrice>
            ) : (
              <CoursePrice>
                <span style={{ fontWeight: 900 }}>
                  {Number(course.price).toLocaleString()}원
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
