import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { PiHeartBold, PiPackage } from "react-icons/pi";
import { RiShareForward2Fill } from "react-icons/ri";
import { RxCaretLeft } from "react-icons/rx";
import { TbBus, TbCurrencyNaira } from "react-icons/tb";
import { useRouter } from "next/router";

import { useContext } from "react";
import { Context } from "@/pages/_app";
import { fetchProduct, formatNumberWithCommas } from "@/utils/functions";

export default function Product({ product }) {
  const router = useRouter();

  const { state, dispatch } = useContext(Context);

  const [activeColor, setActiveColor] = useState("Gray");
  const [activeSize, setActiveSize] = useState("S");
  const [image, setImage] = useState(0);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        color: activeColor,
        size: activeSize,
      },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        ...product,
        color: activeColor,
        size: activeSize,
      },
    });
  };

  if (!product) {
    router.push("/products");

    return (
      <h3 className="text-2xl font-bold mb-6">
        Product not found! Redirecting you to our shop
      </h3>
    );
  }

  return (
    <main>
      <div className="flex md:justify-end items-center justify-between mt-4">
        <div className="md:hidden">
          <RxCaretLeft
            className="text-4xl"
            onClick={() => {
              router.back();
            }}
          />
        </div>
        <div className="flex gap-4">
          <span className="w-10 h-10 shrink-0 hv-center rounded-full border">
            <RiShareForward2Fill className="text-lg" />
          </span>

          <span className="w-10 h-10 shrink-0 hv-center rounded-full border">
            <PiHeartBold className="text-lg" />
          </span>
        </div>
      </div>

      <section className="-mx-4 md:mx-0 mt-4">
        <div className="flex gap-4">
          <div className="flex-col gap-4 shrink-0 hidden lg:flex mx-4 md:mx-0">
            {product.photos && product.photos.map((img, i) => {
              return (
                <div
                  className={`p-1 cursor-pointer border-2 ${image === i ? "border-primary" : "border-transparent hover:border-primary"}`}
                  key={img?.url}
                  onClick={() => setImage(i)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${img?.url}`}
                    alt="dress"
                    width={1000}
                    height={1000}
                    className="w-16 h-14 object-cover"
                  />
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 grid-col-1 gap-8 grow">
            <div>
              <div className="md:h-full h-80 w-full relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${product.photos[image].url}`}
                  fill
                  alt={product.name}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:py-8 mx-4 md:mx-0">
              <div className="flex justify-between items-center md:block">
                <div>
                  <h3 className="font-bold text-2xl">{product.name}</h3>
                  <div className="flex gap-1 items-center mt-2">
                    <GoStarFill className="text-orange-400 md:text-lg text-sm" />
                    <GoStarFill className="text-orange-400 md:text-lg text-sm" />
                    <GoStarFill className="text-orange-400 md:text-lg text-sm" />
                    <GoStarFill className="text-orange-400 md:text-lg text-sm" />
                    <GoStarFill className="text-gray-300 md:text-lg text-sm" />

                    <p className="text-sm text-gray-500">4.8 (222)</p>

                    <div className="w-[5px] h-[5px] rounded-full bg-gray-500"></div>

                    <p className="text-sm text-gray-500 underline">3 Reviews</p>
                  </div>
                </div>

                <div className="v-center mt-4">
                  <TbCurrencyNaira className="text-2xl text-primary" />
                  <h3 className="font-bold text-primary md:text-xl text-lg">
                    {formatNumberWithCommas(Number(product?.current_price))}
                  </h3>
                </div>
              </div>

              <div className="mt-4">
                <h4
                  className={`font-semibold cursor-pointer pb-1 lg:text-xl text-base`}
                >
                  Descriptions
                </h4>

                <p className="text-gray-600 mt-2 w-full">
                  {product.description}
                </p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Color</h5>

                <div className="mt-2 flex gap-4">
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-gray-500 hv-center cursor-pointer"
                    onClick={() => setActiveColor("Gray")}
                  >
                    <div
                      className={`h-7 w-7 rounded-full bg-gray-500 ${activeColor === "Gray" && "border-2"} border-gray-100`}
                    ></div>
                  </div>
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-black hv-center cursor-pointer"
                    onClick={() => setActiveColor("Black")}
                  >
                    <div
                      className={`h-7 w-7 rounded-full bg-black ${activeColor === "Black" && "border-2"} border-gray-100`}
                    ></div>
                  </div>
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-yellow-500 hv-center cursor-pointer"
                    onClick={() => setActiveColor("Yellow")}
                  >
                    <div
                      className={`h-7 w-7 rounded-full bg-yellow-500 ${activeColor === "Yellow" && "border-2"} border-gray-100`}
                    ></div>
                  </div>
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-red-500 hv-center cursor-pointer"
                    onClick={() => setActiveColor("Red")}
                  >
                    <div
                      className={`h-7 w-7 rounded-full bg-red-500 ${activeColor === "Red" && "border-2"} border-gray-100`}
                    ></div>
                  </div>
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-purple-500 hv-center cursor-pointer"
                    onClick={() => setActiveColor("Purple")}
                  >
                    <div
                      className={`h-7 w-7 rounded-full bg-purple-500 ${activeColor === "Purple" && "border-2"} border-gray-100`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Size</h5>

                <div className="mt-2 flex items-center gap-4">
                  <span
                    className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "S" && "bg-primary text-white"}`}
                    onClick={() => setActiveSize("S")}
                  >
                    S
                  </span>
                  <span
                    className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "M" && "bg-primary text-white"}`}
                    onClick={() => setActiveSize("M")}
                  >
                    M
                  </span>
                  <span
                    className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "L" && "bg-primary text-white"}`}
                    onClick={() => setActiveSize("L")}
                  >
                    L
                  </span>

                  <span
                    className={`border cursor-pointer rounded px-2.5 py-2 font-semibold ${activeSize === "XL" && "bg-primary text-white"}`}
                    onClick={() => setActiveSize("XL")}
                  >
                    XL
                  </span>

                  <span className="text-primary font-medium cursor-pointer">
                    See Chart
                  </span>
                </div>
              </div>

              <div className="mt-4">
                {state.cart.find((item) => item.id === product.id) ? (
                  <>
                    <h5 className="font-bold hidden md:block">Quantity</h5>

                    <div className="mt-8 md:mt-4 flex">
                      <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
                        <span
                          className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full"
                          onClick={handleRemoveFromCart}
                        >
                          <FaMinus className="text-white text-sm" />
                        </span>
                        <span className="text-gray-400 font-medium text-sm">
                          {state.cart.find((item) => item.id === product.id)
                            ?.qty || 0}
                        </span>
                        <span
                          className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full"
                          onClick={handleAddToCart}
                        >
                          <FaPlus className="text-white text-sm" />
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24 w-full md:w-auto"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                )}
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

          <div className="mt-6 w-full py-8 md:rounded-md bg-blue-100 px-4 flex justify-center">
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

export async function getServerSideProps(ctx) {
  const { product } = ctx.params;

  let response;

  try {
    response = await fetchProduct(`https://timbu-get-single-product.reavdev.workers.dev/${product}`);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      product: response.data || null,
    },
  };
}
