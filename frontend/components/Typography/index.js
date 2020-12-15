import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.module.css";

const Typography = ({ children, variant, color }) => {
  const className = classnames(styles[variant], {
    [styles[color]]: !!color,
  });

  const TextComponent =
    variant === "body" || variant === "caption" ? "span" : variant;

  return <TextComponent className={className}>{children}</TextComponent>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "body", "caption"]),
  color: PropTypes.oneOf(["white", "grey", "black"]),
};

Typography.defaultProps = {
  variant: "body",
  color: "grey",
};

export default Typography;
