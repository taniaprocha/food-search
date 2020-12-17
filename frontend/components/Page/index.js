import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Typography from "root/components/Typography";
import range from "lodash/range";

import styles from "./index.module.css";

const Page = ({ page, total, onSelect }) => {
  const pages = range(total);

  const handleSelect = (value) => () => {
    onSelect(value);
  };

  if (total <= 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      {pages.map((value) => {
        const pagess = value + 1;
        return (
          <button
            key={value}
            onClick={handleSelect(pagess)}
            className={classnames(styles.page, {
              [styles.selected]: page === pagess,
            })}
          >
            <Typography color="grey-middle-dark" variant="body-small">
              {pagess}
            </Typography>
          </button>
        );
      })}
    </div>
  );
};

Page.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Page;
