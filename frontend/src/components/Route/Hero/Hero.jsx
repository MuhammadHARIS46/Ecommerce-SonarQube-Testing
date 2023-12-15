import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-full md:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] md:text-[40px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Streamline Your B2B Purchases with our Wholesale Platform
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Discover a world of wholesale opportunities with us. Access exclusive
          deals, streamline your purchasing process, and gain a competitive
          edge. Our platform empowers businesses like yours to expand, thrive,
          and maximize profitability. Join us today and unlock the potential of
          wholesale commerce.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
