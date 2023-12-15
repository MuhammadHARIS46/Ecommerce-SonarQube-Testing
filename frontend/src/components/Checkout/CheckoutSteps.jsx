import React from "react";
import styles from "../../styles/styles";
import PropTypes from "prop-types";
const CheckoutSteps = ({ active }) => {
  console.log(active);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
        <div className={`${styles.noramlFlex}`}>
          <div className={`${styles.cart_button}`}>
            <span className={`${styles.cart_button_text}`}>1.Shipping</span>
          </div>
          <div
            className={`${
              active > 1
                ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
            }`}
          />
        </div>

        <div className={styles.noramlFlex}>
          <div
            className={`${styles.cart_button} ${
              active > 1 ? "" : styles.bgFDE1E6
            }`}
          >
            <span
              className={`${styles.cart_button_text} ${
                active > 1 ? "" : styles.textF63B60
              }`}
            >
              2.Payment
            </span>
          </div>
        </div>

        <div className={styles.noramlFlex}>
          <div
            className={`w-[30px] 800px:w-[70px] h-[4px] ${
              active > 3 ? `${styles.bgF63B60}` : `${styles.bgFDE1E6}`
            }`}
          />
          <div
            className={`${styles.cart_button} ${
              active > 2 ? "" : styles.bgFDE1E6
            }`}
          >
            <span
              className={`${styles.cart_button_text} ${
                active > 2 ? "" : styles.textF63B60
              }`}
            >
              3.Success
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
CheckoutSteps.propTypes = {
  active: PropTypes.number.isRequired,
};

export default CheckoutSteps;
