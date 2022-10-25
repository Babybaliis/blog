import styled from "styled-components";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

export const DivSignUpForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 130px 0 20px 0;
  padding: 30px;
  width: 384px;
  height: 690px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 22px 106px rgba(0, 0, 0, 0.07),
    0 9.19107px 44.2843px rgba(0, 0, 0, 0.05),
    0 4.91399px 23.6765px rgba(0, 0, 0, 0.042),
    0 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0 1.46302px 7.04911px rgba(0, 0, 0, 0.028),
    0 0.608796px 2.93329px rgba(0, 0, 0, 0.02);
`;

export const H2 = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.label`
  font-weight: 600;
  width: 100%;
`;
export const LabelCheck = styled.label`
  font-weight: 400;
`;
interface InputProps {
  error?: FieldError | undefined;
}

export const Input = styled.input<InputProps>`
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px 15px;
  transition: background-color 0.5s;
  width: 100%;
  border: ${({ error }) => (error ? "1px solid red;" : "1px solid #d9d9d9")};
`;

export const DivLine = styled.div`
  margin: 15px 0;
  border-top: 0.3px solid rgba(133, 132, 132, 0.25);
`;

export const InputCheck = styled.input`
  margin-right: 10px;
`;
export const InputBtn = styled.button`
  background-color: ${(props) => (props.disabled ? "lightgray" : "#1890ff")};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
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
    transition: All 2s ease;
    background-position: 100% 0;
    background-image: linear-gradient(
      to right,
      #25aae1,
      #4481eb,
      #04befe,
      #3f86ed
    );
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }
`;

export const P = styled.p`
  font-size: 11px;
  text-align: center;
  color: rgba(128, 128, 128, 0.99);
`;

export const A = styled.a`
  color: cornflowerblue;
`;
