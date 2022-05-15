import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ href, children }) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={`link ${
        location.pathname === href && "border-l-4 border-primary bg-indigo-50"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
