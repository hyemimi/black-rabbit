import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";

/* 주소지를 추가합니다 첫 번째 주소는 무조건 default이고,
 그 다음부터는 isDefault가 true인 경우에 기본 선택된 주소가 됩니다.*/
export interface IAddress {
  address: string;
  addressDetail: string;
  postalCode: number;
}
export interface AddAddressMutationRequest {
  address: IAddress;
  isDefault: boolean;
  nickname: string;
  userId: number;
}

export default function useAddAddressMutation() {
  return useMutation((data: AddAddressMutationRequest) =>
    instance.post<any>("/user/address", data)
  );
}
