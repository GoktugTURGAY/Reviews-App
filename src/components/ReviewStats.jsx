const ReviewStats = ({ reviewsData }) => {
  const averageReview = Math.trunc(
    reviewsData.reduce((total, review) => (total += review.feedbackValue), 0) /
      reviewsData.length,
  );

  return (
    <section className="mx-auto flex max-w-xl justify-between">
      <h2 className="visually-hidden">Review Stats</h2>

      <p className="text-xl/12 font-bold text-indigo-950">
        Total Reviews: {reviewsData.length}
      </p>
      <p className="text-xl/12 font-bold text-indigo-950">
        Average Review: {isNaN(averageReview) ? '0' : averageReview}
      </p>
    </section>
  );
};

export default ReviewStats;
