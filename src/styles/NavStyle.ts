import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 63px;
  background-color: white;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
`;

export const ContainerDummy = styled.div`
  width: 100%;
  height: 63px;
  background-color: white;
`;

export const MenuBar = styled.div`
  background-color: white;
  margin: 10px;
  width: 40%;
  display: flex;
  align-items: center;

  & > img {
    background-color: white;
    width: 126px;
    height: 31px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    font-weight: 900;
    font-size: 12px;
    padding: 5px 10px;
  }

  & > span:hover {
    background-color: #e5e4e4;
    font-weight: 900;
  }
`;

export const OtherBar = styled.div`
  background-color: white;
  margin: 10px;
  width: 20%;
  display: flex;
  align-items: center;

  & > img {
    border-radius: 50%;
    border: 1px solid rgb(160, 160, 160);
    background-color: white;
    width: 40px;
    height: 40px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    font-weight: 900;
    font-size: 12px;
    padding: 5px 10px;
  }

  & > span:hover {
    background-color: #e5e4e4;
    font-weight: 900;
  }
`;