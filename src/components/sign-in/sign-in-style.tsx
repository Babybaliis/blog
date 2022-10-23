import styled from "styled-components";

export const DivSignInForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 130px 0 20px 0;
  padding: 30px;
  width: 384px;
  height: 470px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 22px 106px rgba(0, 0, 0, .07), 0 9.19107px 44.2843px rgba(0, 0, 0, .05), 0 4.91399px 23.6765px rgba(0, 0, 0, .042), 0 2.75474px 13.2728px rgba(0, 0, 0, .035), 0 1.46302px 7.04911px rgba(0, 0, 0, .028), 0 .608796px 2.93329px rgba(0, 0, 0, .02);
`

export const InputBtn = styled.button`
  background-color:#1890ff;
  margin: 15px 0;
  border-radius: 4px;
  color: #fff;
  height: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-size: 300% 100%;

  :hover {
    color: white;
    transition: All 2.0s ease;
    background-position: 100% 0;
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }
`