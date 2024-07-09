import CheckoutItem from "@/components/CheckoutItem";
import { checkout } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

import { HiPencil } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";

import { Context } from "@/pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";
import { formatNumberWithCommas } from "@/utils/functions";

export default function Checkout() {
  const router = useRouter();

  const { state, dispatch } = useContext(Context);

  const subtotal = state.cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const [pay, setPay] = useState("pending");

  const payment = () => {
    setPay("inProgress");
    dispatch({ type: "CLEAR" });
    setTimeout(() => setPay("successful"), 2000);
  };

  const reset = () => {
    setPay("pending");
    router.push("/products");
  };

  return (
    <main>
      <section className="border-b pb-8 mt-8">
        <h3 className="font-bold text-3xl mb-8 text-center">Checkout</h3>

        <div>
          {state.cart.length !== 0 && (
            <div className="grid lg:grid-cols-4 md:grid-cols-12 grid-cols-2">
              <h4 className="md:col-span-4 lg:col-span-1 border-b pb-3 text-gray-600 font-medium">
                Product
              </h4>

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
          )}

          {state.cart.length === 0 && (
            <div className="lg:col-span-3 mt-4">
              <h4 className="font-bold text-2xl text-center">
                No item found. Go shop!!!
              </h4>
            </div>
          )}

          {state.cart &&
            state.cart.map((item) => {
              const { id, name, price, qty, img, desc, type } = item;

              return (
                <CheckoutItem
                  key={name + price}
                  id={id}
                  desc={desc}
                  name={name}
                  color="Pink, Blue"
                  size="M, L"
                  price={price}
                  qty={qty}
                  img={img}
                  type={type}
                />
              );
            })}
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-8">
            <div className="v-center justify-between p-4 bg-gray-100 rounded-md">
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

            <div className="v-center justify-between p-4 bg-gray-100 rounded-md">
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
                  <h3
                    className={`font-bold ${state.cart.length === 0 && "line-through"}`}
                  >
                    10,000
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full xl:w-2/3">
              <div className="rounded-lg p-4 bg-gray-100 space-y-4">
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
                    className="w-full md:w-[85%] max-w-[85%] lg:w-full h-auto"
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

        <div className="hidden md:flex flex-col items-end">
          <div className="v-center gap-8">
            <h4 className="font-semibold text-xl">Total:</h4>

            <div className="v-center ml-10">
              <TbCurrencyNaira className="text-xl text-primary" />
              <h3 className="font-bold text-primary">
                {state.cart.length === 0 ? 0 : formatNumberWithCommas(subtotal + 10000)}
              </h3>
            </div>
          </div>

          <div className="h-center mt-8">
          <button
            className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24 w-full md:w-auto"
            onClick={payment}
          >
            Checkout
          </button>
        </div>
        </div>

        <div className="h-center mt-8 md:hidden">
          <button
            className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24 w-full md:w-auto"
            onClick={payment}
          >
            Checkout
          </button>
        </div>

        
      </section>

      <br />
      <br />

      {pay === "inProgress" && (
        <div className="">
          <div className="bg-black bg-opacity-50 z-40 h-full w-full backdrop-blur-sm fixed top-0 left-0"></div>
          <div className="fixed top-0 left-0 h-full w-full hv-center z-50">
            <div className="bg-white px-10 py-8 lg:w-1/4 md:w-2/5 rounded-2xl">
              <div className="h-center">
                <Image
                  src="/img/loader.png"
                  alt="loader"
                  width={50}
                  height={50}
                  className="animate-spin"
                />
              </div>

              <div className="mt-4">
                <h4 className="text-center font-bold text-md">
                  Payment in progress
                </h4>

                <p className="text-center font-medium text-sm">
                  Please, wait a few moments
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {pay === "successful" && (
        <div>
          <div className="fixed top-0 left-0 h-full w-full hv-center z-50">
            <div
              className="bg-black bg-opacity-50 h-full w-full backdrop-blur-sm fixed top-0 left-0 cursor-pointer"
              onClick={reset}
            ></div>

            <div className="bg-white max-w-[90%] px-10 pb-8 lg:w-1/4 md:w-2/5 rounded-2xl z-20">
              <div className="h-center">
                <div className="hv-center w-14 h-14 border-4 -mt-7 border-white shadow-lg rounded-full bg-primary">
                  <FaCheck className="text-2xl text-white" />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-center font-bold text-md">Done!</h4>

                <p className="text-center font-medium text-sm mt-2">
                  Your Card has been successfully charged.
                </p>

                <div className="h-center mt-4">
                  <button className="bg-gray-200 px-4 py-2 rounded-2xl text-gray-600 hover:text-white hover:bg-primary">
                    Track My Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
