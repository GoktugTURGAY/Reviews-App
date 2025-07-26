const Button = ({ text = 'Send Review', btnDisabled }) => {
  const disabledClasses =
    'bg-gray-400 text-gray-100 shadow-none hover:opacity-100 focus:outline-none cursor-default';
  const enabledClasses =
    'bg-indigo-950 shadow-lg hover:opacity-90 focus:outline-4 focus:outline-offset-2 focus:outline-white text-indigo-50 shadow-lg cursor-pointer active:opacity-100 active:shadow-sm';

  return (
    <button
      className={`inline-block ${btnDisabled ? disabledClasses : enabledClasses} rounded-md px-6 py-3 transition-all duration-300 ease-in-out`}
      type="submit"
      disabled={btnDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
