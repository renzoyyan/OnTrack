const Container = ({ className, children, ...props }) => {
  return (
    <div className={`px-8 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
