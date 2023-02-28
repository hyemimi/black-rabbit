import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return useMutation(
    (data: UserSignupMutationRequest) => instance.post("/sign/user", data),
    {
      onSuccess: (res) => {
        console.log(res);
        alert("회원가입 성공");
        router.push("/signup/completed");
      },
      onError: (res: any) => {
        confirm("회원가입 실패");
        console.log(res.data.detail);
      },
    }
  );
}
