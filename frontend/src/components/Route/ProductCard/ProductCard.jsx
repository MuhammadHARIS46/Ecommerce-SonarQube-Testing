/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import Ratings from "../../Products/Ratings";
import { toast } from "react-hot-toast";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (  wishlist?.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart?.find((i) => i._id === id);
  
    if (isItemExists) {
      toast.error("Item already in cart!");
      return;
    }
  
    if (data.stock < 1) {
      toast.error("Product stock limited!");
      return;
    }
  
    const cartData = { ...data, qty: data?.minimum };
    dispatch(addTocart(cartData));
    toast.success("Item added to cart successfully!");
  };
  

  return (
    <>
      <div className="w-[full] h-[370px] bg-white flex-col rounded-lg shadow-md p-3 relative cursor-pointer flex">
        <div className="w-10/12">
          <Link
            to={`${
              isEvent === true
                ? `/product/${data._id}?isEvent=true`
                : `/product/${data._id}`
            }`}
          >
            <div className="flex justify-center items-center">
              <img
                src={ data?.images[0]}
                alt=""
                className="w-200 h-[170px] object-contain"
              />
            </div>
          </Link>
        </div>

        {/* side options */}
        <div className="w-2/12">
          {click ? (
            <AiFillHeart
              size={22}
              strokeWidth={5}
              fill="red"
              stroke="black"
              className="cursor-pointer stroke-black  absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "white"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              strokeWidth={5}
              fill="black"
              stroke="black"
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "white"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            strokeWidth={5}
            fill="black"
            stroke="black"
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="white"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            strokeWidth={5}
            fill="black"
            stroke="black"
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="white"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex justify-center">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " $" : null}
              </h4>
            </div>
            <span className="font-[400] ml-1 text-[14px] text-[#68d284]">
              {data?.minimum + " "} minimum
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
