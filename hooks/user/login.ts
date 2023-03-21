import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
import { useRouter } from "next/router";

export function useUser() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  /**
   * 유저 로그인 시에 사용합니다.
   * @param accessToken 엑세스 토큰 값
   * @param refreshToken 리프레시 토큰 값
   */
  const userLogin = useCallback(
    ({
      accessToken,
      refreshToken,
    }: {
      accessToken: string;
      refreshToken: string;
    }) => {
      if (
        accessToken === undefined ||
        refreshToken === undefined ||
        accessToken === "" ||
        refreshToken === ""
      ) {
        throw Error("로그인 토큰이 올바르지 않습니다.");
      }
      replaceAccessTokenForRequestInstance(accessToken);
      localStorage.setItem("dayfilm-user", accessToken);
      localStorage.setItem("dayfilm-user-re", refreshToken);
      queryClient.clear();
    },
    [queryClient]
  );

  const userLogout = () => {
    localStorage.removeItem("dayfilm-user");
    localStorage.removeItem("dayfilm-user-re");
    queryClient.clear();
    router.push("/login");
  };

  return {
    isLoaded,
    setIsLoaded,
    userLogin,
    userLogout,
  };
}
