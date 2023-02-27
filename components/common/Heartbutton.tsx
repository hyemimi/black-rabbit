import styled from "styled-components";
import Image from "next/image";
import heart from "../../public/heart.png";

export default function Heartbutton({ isHeart }: any) {
  return (
    <Circle isHeart={isHeart}>
      <Image src={heart} alt="" width={20} height={20}></Image>
    </Circle>
  );
}

const Circle = styled.div<{ isHeart: boolean }>`
  border-radius: 50px;
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.isHeart ? "#fab1a0" : "#c9c9c9")};
  align-items: center;
  justify-content: center;
  padding: 2.5px;
  cursor: pointer;
`;
