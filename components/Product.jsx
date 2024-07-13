import Image from "next/image";

import { IoHeart } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { TbCurrencyNaira } from "react-icons/tb";
import Link from "next/link";

import { formatNumberWithCommas } from "@/utils/functions";

export default function Product({ product }) {

  return (
    <Link href={`/products/${product?.id}`}>
      <div className="space-y-2 hover:scale-[1.02] hover:border-b-2 pb-2 transition-item">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product?.photos[0].url}`}
          alt={product?.name}
          width={1000}
          height={1000}
          className="h-60 object-cover object-top rounded-t-lg"
        />

        <div>
          <div className="flex justify-between">
            <h4 className="font-bold md:text-xl text-lg">{product?.name}</h4>

            <IoHeart className="md:text-2xl text-xl text-red-500 cursor-pointer" />
          </div>
          <p className="text-gray-400 text-sm tracking-wide">
            {product?.description}
          </p>
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
            <span className="font-bold md:text-lg">
              {formatNumberWithCommas(Number(product?.current_price[0].NGN[0]))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
