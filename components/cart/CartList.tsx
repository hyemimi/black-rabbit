import { items } from "@/temp/items";
import CartItem from "./CartItem";

export default function CartList() {
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.Item_id} {...item} />
      ))}
    </>
  );
}
