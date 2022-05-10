import { Link } from "react-router-dom";

const ActiveLink = ({ href, children }) => {
  return (
    <Link to={href} className="link">
      {children}
    </Link>
  );
};

export default ActiveLink;
