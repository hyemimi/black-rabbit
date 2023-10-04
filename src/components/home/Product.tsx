import styled from "styled-components";
import Image from "next/image";
import tempimage from "../../public/help.png";

import { useRouter } from "next/router";
import Heartbutton from "../common/Heartbutton";
import { IItem } from "@/src/temp/items";
import { IContent } from "@/src/pages/like";
import { useMakeStars } from "@/src/hooks/review/useMakeStars";

export default function Product({
  itemId,
  title,
  imagePath,
  storeName,
  reviewCount,
  starAvg,
  pricePerOne,
}: IContent) {
  const router = useRouter();
  return (
    <Box>
      <InnerBox>
        <Image
          onClick={() => router.push(`/product/${itemId}`)}
          src={imagePath}
          alt=""
          width={240}
          height={200}
        ></Image>
        <Wrapper>
          <Overview>
            <h1>
              {storeName},{title}
            </h1>{" "}
            <br />
            <p>{pricePerOne}</p> <br />
            <p>
              {useMakeStars(starAvg)}({reviewCount})
            </p>
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
