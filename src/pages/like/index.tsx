import ProductList from "@/src/components/home/ProductList";
import { useEffect, useState } from "react";
import { IItem, items } from "@/src/temp/items";
import Product from "@/src/components/home/Product";
import styled from "styled-components";
import useLikeMutation from "@/src/hooks/api/like/LikeMutation";
import useDeleteLikeMutation from "@/src/hooks/api/like/DeleteLikeMutation";
import { useGetLikeList } from "@/src/hooks/api/like/GetLikeList";
import { Wrapper } from "@/styles/Wrapper";

export interface IContent {
  imagePath: string;
  itemId: string;
  likeCount: number;
  method: string;
  pricePerOne: number;
  reviewCount: number;
  starAvg: number;
  storeName: string;
  title: string;
}

export default function Like() {
  //const [likeList, setLikeList] = useState<IItem[] | null>(null);
  let userId = 1;
  const { likeList } = useGetLikeList(1);
  const { mutate: deletelikeMutate } = useDeleteLikeMutation();
  /*  useEffect(() => {
    const tempList = items.filter((item) => item.isHeart === true);
    setLikeList(tempList);
  }, []); */
  return (
    <Wrapper>
      <BoxDiv>
        {likeList?.data.content.map((product: IContent) => (
          <Product key={product.itemId} {...product} />
        ))}
      </BoxDiv>
    </Wrapper>
  );
}

const BoxDiv = styled.div`
  display: flex;
  width: 900px;
  flex-wrap: wrap;
`;
