/* 리뷰 임시데이터 입니다 */

export interface Ireview {
  Item_id: number;
  user_id: number;
  title: string;
  detail: string;
  score: number;
  createTime: null;
}

export const reviews = [
  {
    Item_id: 1,
    user_id: 1,
    title: "리뷰",
    detail: "괜찮아요",
    score: 5,
    createTime: null,
  },
];
