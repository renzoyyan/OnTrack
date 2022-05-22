import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ href, children }) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={`link border-transparent ${
        location.pathname === href
          ? "md:border-l-4 md:border-primary bg-indigo-50"
          : "border-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
