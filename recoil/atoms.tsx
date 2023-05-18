import { atom, useSetRecoilState } from "recoil";
import { LoginType } from "@/components/login/LoginForm";
import { recoilPersist } from "recoil-persist";

/* (next js) 새로고침해도 recoil 값 유지하기.  */
const ssrCompletedState = atom({
  key: "SsrCompleted",
  default: false,
}); //ssr이 끝났는지를 확인하는 state , 새로고침 시에 항상 false를 가짐

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};
/* 유지하고 싶은 recoil을 사용할 페이지에서 아래와 같이 호출 
const setSsrCompleted = useSsrComplectedState();
 useEffect(setSsrCompleted, [setSsrCompleted]); */

const { persistAtom } = recoilPersist();

export const persistAtomEffect = (param: any) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
}; //ssrCompletedState가 완료될 때까지 기다린 후, persistAtom 반환

//login
export const LoginState = atom<LoginType>({
  key: "LoginState",
  default: {
    userID: "",
    userPW: "",
  },
});

// 로그인 여부
export const isLoginState = atom({
  key: "isLoginState",
  default: true,
  effects_UNSTABLE: [persistAtomEffect],
});

// user type (layout)
export const UserState = atom({
  key: "UserState",
  default: {
    nickname: "검토끼",
    isuser: false,
    ismypage: false,
  },
  effects_UNSTABLE: [persistAtomEffect],
});
