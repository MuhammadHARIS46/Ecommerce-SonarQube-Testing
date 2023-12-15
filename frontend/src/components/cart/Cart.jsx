import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-hot-toast";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        { cart?.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center bg-[#11b85c]">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setOpenCart(false)
                  }
                }}
              />
            </div>
            <h5 className="text-white">Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className=" bg-[#11b85c]">
                <h1 className="pt-10 mt-0 text-white text-xl">MY CART</h1>
              </div>

              <div className="flex w-full pt-0 pb-5 pr-5 bg-[#11b85c] items-start justify-end">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setOpenCart(false)
                    }
                  }}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4 ml-7`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {cart?.length} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t ml-0">
                {
                  cart?.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-2 pt-10">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#117e2c] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (USD${totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === data.minimum ? data.minimum : value - 1);
    const updateCartData = {
      ...data,
      qty: value === data.minimum ? data.minimum : value - 1,
    };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4 ml-7">
      <div className="w-full flex items-center">
        <div className="pr-5">
          <div
            className={`bg-[#03a75a] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                increment(data)
              }
            }}
          >
            <HiPlus size={15} color="#fff" />
          </div>
          <span className="pl-[1px] pt-[3px] pb-[3px]">{data.qty}</span>
          <div
            className="bg-[#b61111] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                decrement(data)
              }
            }}
          >
            <HiOutlineMinus size={15} color="#fff" />
          </div>
        </div>
        <img
          src={data?.images[0]}
          alt=""
          className="w-[130px] h-min ml-10 mr-2 rounded-[8px]"
        />
        <div className="pl-[20px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.discountPrice} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1
          className="ml-10 bg-[#e20a0a] text-xl text-white rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer p-2"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
