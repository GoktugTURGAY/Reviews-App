import { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviewsData, DeleteReview }) => {
  if (reviewsData.length === 0) {
    return (
      <h2 className="mx-auto my-16 max-w-xl text-center text-6xl tracking-tighter text-yellow-600 underline underline-offset-4">
        NO AVAILABLE REVIEW YET
      </h2>
    );
  }

  return (
    <section className="mx-auto my-10 grid max-w-xl gap-8">
      {reviewsData.map(reviewData => (
        <ReviewItem
          key={reviewData.id}
          reviewData={reviewData}
          DeleteReview={DeleteReview}
        />
      ))}
    </section>
  );
};

export default ReviewList;
