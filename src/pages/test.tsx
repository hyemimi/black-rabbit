import { Wrapper } from "@/styles/Wrapper";
import UseUserSignupMutation from "@/src/hooks/api/auth/UserSignUpMutation";
import { useGetAllProduct } from "@/src/hooks/api/product/GetAllProduct";
import { useQuery } from "@tanstack/react-query";

export default function test() {
  // 커스텀 useMutation 훅 불러오기
  const {
    mutate: loginMutate,
    data: loginMutationData,
    error: loginMutationError,
  } = UseUserSignupMutation();

  const onSignUpClick = () => {
    loginMutate({
      email: "hyemi7375@gmail.com",
      nickname: "ㅠㅠ",
      pw: "abcdd",
    });
  };

  return (
    <Wrapper>
      <button onClick={onSignUpClick}>클릭</button>
    </Wrapper>
  );
}
