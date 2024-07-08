import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";

import { useContext } from "react";
import { Context } from "@/pages/_app";

export default function CheckoutItem({ name, color, size, img, qty, price }) {
  
  const { state, dispatch } = useContext(Context);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: {
      id,
      name,
      desc,
      price,
      img,
      type,
    } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: {
      id,
      name,
      desc,
      price,
      img,
      type,
    } });
  };

  const deleteItem = () => {
    dispatch({ type: "DELETE", payload: {
      id,
    } })
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-12 grid-cols-3 mt-4">
      <div className="col-span-2 lg:col-span-1 md:col-span-4 grid grid-cols-2 gap-2">
        <Image
          src={img}
          width={1000}
          height={1000}
          alt={name}
          className="h-full w-full object-top rounded-md object-cover"
        />
        <div>
          <h4 className="font-bold text-xl text-gray-800">{name}</h4>
          <div className="mt-2 text-gray-600">
            <p>Color: {color}</p>
            <p>Size: {size}</p>
          </div>

          <div className="mt-2 md:flex hidden gap-2">
            <button className="text-gray-400 underline cursor-pointer hover:text-gray-600">
              Edit
            </button>

            <button className="text-red-400 underline cursor-pointer hover:text-red-600" onClick={deleteItem}>
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex lg:col-span-1 md:col-span-2 justify-center hidden">
        <div>
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{price}</h3>
          </div>
        </div>
      </div>

      <div className="md:flex lg:col-span-1 md:col-span-4 justify-center hidden">
        <div>
          <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
            <span className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full" onClick={handleRemoveFromCart}>
              <FaMinus className="text-white text-sm" />
            </span>
            <span className="text-gray-400 font-medium text-sm">{qty}</span>
            <span className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full" onClick={handleAddToCart}>
              <FaPlus className="text-white text-sm" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex lg:col-span-1 md:col-span-2 justify-end">
        <div>
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{price * qty}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
