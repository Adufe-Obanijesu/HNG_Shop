import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";

export default function CartItem({ name, color, size, img, qty, price }) {
  return (
    <div className="grid grid-cols-3 mt-4">
      <div className="grid col-span-2 md:col-span-1 grid-cols-2 gap-2">
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

            <button className="text-red-400 underline cursor-pointer hover:text-red-600">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="h-center">
        <div>
          <div className="v-center">
            <TbCurrencyNaira className="text-xl" />
            <h3 className="font-bold">{price}</h3>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center hidden">
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
