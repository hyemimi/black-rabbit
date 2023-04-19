import { Ireview, reviews } from "@/temp/reviews";
import { useRouter } from "next/router";
import { useState } from "react";
import Review from "./Review";

export default function ReviewList() {
  const [reviewList, setReviewList] = useState(reviews);
  const router = useRouter();
  const targetReviews = reviewList.filter(
    (review) => review.Item_id === Number(router.query.id)
  );
  return (
    <>
      {targetReviews.map((review) => (
        <Review key={review.Item_id} {...review}></Review>
      ))}
    </>
  );
}
