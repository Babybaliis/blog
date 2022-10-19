import styled from "styled-components";

export const Div = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px hsl(0deg 3% 87% / 56%);
  position: fixed;
  z-index: 1;
`

export const DivTittle = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 9px 0 15px 22px;
`

export const SpanRight = styled.span`
  margin-left: auto;
  //padding-right: 22px;
  padding: 16px 22px 13px 0;
`

export const InputButtonLog = styled.input`
  font-size: 18px;
  width: 109px;
  height: 51px;
  background-color: white;
  border: none;
  text-align: center;
`

export const InputButtonReg = styled.input`
  font-size: 18px;
  width: 109px;
  height: 51px;
  margin-left: 19px;
  background-color: white;
  border: 1px solid #52C41A;
  border-radius: 5px;
  text-align: center;
  color: rgba(82, 196, 26, 1);
`