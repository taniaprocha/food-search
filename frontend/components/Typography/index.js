import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.module.css";

const Typography = ({ children, variant, color, weight }) => {
  const className = classnames(styles[variant], {
    [styles[color]]: !!color,
    [styles[weight]]: weight,
  });

  const TextComponent = variant === "body" ? "span" : variant;

  return <TextComponent className={className}>{children}</TextComponent>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "body",
    "body-small",
  ]),
  color: PropTypes.oneOf([
    "white",
    "grey",
    "dark-grey",
    "black",
    "grey-middle-dark",
  ]),
  weight: PropTypes.oneOf(["regular", "light", "thin", "medium"]),
};

Typography.defaultProps = {
  variant: "body",
  color: "grey",
  weight: "regular",
};

export default Typography;
