import styled from "styled-components";

export const A = styled.a`
  color: black;
  font-size: 15px;
  font-weight: 500;
  padding: 0 10px;
`

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
  font-family: "Arbutus Slab", serif;
  font-size: 35px;
  color: rgb(4, 241, 241);
  text-shadow: rgba(0, 0, 0, 0.35) 2px 2px 2px;
  font-weight: 600;
  padding: 9px 0 15px 22px;
`

export const SpanRight = styled.span`
  margin-left: auto;
  padding: 16px 22px 13px 0;
`

export const InputButtonLog = styled.input`
  font-size: 18px;
  width: 109px;
  height: 51px;
  background-color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
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
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-size: 300% 100%;

  :hover {
    color: white;
    transition: All 2.0s ease;
    background-position: 100% 0;
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
`
export const DivAuth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputButtonOut = styled.input`
  font-size: 18px;
  width: 109px;
  height: 51px;
  margin-left: 19px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-size: 300% 100%;

  :hover {
    color: white;
    transition: All 2.0s ease;
    background-position: 100% 0;
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  }
`
export const ImgAvatar = styled.img`
  width: 50px;
  height: auto;
  margin: 0 0 0 20px;
`
