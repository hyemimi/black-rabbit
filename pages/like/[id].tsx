import { Wrapper } from "@/components/common/Wrapper";
import ProductList from "@/components/home/ProductList";
import { useEffect, useState } from "react";
import { IItem, items } from "@/temp/items";
import Product from "@/components/home/Product";
export default function Like() {
  const [likeList, setLikeList] = useState<IItem[] | null>(null);
  useEffect(() => {
    const tempList = items.filter((item) => item.isHeart === true);
    setLikeList(tempList);
  }, []);
  return (
    <Wrapper>
      {likeList?.map((product) => (
        <Product key={product.Item_id} {...product} />
      ))}
    </Wrapper>
  );
}
