import styles from "./FeedbackOptions.module.scss";

import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((e, index) => {
        return (
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              onLeaveFeedback(e);
            }}
            key={index}
          >
            {e}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
