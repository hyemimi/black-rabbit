import { useRouter } from "next/router";

export default function ItemDeatil() {
  const router = useRouter();
  const { id } = router.query;

  // '/items/{itemId}로 요청 보내서 같은 ui에 렌더링만
  // product/{itemId}페이지를 그냥 가져오고

  return <p>Post: {id}</p>;
}
