export const Label = ({ className, errors, children, ...props }) => {
  return (
    <label
      className={`block mb-2 text-sm font-medium ${
        errors ? "text-error" : "text-gray-900"
      } ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
