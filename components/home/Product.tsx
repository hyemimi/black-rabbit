import styled from "styled-components";
import Image from "next/image";
import tempimage from "../../public/help.png";

import { useRouter } from "next/router";
import Heartbutton from "../common/Heartbutton";
import { IItem } from "@/temp/items";

export default function Product({
  Item_id,
  modelName,
  image,
  title,
  pricePerOne,
}: IItem) {
  const router = useRouter();
  return (
    <Box onClick={() => router.push(`/product/${Item_id}`)}>
      <InnerBox>
        <Image src={tempimage} alt="" width={240} height={200}></Image>
        <Wrapper>
          <Overview>
            <h1>{modelName}</h1> <br />
            <p>{pricePerOne}</p> <br />
            <p>{title}</p>
          </Overview>
          <Heartbutton />
        </Wrapper>
      </InnerBox>
    </Box>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  border: 1px solid #c9c9c9;
  width: 270px;
  height: 350px;
  border-radius: 5px;
  margin-bottom: 30px;
  margin-right: 30px;
  padding: 5px;
  cursor: pointer;
`;
const InnerBox = styled.div`
  margin: 10px;
`;
const Overview = styled.div``;
const ImageDiv = styled.div<{ bgPhoto: string }>`
  background-image: ${(props) => props.bgPhoto};
  height: 200px;
  background-size: cover;
  background-position: center center;
`;
