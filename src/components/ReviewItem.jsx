import { FaTimes } from 'react-icons/fa';

const ReviewItem = ({
  reviewData: { id, feedbackText, feedbackValue },
  DeleteReview,
}) => {
  return (
    <article className="relative rounded-lg bg-gradient-to-br from-indigo-700 to-indigo-600 p-12 text-indigo-50 shadow-md shadow-indigo-100">
      <h2 className="mb-2 text-xl font-bold">Review: {id}</h2>
      <span className="absolute -top-(--position) -left-(--position) flex size-18 items-center justify-center rounded-full bg-red-600 text-xl font-bold shadow-md [--position:25px]">
        {feedbackValue}
      </span>
      <button
        onClick={() => DeleteReview(id)}
        type="button"
        className="absolute top-(--position) right-(--position) inline-block cursor-pointer rounded-md p-1 [--position:20px] focus:outline-4 focus:outline-offset-2 focus:outline-white"
      >
        <FaTimes className="text-xl" />
      </button>
      <p className="text-base/7">{feedbackText}</p>
    </article>
  );
};

export default ReviewItem;
