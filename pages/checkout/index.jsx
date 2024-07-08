import CheckoutItem from "@/components/CheckoutItem";
import { checkout } from "@/data";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import { HiPencil } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";

export default function Checkout() {
  return (
    <main>
      <section className="border-b pb-8 mt-8">
        <h3 className="font-bold text-3xl mb-8 text-center">Checkout</h3>

        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-12 grid-cols-2">
            <h4 className="md:col-span-4 lg:col-span-1 border-b pb-3 text-gray-600 font-medium">Product</h4>

            <h4 className="md:col-span-2 lg:col-span-1 hidden md:block border-b pb-3 text-gray-600 font-medium text-center">
              Price
            </h4>

            <h4 className="md:col-span-4 lg:col-span-1 hidden md:block border-b pb-3 text-gray-600 font-medium text-center">
              Quantity
            </h4>

            <h4 className="md:col-span-2 lg:col-span-1 border-b pb-3 text-gray-600 font-medium text-end">
              Total
            </h4>
          </div>

          {checkout.map((item) => {
            const { name, color, size, price, qty, img } = item;

            return (
              <CheckoutItem
                key={name + price}
                name={name}
                color={color}
                size={size}
                price={price}
                qty={qty}
                img={img}
              />
            );
          })}
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-8">
            <div className="v-center justify-between p-4 bg-blue-50 rounded-md">
              <div>
                <h4 className="font-bold text-lg text-gray-700">
                  Shipping Address
                </h4>
                <p className="font-medium text-sm text-gray-700">
                  12, Jimoh Lawal street, Alimosho Lagos.
                </p>
              </div>

              <span className="w-10 h-10 bg-primary rounded-full hv-center">
                <HiPencil className="text-white" />
              </span>
            </div>

            <div className="v-center justify-between p-4 bg-blue-50 rounded-md">
              <div>
                <h4 className="font-bold text-lg text-gray-700">
                  Contact Information
                </h4>
                <p className="font-medium text-sm text-gray-700">
                  +23400009000
                </p>
                <p className="font-medium text-sm text-gray-700">
                  Raynejay@gmail.com
                </p>
              </div>

              <span className="w-10 h-10 bg-primary rounded-full hv-center">
                <HiPencil className="text-white" />
              </span>
            </div>

            <div className="flex justify-end">
              <div className="border-y py-2 flex justify-end">
                <div className="text-lg text-red-500 font-semibold">
                  Shipping Fee
                </div>

                <div className="v-center ml-10">
                  <TbCurrencyNaira className="text-xl" />
                  <h3 className="font-bold">3,000</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full xl:w-2/3">
              <div className="rounded-lg p-4 bg-blue-50 space-y-4">
                <div className="flex justify-between">
                  <h4 className="text-lg font-bold">Payment Method</h4>

                  <span className="w-8 h-8 bg-primary rounded-full hv-center">
                    <HiPencil className="text-white" />
                  </span>
                </div>

                <div className="flex">
                  <div className="btn btn-white w-auto">Card</div>
                </div>

                <div className="flex xl:gap-8 gap-3">
                  <Image
                    src="/img/card.png"
                    alt="card"
                    width={1000}
                    height={1000}
                    className="w-full md:w-[85%] lg:w-full h-auto"
                  />

                  <div>
                    <button className="bg-primary py-4 px-2 rounded-full">
                      <FaPlus className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-8 mt-12 hidden md:block" />

        <div className="hidden md:flex justify-end">
          <div className="v-center gap-8">
            <h4 className="font-semibold text-xl">Total:</h4>

            <div className="v-center ml-10">
              <TbCurrencyNaira className="text-xl text-primary" />
              <h3 className="font-bold text-primary">143,000</h3>
            </div>
          </div>
        </div>

        <div className="h-center mt-8">
          <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24 w-full md:w-auto">
            Place Order
          </button>
        </div>
      </section>

      <br />
      <br />

    </main>
  );
}
