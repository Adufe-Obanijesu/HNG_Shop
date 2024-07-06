import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { PiPackage } from "react-icons/pi";
import { TbBus, TbCurrencyNaira } from "react-icons/tb";

export default function Product() {
  return (
    <main>
      <section>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between shrink-0">
            <Image
              src="/img/product/1.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/2.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/3.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/4.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/5.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/6.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/7.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
            <Image
              src="/img/product/8.png"
              alt="dress"
              width={1000}
              height={1000}
              className="w-16 h-14 object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="h-full w-full relative">
                <Image
                  src="/img/corporate_lady.png"
                  fill
                  alt="corporate dress"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="py-8">
              <div>
                <h3 className="font-bold text-2xl">Blaze Dress</h3>
                <div className="flex gap-1 items-center">
                  <GoStarFill className="text-orange-400 text-lg" />
                  <GoStarFill className="text-orange-400 text-lg" />
                  <GoStarFill className="text-orange-400 text-lg" />
                  <GoStarFill className="text-orange-400 text-lg" />
                  <GoStarFill className="text-gray-300 text-lg" />

                  <p className="text-sm text-gray-500">4.8 (222)</p>

                  <div className="w-[5px] h-[5px] rounded-full bg-gray-500"></div>

                  <p className="text-sm text-gray-500 underline">3 Reviews</p>
                </div>
              </div>

              <div className="v-center mt-4">
                <TbCurrencyNaira className="text-2xl text-primary" />
                <h3 className="font-bold text-primary text-xl">143,000</h3>
              </div>

              <div className="mt-4">
                <ul className="w-full flex justify-between">
                  <li className="font-bold text-xl">Descriptions</li>
                  <li className="text-xl text-gray-500 font-medium">
                    Specifications
                  </li>
                  <li className="text-xl text-gray-500 font-medium">Details</li>
                </ul>

                <p className="text-gray-600 mt-2">
                  Classic women&apos;s tailored suit from Arries place. Single
                  breasted design, notch lapel, two button closure, tailored fit
                  for a flattering silhouette.
                </p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Color</h5>

                <div className="mt-2 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                  <div className="w-8 h-8 rounded-full bg-black"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                  <div className="w-8 h-8 rounded-full bg-red-500"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Size</h5>

                <div className="mt-2 flex items-center gap-4">
                  <span className="border rounded px-4 py-2 font-semibold">
                    S
                  </span>
                  <span className="border rounded px-4 py-2 font-semibold">
                    M
                  </span>
                  <span className="border rounded px-4 py-2 font-semibold bg-primary text-white">
                    L
                  </span>

                  <span className="border rounded px-2.5 py-2 font-semibold">
                    XL
                  </span>

                  <span className="text-primary font-medium cursor-pointer">
                    See Chart
                  </span>
                </div>
              </div>

              <div>
                <div className="h5 font-bold">Quantity</div>

                <div className="mt-4 flex gap-8">
                  <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
                    <span className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full">
                      <FaMinus className="text-white text-sm" />
                    </span>
                    <span className="text-gray-400 font-medium text-sm">2</span>
                    <span className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full">
                      <FaPlus className="text-white text-sm" />
                    </span>
                  </div>

                  <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="col-start-2 pl-10">
          <p className="text-gray-700 v-center gap-1">
            <TbBus className="inline text-xl" />
            <span className="font-bold">Estimated Delivery:</span>
            <span className="font-medium">Jul 30 - Aug 03</span>
          </p>

          <p className="mt-2 text-gray-700 v-center gap-1">
            <PiPackage className="inline text-xl" />
            <span className="font-bold">Free Shipping & Returns:</span>
            <span className="font-medium">On all ordres over N50,000</span>
          </p>

          <div className="mt-6 w-full py-8 rounded-md bg-blue-100 flex justify-center">
            <div className="">
              <div>
                <Image
                  src="/img/trustbag.png"
                  width={1000}
                  height={1000}
                  alt="payment gateway"
                  className="w-full"
                />
              </div>

              <p className="font-medium text-center mt-4">
                Guarantee safe & secure checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
