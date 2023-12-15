/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { server } from "../server";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../components/Layout/Loader";
import { emptyCart } from "../redux/actions/cart";

const OrderSuccessPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = new URL(document.location).searchParams;
  const session_id = params.get("session_id");
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    const order = {
      cart: orderData?.cart,
      shippingAddress: orderData?.shippingAddress,
      user: user || null, // Include user only if it's truthy, otherwise set to null
      totalPrice: orderData?.totalPrice,
      paymentInfo: { id: session_id, status: "succeeded", type: "Stripe" },
    };

    (async () => {
      setLoader(true);
      if (session_id && order) {
        try {
          const { data } = await axios.get(`${server}/order/success`, {
            params: { session_id },
          });
          if (data.success) {
            await createOrder(order);
            toast.success(data.message);
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
          return toast.error(error.response.data.message);
        }
      }
    })();
  }, []);

  const createOrder = async (order) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(`${server}/order/create-order`, order, config)
      .then((res) => {
        localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        dispatch(emptyCart());
      });
  };
  return (
    <div>
      {!loader ? (
        <>
          <Header />
          <Success />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
