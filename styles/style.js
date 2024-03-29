import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 0%;
  right: 0%;
  width: 100%;
  box-sizing: border-box;
  border: 0.5px solid #cccccc;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 2px #cccccc;
  height: 90px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  background-color: #fff;

  /* @media (max-width: 768px) {
    background-color: red;
  } */
`;

export const HeaderImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 18%;
`;

export const Form = styled.div`
  background: #f5f5f5;
  padding: 41px 30px 46px 41px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  margin: auto;
  justify-content: space-around;
  width: 70%;
  margin-top: 59px;
`;

export const FormWine = styled.div`
  margin-top: 100px;
  background: #fff 0 0 no-repeat padding-box;
  border: 0.5px;
  border-radius: 5px;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  max-width: 270px;
  min-width: 270px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;

  h4 {
    text-align: center;
  }

  button {
    position: absolute;
    margin-top: 420px;
    width: 271px;
    background-color: #7ebc43;
    border-color: #7ebc43;
    color: #fff;
    font-size: 16px;
    height: 48px;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
  }
`;
export const PriceOpt = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  background: #f5f5f5;
  margin-left: 66px;
  margin-top: 178px;

  h3 {
    width: 156px;
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SearchWine = styled.form`
  position: absolute;
  margin-top: 100px;
  background: #f5f5f5 0 0 no-repeat padding-box;
  border: 0.5px;
  border-radius: 5px;
  box-shadow: 0px 9.73384px 14.6008px rgb(0 0 0 / 10%);
  min-width: 100%;
  opacity: 1;
  align-items: center;
  height: 89px;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    width: 90%;
    background-color: #fff;
    border: unset;
    border-radius: 4px;
    padding: 15px;
    height: 44px;
    margin-top: 16px;
  }

  img,
  .lupa {
    margin-top: 16px;
    margin-bottom: -18px;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 51px;
  margin-bottom: 39px;
`;
