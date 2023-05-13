import UpdateItemPlan from "@/components/mypage/seller/Item/Calendar";
import styled from "styled-components";
import { useRouter } from "next/router";

// export async function getStaticPaths() {
//   // 2. API를 호출한다.
//   // const res = await fetch('https://.../posts')
//   // const posts = await res.json()

//   const posts = [{ id: 1, content: "this is a first post" }];
//   // 3. paths 변수에 (이름이 paths여야 함) 각 페이지를 처리할 수 있도록 params를 추가함.
//   const paths = posts.map((post) => ({
//     // 만약 [pid].tsx라면, 아래의 변수는 id가 아니라 pid로 전달해야 한다.
//     params: { id: post.id },
//   }));

//   return { paths, fallback: false };
// }

const Plan = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Plan;

// const PlanDetail = async () => {
//   const router = useRouter();
//   console.log(router);
//   return (
//     <Wrapper>
//       <Div>
//         <StyledTitle>상품 이용가능 현황</StyledTitle>
//       </Div>
//       <UpdateItemPlan />
//     </Wrapper>
//   );
// };
// export default PlanDetail;

// const Wrapper = styled.div`
//   width: 90%;
//   padding: 0;
//   margin-left: 10rem;
//   justify-content: center;
//   text-align: center;
// `;
// const StyledTitle = styled.h1`
//   font-size: 1.5rem;
//   font-weight: 500;
//   text-align: center;
//   display: inline;
//   padding: 5rem 1rem 5rem 10rem;
// `;

// const Div = styled.div`
//   text-align: left;
//   justify-content: left;
// `;
