import { Link } from "@tanstack/react-router";

const IconLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} className="icon-link" {...props}>
      {children}
    </Link>
  );
};

export default IconLink;
