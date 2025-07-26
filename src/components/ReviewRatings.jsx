import RatingCircle from './RatingCircle';

const ReviewRatings = ({ handleFeedbackValue }) => {
  return (
    <ol className="mb-10 flex justify-between gap-4">
      <li>
        <RatingCircle value="1" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="2" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="3" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="4" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="5" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="6" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="7" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="8" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="9" handleFeedbackValue={handleFeedbackValue} />
      </li>
      <li>
        <RatingCircle value="10" handleFeedbackValue={handleFeedbackValue} />
      </li>
    </ol>
  );
};

export default ReviewRatings;
