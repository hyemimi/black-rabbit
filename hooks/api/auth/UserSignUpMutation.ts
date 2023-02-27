import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";

interface UserSignupMutationRequest {
  email: string;
  nickname: string;
  pw: string;
}

interface UserSignupMutationResponse {
  nickname: string;
  role: string;
}

/*회원가입 - 개인 유저*/

export default function UseUserSignupMutation() {
  return useMutation(
    (data: UserSignupMutationRequest) => instance.post("/sign/user", data),
    {
      onError: (error) => {
        console.log("회원가입 실패");
      },
    }
  );
}
