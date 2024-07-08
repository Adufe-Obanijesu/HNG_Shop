import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";

export default function CartItem({ name, color, size, img, qty, price }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-3 md:mt-4 mt-6">
      <div className="grid col-span-2 md:col-span-3 grid-cols-2 gap-2 md:gap-4">
        <div>
          <Image
            src={img}
            width={1000}
            height={1000}
            alt={name}
            className="h-full w-full object-top rounded-md object-cover"
          />
        </div>
        <div className="pt-4">
          <h4 className="font-bold text-xl text-gray-800">{name}</h4>
          <div className="mt-4 text-gray-600">
            <p>Color: {color}</p>
            <p>Size: {size}</p>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="text-gray-400 underline cursor-pointer hover:text-gray-600">
              Edit
            </button>

            <button className="text-red-500 underline cursor-pointer hover:text-red-600">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="h-center">
        <div className="flex md:block flex-col justify-between items-end">
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{price}</h3>
          </div>

          <div className="px-4 py-2 rounded-lg border-2 border-primary v-center gap-3 md:hidden">
            <span className="bg-gray-400 hv-center h-5 w-5 cursor-pointer rounded-full">
              <FaMinus className="text-white text-[10px]" />
            </span>
            <span className="text-gray-400 font-medium text-sm">{qty}</span>
            <span className="bg-primary hv-center h-5 w-5 cursor-pointer rounded-full">
              <FaPlus className="text-white text-[10px]" />
            </span>
          </div>
        </div>
      </div>

      <div className="md:flex justify-end hidden  md:col-span-2 xl:col-span-1">
        <div>
          <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
            <span className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full">
              <FaMinus className="text-white text-sm" />
            </span>
            <span className="text-gray-400 font-medium text-sm">{qty}</span>
            <span className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full">
              <FaPlus className="text-white text-sm" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
