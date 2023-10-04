import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { instance } from "@/src/libs/api/client";
/* 주소지 목록  */

export function useGetAddressList(userId: number) {
  const fetchAddressList = () => {
    return instance.get("/user/address", {
      params: { userId: userId },
    });
  };
  const { data: addressList } = useQuery(
    ["allAddres", userId],
    async () => await fetchAddressList()
  );
  return { addressList };
}
