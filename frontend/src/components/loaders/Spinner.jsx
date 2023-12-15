import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Spinner = ({ color, loading, size }) => {
  return (
    <PulseLoader
      color={color}
      loading={loading}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
