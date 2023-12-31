/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {
    console.log("submitted");
  };

  const setCountValue = (value) =>
    setCount((prevCount) => Math.max(data?.minimum || 1, value));

  const decrementCount = () => setCountValue(count - 1);

  const incrementCount = () => setCountValue(count + 1);

  const handleInputChange = (e) => setCountValue(e.target.value);

  const addToCartHandler = (id) => {
    const isItemExists = cart?.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else if (data.stock < count) {
      toast.error("Product stock limited!");
    } else {
      const cartData = { ...data, qty: count };
      dispatch(addTocart(cartData));
      toast.success("Item added to cart successfully!");
    }
  };

  const updateWishlistState = () => setClick(!click);

  const removeFromWishlistHandler = () => {
    updateWishlistState();
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = () => {
    updateWishlistState();
    dispatch(addToWishlist(data));
  };

  useEffect(() => {
    setClick(wishlist?.some((i) => i._id === data._id));
  }, [wishlist, data]);

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpen(false);
                }
              }}
              role="button"
              tabIndex={0}
            />

            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <div className="w-full flex flex-row">
                  <div className="w-1/4">
                    <img
                      src={data?.images[0]}
                      alt=""
                      className="w-[300px] h-[300px]"
                    />
                  </div>
                  <div className="flex flex-col w-3/4">
                    <div className="flex items-start ml-5">
                      <h1 className={`${styles.productTitle} text-[59px]`}>
                        {data.name}
                      </h1>
                    </div>
                    <div className="desc ml-5">
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                    <img
                      src={data.shop.avatar}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">(4.5) Ratings</h5>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? data.originalPrice + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <input
                      value={count}
                      type="number"
                      className="bg-gray-200 w-[5rem] text-gray-800 font-medium px-4 py-[11px]"
                      onChange={handleInputChange}
                    />
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={removeFromWishlistHandler}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            removeFromWishlistHandler();
                          }
                        }}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                        role="button"
                        tabIndex={0}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={addToWishlistHandler}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            addToWishlistHandler();
                          }
                        }}
                        title="Add to wishlist"
                        role="button"
                        tabIndex={0}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                  onClick={() => addToCartHandler(data._id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      addToCartHandler(data._id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
};

export default ProductDetailsCard;
