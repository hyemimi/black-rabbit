import styled from "styled-components";
import Image from "next/image";
import heart from "../../public/heart.png";

export default function Heartbutton() {
  return (
    <Circle>
      <Image src={heart} alt="" width={20} height={20}></Image>
    </Circle>
  );
}

const Circle = styled.div`
  border-radius: 50px;
  height: 25px;
  width: 25px;
  background-color: #c9c9c9;
  align-items: center;
  justify-content: center;
  padding: 2.5px;
  cursor: pointer;
`;
