export const Input = ({ className, errors, ...props }) => {
  return (
    <input
      className={`bg-gray-50 border ${
        errors ? "border-error" : "border-gray-400"
      }  text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none ${className}`}
      autoComplete="off"
      {...props}
    />
  );
};

export default Input;
