const Container = ({ className, children, ...props }) => {
  return (
    <div className={`px-4 md:px-8 py-4 md:py-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
