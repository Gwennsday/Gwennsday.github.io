import PropTypes from "prop-types";
import { forwardRef } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mdi/react";

const CustomIcon = forwardRef((props, ref) => {
  const { icon, ...other } = props;
  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`} {...other}>
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d, i) => (
          <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} key={i} />
        ))
      )}
    </SvgIcon>
  );
});
CustomIcon.displayName = "FaIcon";
CustomIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

const FaIcon = ({ svgFile, icon, className = "", ...props }) => {
  return (
    <>
      {svgFile ? (
        <Icon className="svgFile" path={svgFile} {...props} />
      ) : (
        <CustomIcon icon={icon} className={` ${className}`} {...props} />
      )}
    </>
  );
};

export default FaIcon;
