export interface ICategory {
  name: string;
  number: number;
}
export interface IStatus {
  status: string;
  number: number;
}
export interface IMethod {
  method: string;
  number: number;
}

export interface IItem {
  Item_id?: number;
  owner_id?: number;
  owner_name?: string;
  title?: string;
  category?: ICategory;
  detail?: string;
  pricePerOne?: number;
  pricePerFive?: number;
  pricePerTen?: number;
  image?: string;
  brandName?: string;
  modelName?: string;
  status?: IStatus;
  purchaseYear?: string;
  purchasePrice?: number;
  method?: IMethod;
  createTime?: string;
  modifyTime?: string;
  use_yn?: boolean;
  permit_yn?: boolean;
}

//temp data
// owner id말고 item id는 없는지?
export const items = [
  {
    Item_id: 1,
    owner_id: 1,
    owner_name: "렌탈",
    title: "어쩌구",
    category: {
      name: "카메라",
      number: 1,
    },
    detail: "",
    pricePerOne: 50000,
    pricePerFive: 200000,
    pricePerTen: 370000,
    image: "",
    brandName: "Canon",
    modelName: "(모델명)",
    status: {
      status: "보통",
      number: 1,
    },
    purchaseYear: undefined,
    purchasePrice: undefined,
    method: {
      method: "배송",
      number: 1,
    },
    createTime: undefined,
    modifyTime: undefined,
    use_yn: false,
    permit_yn: false,
  },
  {
    Item_id: 2,
    owner_id: 1,
    owner_name: "언더독렌탈",
    title: "사용에 편리함",
    category: {
      name: "카메라",
      number: 1,
    },
    detail: "",
    pricePerOne: 25000,
    pricePerFive: 100000,
    pricePerTen: 180000,
    image: "",
    brandName: "Canon",
    modelName: "Canon EOS Rebel T7 18-55mm 번들 세트",
    status: {
      status: "보통",
      number: 1,
    },
    purchaseYear: undefined,
    purchasePrice: undefined,
    method: {
      method: "배송",
      number: 1,
    },
    createTime: undefined,
    modifyTime: undefined,
    use_yn: false,
    permit_yn: false,
  },
];
