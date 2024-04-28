import PropTypes from "prop-types";
import { forwardRef } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mdi/react";
import { Grid } from "@mui/material";

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
CustomIcon.displayName = "IconCustom";
CustomIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

const IconCustom = ({ svgFile, icon, className = "", children, ...props }) => {
  return (
    <>
      {svgFile ? (
        <Grid container className="flex w-full items-center gap-2">
          <Icon className="svgFile" path={svgFile} {...props} />{" "}
          {children && <strong>{children}</strong>}
        </Grid>
      ) : (
        <Grid container className="flex w-fit items-center gap-2">
          <CustomIcon icon={icon} className={` ${className}`} {...props} />{" "}
          {children && <strong>{children}</strong>}
        </Grid>
      )}
    </>
  );
};

export default IconCustom;
