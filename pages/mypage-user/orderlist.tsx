import { Wrapper } from "@/components/common/Wrapper";
import { TitleDiv } from "@/components/common/TitleDiv";
import { items } from "@/temp/items";
import Order from "@/components/order/Order";

export default function orderlist() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>주문목록</h1>
      </TitleDiv>
      {items.map((item) => (
        <Order key={item.Item_id} {...item} />
      ))}
    </Wrapper>
  );
}
