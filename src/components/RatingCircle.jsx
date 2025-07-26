const RatingCircle = ({ value, handleFeedbackValue }) => {
  return (
    <label
      className={`flex size-16 cursor-pointer items-center justify-center rounded-full bg-red-600 text-xl font-bold text-red-50 shadow-lg has-checked:bg-indigo-950 has-checked:text-indigo-50`}
    >
      {value}
      <input
        className="appearance-none"
        type="radio"
        name="value"
        value={value}
        onChange={handleFeedbackValue}
        required
      />
    </label>
  );
};

export default RatingCircle;
