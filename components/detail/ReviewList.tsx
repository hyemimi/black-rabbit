import { Ireview, reviews } from "@/temp/reviews";
import { useState } from "react";
import Review from "./Review";

export default function ReviewList() {
  return (
    <>
      {reviews.map((review) => (
        <Review key={review.Item_id} {...review}></Review>
      ))}
    </>
  );
}
