import { atom } from "recoil";
import { LoginType } from "@/src/components/login/LoginForm";

//login
export const LoginState = atom<LoginType>({
  key: "LoginState",
  default: {
    userID: "",
    userPW: "",
  },
});
