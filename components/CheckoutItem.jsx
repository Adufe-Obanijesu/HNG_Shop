import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";

import { useContext } from "react";
import { Context } from "@/pages/_app";
import Link from "next/link";
import { formatNumberWithCommas } from "@/utils/functions";

export default function CheckoutItem({
  product
}) {
  const { dispatch } = useContext(Context);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const deleteItem = () => {
    dispatch({
      type: "DELETE",
      payload: {
        id: product.id,
      },
    });
  };
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-12 grid-cols-3 mt-4">
      <div className="col-span-2 lg:col-span-1 md:col-span-4 grid grid-cols-2 gap-2">
        <Link href={`/products/${product.id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.photos[0].url}`}
            width={1000}
            height={1000}
            alt={product.name}
            className="h-full w-full object-top rounded-md object-cover"
          />
        </Link>
        <div>
          <h4 className="font-bold text-xl text-gray-800">{name}</h4>
          <div className="mt-2 text-gray-600">
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
          </div>

          <div className="mt-2 md:flex hidden gap-2">
            <button className="text-gray-400 underline cursor-pointer hover:text-gray-600">
              Edit
            </button>

            <button
              className="text-red-400 underline cursor-pointer hover:text-red-600"
              onClick={deleteItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex lg:col-span-1 md:col-span-2 justify-center hidden">
        <div>
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{formatNumberWithCommas(Number(product?.current_price))}</h3>
          </div>
        </div>
      </div>

      <div className="md:flex lg:col-span-1 md:col-span-4 justify-center hidden">
        <div>
          <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
            <span
              className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full"
              onClick={handleRemoveFromCart}
            >
              <FaMinus className="text-white text-sm" />
            </span>
            <span className="text-gray-400 font-medium text-sm">{product.qty}</span>
            <span
              className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full"
              onClick={handleAddToCart}
            >
              <FaPlus className="text-white text-sm" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex lg:col-span-1 md:col-span-2 justify-end">
        <div>
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{formatNumberWithCommas(Number(product?.current_price) * product.qty)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
