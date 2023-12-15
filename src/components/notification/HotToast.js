import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const HotToast = () => {
  const { message, type } = useSelector((state) => state.notify);

  useEffect(() => {
    console.log("asdasd");
    if (type === "") return;
    (() => toast[type](message, {}))();
  }, []);
  console.log({ message });
  return <Toaster />;
};

export default HotToast;
