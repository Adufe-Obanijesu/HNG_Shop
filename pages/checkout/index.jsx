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
import { Email, TextInput } from "@/components/Input";
import axios from "axios";

export default function Checkout() {
  const router = useRouter();

  const [checkoutData, setCheckoutData] = useState({});

  const handleInput = (e) => {
    const newData = {
      ...checkoutData,
      [e.target.name]: e.target.value,
    };

    setCheckoutData(newData);
  };

  const handlePayment = (e) => {
    if (e.target.name === "cvv") {
      const allowedPattern = /^[\d ]*$/;
      if (!allowedPattern.test(e.target.value)) return;
      if (e.target.value.length > 3) return;
    }

    if (e.target.name === "expDate") {
      if (e.target.value.length > 5) return;
      const allowedPattern = /^[\d/ ]*$/;
      if (!allowedPattern.test(e.target.value)) return;
      if (
        e.target.value.length === 2 &&
        checkoutData.expDate.length <= e.target.value.length
      ) {
        if (e.target.value[e.target.value.length - 1] == "/") {
          e.target.value = "0" + e.target.value.slice(0, 1);
        }
        if (Number(e.target.value) > 12) e.target.value = 12;
        e.target.value += "/";
      }
    }

    const newData = {
      ...checkoutData,
      [e.target.name]: e.target.value,
    };

    setCheckoutData(newData);
  };

  const { state, dispatch } = useContext(Context);

  const subtotal = state.cart.reduce((total, item) => {
    return total + item.current_price * item.qty;
  }, 0);

  const [pay, setPay] = useState("pending");

  const payment = async (e) => {
    e.preventDefault();

    setPay("inProgress");

    const { fname, lname, email, phone } = checkoutData;
    const data = {
      organization_id: process.env.NEXT_PUBLIC_ORG_ID,
      Appid: process.env.NEXT_PUBLIC_APP_ID,
      Apikey: process.env.NEXT_PUBLIC_API_KEY,
      first_name: fname,
      last_name: lname,
      email,
      phone,
      mode_of_payment: "Card",
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/sales",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response);
      dispatch({ type: "CLEAR" });
      setPay("successful");
    } catch (err) {
      console.log(err);
    }
  };

  const reset = () => {
    setPay("pending");
    localStorage.removeItem("hng_arries_cart");
    router.push("/products");
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
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
              return <CheckoutItem key={item.id} product={item} />;
            })}

          {state.cart.length > 0 && (
            <div className="flex justify-end">
              <button
                className="py-2 px-4 rounded-md bg-red-500 hover:bg-red-600 text-white"
                onClick={clearCart}
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="flex items-end flex-col">
        <div className="border-b py-2 flex justify-end">
          <div className="text-lg text-red-500 font-semibold">Subtotal</div>

          <div className="v-center ml-10">
            <TbCurrencyNaira className="text-xl" />
            <h3
              className={`font-bold ${state.cart.length === 0 && "line-through"}`}
            >
              {formatNumberWithCommas(Number(subtotal))}
            </h3>
          </div>
        </div>
        <div className="border-b py-2 flex justify-end">
          <div className="text-lg text-red-500 font-semibold">Shipping Fee</div>

          <div className="v-center ml-10">
            <TbCurrencyNaira className="text-xl" />
            <h3
              className={`font-bold ${state.cart.length === 0 && "line-through"}`}
            >
              10,000
            </h3>
          </div>
        </div>
        <div className="v-center gap-8 mt-2">
          <h4 className="font-semibold text-xl">Total:</h4>

          <div className="v-center ml-10">
            <TbCurrencyNaira className="text-xl text-primary" />
            <h3 className="font-bold text-primary">
              {state.cart.length === 0
                ? 0
                : formatNumberWithCommas(subtotal + 10000)}
            </h3>
          </div>
        </div>
      </div>

      {/* <section>
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

        
      </section> */}

      <section>
        <h3 className="font-bold text-2xl mb-8 text-center">Billing Details</h3>
        <form onSubmit={payment}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <TextInput
                name="fname"
                label="Full Name"
                placeholder="John"
                value={checkoutData.fname}
                setData={handleInput}
              />
              <TextInput
                name="lname"
                label="Last Name"
                placeholder="Doe"
                value={checkoutData.lname}
                setData={handleInput}
              />
              <Email
                name="email"
                label="Full Name"
                placeholder="johndoe@gmail.com"
                value={checkoutData.email}
                setData={handleInput}
              />
              <TextInput
                name="phone"
                label="Phone Number"
                placeholder="0800 000 0000"
                value={checkoutData.phone}
                setData={handleInput}
              />
              <TextInput
                name="address"
                label="Street Address"
                placeholder="No 10, Street, State"
                value={checkoutData.address}
                setData={handleInput}
              />
            </div>

            <div>
              <TextInput
                name="city"
                label="City"
                placeholder="e.g Akure"
                value={checkoutData.city}
                setData={handleInput}
              />
              <TextInput
                name="state"
                label="State"
                placeholder="e.g Ondo"
                value={checkoutData.state}
                setData={handleInput}
              />
              <TextInput
                name="zipCode"
                label="Zip Code"
                placeholder="e.g 19007"
                value={checkoutData.zipCode}
                setData={handleInput}
              />
              <TextInput
                name="country"
                label="Country"
                placeholder="e.g Nigeria"
                value={checkoutData.country}
                setData={handleInput}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full mt-8">
            <h3 className="font-bold text-2xl mb-4">Payment</h3>
            <div>
              <TextInput
                name="cardNumber"
                label="Card Number"
                placeholder="e.g 5599 **** **** ****"
                value={checkoutData.cardNumber}
                setData={handleInput}
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  name="cvv"
                  label="CVV"
                  placeholder="***"
                  value={checkoutData.cvv}
                  setData={handlePayment}
                />
                <TextInput
                  name="expDate"
                  label="Expiry Date"
                  placeholder="**/**"
                  value={checkoutData.expDate}
                  setData={handlePayment}
                />
              </div>
            </div>

            <button className="btn border-2 border-primary w-full">
              Checkout
            </button>
          </div>
        </form>
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
