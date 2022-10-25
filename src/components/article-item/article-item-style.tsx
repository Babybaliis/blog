import styled from "styled-components";

export const DivItemsList = styled.div`
  width: 941px;
  margin: 26px 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px hsl(0deg 3% 87% / 56%);
  opacity: 0;
  animation: ani 1.0s forwards;
  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
`;
export const DivItem = styled.div`
  display: flex;
  font-size: 17px;
  padding: 15px 14px 0 19px;
`;
export const DivItemSB = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  padding: 15px 14px 24px 19px;
`;

export const SpanFlex = styled.span`
  display: flex;
  margin-left: auto;
  gap: 10px;
`;
export const SpanFlexSB = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DivTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: rgba(24, 144, 255, 1);
`;
export const DivLikes = styled.div`
  margin-top: 7px;
  font-size: 12px;
`;

export const DivAuthor = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

export const DivTag = styled.div`
  font-size: 12px;
  border: 1px solid rgba(187, 184, 184, 0.33);
  border-radius: 3px;
  background-color: rgba(229, 229, 229, 0.17);
  padding: 0 5px;
  height: 20px;
  text-align: center;
`;

export const DivDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;
interface DivInfoProps {
  isFull: boolean;
}
export const DivInfo = styled.div<DivInfoProps>`
  color: ${({ isFull }) => (isFull ? "rgba(0,0,0,.5);" : "black")};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  padding-top: 10px;
  width: 70%;
  line-height: 22px;
`;
export const DivBody = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 20px;
`;

export const DivBlock1 = styled.div`
  width: 100%;
`;
export const DivBlock2 = styled.div`
  width: 15%;
  margin-left: 10px;
  text-align: end;
`;
export const DivBlock3 = styled.div`
  margin-left: 10px;
  text-align: end;
`;

export const ImgAvatar = styled.img`
  position: relative;
  border-radius: 50%;
  width: 46px;
  height: 46px;
`;

export const InputEdit = styled.button`
  width: 65.23px;
  height: 31.1px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
`;
export const InputDel = styled.button`
  width: 78px;
  height: 31.1px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: white;
  color: red;
  cursor: pointer;
`;

export const ImgLike = styled.img`
  width: 15px;
  margin-right: 2px;
  height: auto;
  cursor: pointer;
`;
