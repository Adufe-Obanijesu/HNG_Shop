import CartItem from "@/components/CartItem";
import Testimonials from "@/components/testimonials/Testimonials";

import { TbBus, TbCurrencyNaira } from "react-icons/tb";
import { PiPackage } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

import { Context } from "@/pages/_app";
import { useContext } from "react";
import { formatNumberWithCommas } from "@/utils/functions";

export default function Cart() {
  const { state, dispatch } = useContext(Context);

  const subtotal = state.cart.reduce((total, item) => {
    return total + item.current_price * item.qty;
  }, 0);

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <main>
      <h2 className="font-bold text-2xl text-center mt-8">
        Carts ({state.cart.length || 0})
      </h2>

      <div className="md:flex justify-end mt-4 hidden">
        <Link href="/products">
          <span className="underline text-primary cursor-pointer font-semibold">
            Continue shopping
          </span>
        </Link>
      </div>

      <section className="mt-4">
        <div className="grid lg:grid-cols-4 gap-4 border-b pb-8">
          <div className="lg:col-span-3 border-t pt-2">
            {state.cart.length === 0 && (
              <div className="lg:col-span-3 mt-2">
                <h4 className="font-bold text-xl">No item found. Go shop!!!</h4>
              </div>
            )}

            {state.cart &&
              state.cart.map((item) => {
                return <CartItem key={item.id} product={item} />;
              })}

            {state.cart.length > 0 && (
              <div className="flex justify-end mt-4 lg:mt-0">
                <button
                  className="py-2 px-4 rounded-md bg-red-500 hover:bg-red-600 text-white"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 mt-4 md:w-2/3 lg:w-auto">
            <div className="order-2 md:order-1">
              <h4 className="font-bold text-2xl mb-4">Summary</h4>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>

                  <div className="v-center">
                    <TbCurrencyNaira className="text-lg text-gray-600" />
                    <h3 className="text-gray-600">
                      {formatNumberWithCommas(subtotal)}
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>

                  <div className="v-center">
                    <TbCurrencyNaira className="text-lg text-gray-600" />
                    <h3
                      className={`text-gray-600 ${state.cart.length === 0 && "line-through"}`}
                    >
                      10,000
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h4 className="font-bold text-lg">Total</h4>

                  <div className="v-center">
                    <TbCurrencyNaira className="text-lg" />
                    <h3
                      className={`font-bold ${state.cart.length === 0 && "line-through"}`}
                    >
                      {formatNumberWithCommas(subtotal + 10000)}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:hidden">
                {state.cart.length === 0 && (
                  <p className="text-red-500 mb-2 text-center">No item found</p>
                )}
                <Link
                  href={`${state.cart.length === 0 ? "#" : "/checkout"}`}
                  onClick={() => {
                    if (state.cart.length === 0) {
                      alert("No product added");
                    }
                  }}
                >
                  <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 w-full">
                    Checkout
                  </button>
                </Link>
              </div>

              <div className="flex justify-center mt-4 md:hidden">
                <Link href="/products">
                  <span className="underline text-primary cursor-pointer font-semibold">
                    Continue shopping
                  </span>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h4 className="font-medium text-xl mb-4">Promo & Discount</h4>

              <div>
                <input
                  type="text"
                  className="py-2 px-4 rounded-md bg-gray-100 w-full"
                  placeholder="Enter Promo Code"
                />
              </div>

              <div className="mt-8 hidden md:block">
                {state.cart.length === 0 && (
                  <p className="text-red-500 mb-2 text-center">No item found</p>
                )}
                <Link
                  href={`${state.cart.length === 0 ? "#" : "/checkout"}`}
                  onClick={() => {
                    if (state.cart.length === 0) {
                      alert("No product added");
                    }
                  }}
                >
                  <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 w-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-end -mx-4 md:mx-0">
        <div className="lg:col-start-2 lg:pl-10 w-full lg:w-auto xl:w-1/2">
          <p className="text-gray-700 v-center gap-1 mx-4 md:mx-0">
            <TbBus className="inline text-xl shrink-0" />
            <span className="font-bold">Estimated Delivery:</span>
            <span className="font-medium">Jul 30 - Aug 03</span>
          </p>

          <p className="mt-2 text-gray-700 v-center gap-1 mx-4 md:mx-0">
            <PiPackage className="inline text-xl shrink-0" />
            <span className="font-bold">Free Shipping & Returns:</span>
            <span className="font-medium">
              On all orders over
              <span className="shrink-0 whitespace-nowrap">
                <TbCurrencyNaira className="text-xl mb-[3px] inline" />
                <span className="">500,000</span>
              </span>
            </span>
          </p>

          <div className="mt-6 w-full py-8 px-4 md:rounded-md bg-blue-100 flex justify-center">
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
