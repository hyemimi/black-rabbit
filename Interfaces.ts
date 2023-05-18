import { atom } from "recoil";
export type ModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  callBack?: () => any;
};

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});

export interface ItemForm {
  storeId: number;
  itemTitle: string;
  itemCategory: string;
  itemNumber: number;
  itemBrand: string;
  itemModel: string;
  transactionWay: string;
  postalCode: number;
  address: string;
  addressDetail: string;
  feePerDay: number;
  fee5Day: number;
  fee10Day: number;
  itemDescription: HTMLImageElement;
  itemImages: HTMLImageElement;
}

export interface InputItem {
  id: number;
  title: string;
}

export interface SignUpForm {
  email: string;
  nickname: string;
  pw: string;
}
