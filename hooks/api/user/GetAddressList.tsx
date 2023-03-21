import { useQuery } from "@tanstack/react-query";
import axios from "axios";
/* 주소지 목록  */

export function useGetAddressList(userId: number) {
  const fetchAddressList = () => {
    return axios.get("15.165.101.95:8080/user/address", {
      params: { userId: userId },
    });
  };
  const { data: addressList } = useQuery(
    ["allAddress", userId],
    async () => await fetchAddressList()
  );
  return { addressList };
}
