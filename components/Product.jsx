import Image from "next/image";

import { IoHeart } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

import { useContext } from "react";
import { Context } from "@/pages/_app";

export default function Product({ id, name, desc, price, img, type }) {
  const { state, dispatch } = useContext(Context);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        name,
        desc,
        price,
        img,
        type,
      },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        name,
        desc,
        price,
        img,
        type,
      },
    });
  };

  return (
    <div className="space-y-2 hover:scale-[1.02] transition-item">
      <Link href={`/products/${id}`}>
        <Image
          src={img}
          alt={name}
          width={1000}
          height={1000}
          className="h-60 object-cover object-top rounded-t-lg"
        />
      </Link>
      <div>
        <div className="flex justify-between">
          <h4 className="font-bold md:text-xl text-lg">{name}</h4>

          <IoHeart className="md:text-2xl text-xl text-red-500 cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm tracking-wide">{desc}</p>
      </div>

      <div className="v-center gap-2">
        <div className="flex gap-1">
          <GoStarFill className="text-orange-400 md:text-lg text-sm" />
          <GoStarFill className="text-orange-400 md:text-lg text-sm" />
          <GoStarFill className="text-orange-400 md:text-lg text-sm" />
          <GoStarFill className="text-orange-400 md:text-lg text-sm" />
          <GoStarFill className="text-gray-300 md:text-lg text-sm" />
        </div>

        <span className="text-gray-500 font-medium">4.8 (222)</span>
      </div>

      <div className="flex justify-between">
        <div className="v-center">
          <TbCurrencyNaira className="md:text-3xl text-xl" />
          <span className="font-bold md:text-lg">{price}</span>
        </div>

        <div className="v-center xl:gap-4 gap-2">
          <span
            className="bg-gray-400 transition-item hover:bg-black hv-center xl:h-7 xl:w-7 w-5 h-5 cursor-pointer rounded-full"
            onClick={handleRemoveFromCart}
          >
            <FaMinus className="text-white xl:text-sm text-[10px]" />
          </span>
          <span className="text-lg font-bold">
            {state.cart.find((item) => item.id === id)?.qty || 0}
          </span>
          <span
            className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-item hv-center xl:h-7 xl:w-7 w-5 h-5 cursor-pointer rounded-full"
            onClick={handleAddToCart}
          >
            <FaPlus className="xl:text-sm text-[10px]" />
          </span>
        </div>
      </div>
    </div>
  );
}
