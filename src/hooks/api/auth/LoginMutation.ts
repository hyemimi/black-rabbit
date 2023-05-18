import { useMutation } from "@tanstack/react-query";
import { replaceAccessTokenForRequestInstance } from "@/src/libs/api/client";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { instance } from "@/src/libs/api/client";
import { useRecoilState } from "recoil";
import { UserState, isLoginState } from "@/src/stores/recoil/atoms";

export interface LoginMutationRequest {
  email: string;
  pw: string;
}
export interface LoginMutationResponse {
  nickname: string;
  role: string;
}

export default function useLoginMutation() {
  const [islogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(UserState);

  const router = useRouter();
  return useMutation(
    (data: LoginMutationRequest) =>
      instance.post<LoginMutationResponse>("/login", data),
    {
      onSuccess: (res) => {
        alert("로그인 되었습니다.");

        /*
         setIsLogin(true); // 로그인 여부 recoil 업데이트
        if (res.data.role === "USER") {
          setUser({ ...user, isuser: true });
        } else {
          setUser({ ...user, isuser: false });
        }  // 유저 유형 recoil 업데이트
        */

        router.push("/");
        const accessToken = res.headers.authorization;
        localStorage.setItem("accessToken", accessToken);
        replaceAccessTokenForRequestInstance(accessToken);
        axios.defaults.headers.common["Authorization"] = accessToken;
      },
      onError: (error: AxiosError) => {
        const ob = Object(error.response!.data);
        alert(ob.detail);
      },
    }
  );
}
