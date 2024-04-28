import { Link } from "react-router-dom";

const IconLink = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`iconLink ${className}`} target="_blank">
      {children}
    </Link>
  );
};

export default IconLink;
