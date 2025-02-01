export const Title = ({ className, children, ...props }) => {
  return (
    <h1
      className={`text-lg sm:text-xl font-bold text-center ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
