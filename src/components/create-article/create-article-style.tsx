import styled from "styled-components";
import { FieldError } from "react-hook-form";

export const DivNewArticle = styled.form`
  margin: 130px 0;
  padding: 30px;
  width: 938px;
  min-height: 701px;
  height: auto;
  background-color: white;
`;

export const H2 = styled.h2`
  margin-bottom: 20px;
  text-align: center;
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

export const Textarea = styled.textarea<InputProps>`
  resize: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
  height: 168px;
  border: ${({ error }) => (error ? "1px solid red;" : "1px solid #d9d9d9")};
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanRow = styled.span`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: baseline;
`;

export const InputTag = styled.input`
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px 15px;
  width: 30%;
  height: 40px;
  border: 1px solid #d9d9d9;
`;

export const InputDel = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: white;
  color: red;
`;
export const InputAdd = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid rgba(24, 144, 255, 1);
  border-radius: 5px;
  background-color: white;
  color: rgba(24, 144, 255, 1);
  cursor: pointer;
`;

export const InputSend = styled.button`
  width: 32%;
  height: 40px;
  margin-top: 30px;
  border: 1px solid rgba(24, 144, 255, 1);
  border-radius: 5px;
  color: white;
  background-color: rgba(24, 144, 255, 1);
`;
