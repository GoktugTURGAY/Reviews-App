import { useState } from 'react';
import ReviewRatings from './ReviewRatings';
import Button from './Button';

const ReviewAddition = ({ addReview, lastId, setLastId }) => {
  const [feedbackValue, setFeedbackValue] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [hint, setHint] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleFeedbackValue = e => setFeedbackValue(+e.target.value);

  const handleFeedbackText = e => {
    setFeedbackText(e.target.value);
    console.log(feedbackText);

    if (feedbackText.length === 0) {
      setHint('You should have at least 10 characters.');
      setBtnDisabled(true);
    } else if (feedbackText.length >= 0 && feedbackText.length < 11) {
      setHint('You should have at least 10 characters.');
      setBtnDisabled(true);
    } else {
      setHint('');
      setBtnDisabled(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLastId(lastId + 1);

    const newReview = {
      id: String(lastId),
      feedbackText,
      feedbackValue,
    };

    addReview(newReview);
  };

  return (
    <section className="m-12 mx-auto max-w-xl rounded-lg bg-gradient-to-br from-indigo-700 to-indigo-600 p-12 text-center text-indigo-50 shadow-md shadow-indigo-100">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="mb-8 text-3xl font-medium">Post a Review</legend>

          <ReviewRatings handleFeedbackValue={handleFeedbackValue} />

          <div>
            <label className="visually-hidden" htmlFor="review">
              Post a Review
            </label>
            <textarea
              value={feedbackText}
              onChange={handleFeedbackText}
              className="mb-4 w-2/3 resize-none rounded-md bg-indigo-50 p-4 text-indigo-950 shadow-lg focus:outline-4 focus:outline-offset-4 focus:outline-white"
              name="review"
              id="review"
              placeholder="Write your review here..."
            ></textarea>

            {hint && <p className="mx-auto mb-6 w-2/3 text-left">{hint}</p>}
          </div>

          <Button btnDisabled={btnDisabled} />
        </fieldset>
      </form>
    </section>
  );
};

export default ReviewAddition;
