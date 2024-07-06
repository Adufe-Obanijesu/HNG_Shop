import Image from "next/image";

import { IoHeart } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Product({ name, desc, price, img }) {
  return (
    <div className="space-y-2 hover:scale-[1.02] transition-item">
      <Image
        src={img}
        alt={name}
        width={1000}
        height={1000}
        className="h-60 object-cover object-top rounded-t-lg"
      />
      <div>
        <div className="flex justify-between">
          <h4 className="font-bold text-xl">{name}</h4>

          <IoHeart className="text-2xl text-red-500 cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>

      <div className="flex gap-2">
        <div className="flex gap-1">
          <GoStarFill className="text-orange-400 text-lg" />
          <GoStarFill className="text-orange-400 text-lg" />
          <GoStarFill className="text-orange-400 text-lg" />
          <GoStarFill className="text-orange-400 text-lg" />
          <GoStarFill className="text-gray-300 text-lg" />
        </div>

        <span className="text-gray-500 font-medium">4.8 (222)</span>
      </div>

      <div className="flex justify-between">
        <div className="v-center">
          <TbCurrencyNaira className="text-3xl" />
          <span className="font-bold text-xl">{price}</span>
        </div>

        <div className="v-center gap-4">
          <span className="bg-gray-400 hv-center h-7 w-7 cursor-pointer rounded-full">
            <FaMinus className="text-white text-sm" />
          </span>
          <span className="text-lg font-bold">1</span>
          <span className="bg-black hv-center h-7 w-7 cursor-pointer rounded-full">
            <FaPlus className="text-white text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
}
