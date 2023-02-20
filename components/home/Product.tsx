import styled from "styled-components";
import Image from "next/image";
import tempimage from "../../public/help.png";

import { useRouter } from "next/router";
import Heartbutton from "../common/Heartbutton";
interface Iproduct {
  id: number;
  name: string;
  price: number;
  detail: string;
  image: string;
}
export default function Product({ id, name, price, detail, image }: Iproduct) {
  const router = useRouter();
  return (
    <Box onClick={() => router.push(`/product/${id}`)}>
      <InnerBox>
        <Image src={tempimage} alt="" width={240} height={200}></Image>
        <Wrapper>
          <Overview>
            <h1>{name}</h1> <br />
            <p>{price}</p> <br />
            <p>{detail}</p>
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
