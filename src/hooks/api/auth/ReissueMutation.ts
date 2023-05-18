import { baseURL, instance } from "@/src/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ReissueMutationRequest {
  refreshToken: string;
}

export default function useReissueMutation({ onSuccess, onError }: any) {
  return useMutation(
    (data: ReissueMutationRequest) =>
      instance.post("/reissue", undefined, {
        headers: {
          "Refresh-Token": data.refreshToken,
        },
      }),
    {
      onSuccess,
      onError,
    }
  );
}
