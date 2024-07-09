import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { PiHeartBold, PiPackage } from "react-icons/pi";
import { RiShareForward2Fill } from "react-icons/ri";
import { RxCaretLeft } from "react-icons/rx";
import { TbBus, TbCurrencyNaira } from "react-icons/tb";
import { shop } from "@/data";
import { useRouter } from "next/router";

import { useContext } from "react";
import { Context } from "@/pages/_app";

export default function Product({productId}) {

  const router = useRouter();

  const { state, dispatch } = useContext(Context);

  const product = shop[Number(productId) - 1];

  const [ activeColor, setActiveColor ] = useState(0);
  const [ activeSize, setActiveSize ] = useState("S");
  const [ tab, setTab ] = useState("descriptions");

  const productDetails = shop.filter(item => item.type === product.type);

  const { id, name, desc, price, img, type } = product;
  
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: {
      id,
      name,
      desc,
      price,
      img,
      type,
    } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: {
      id,
      name,
      desc,
      price,
      img,
      type,
    } });
  };

  return (
    <main>

      <div className="flex md:justify-end items-center justify-between mt-4">
        <div className="md:hidden">
          <RxCaretLeft className="text-4xl" onClick={() => {
            router.back();
          }} />
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
          <div className="flex-col justify-between shrink-0 hidden lg:flex mx-4 md:mx-0">
            {
              productDetails.map(product => {
                return (
                  <div className="p-1 cursor-pointer hover:border-2 border-primary" key={product.img}>
                    <Image
                      src={product.img}
                      alt="dress"
                      width={1000}
                      height={1000}
                      className="w-16 h-14 object-cover"
                      onClick={() => {router.push(`/products/${product.id}`)}}
                    />
                  </div>
                )
              })
            }

          </div>

          <div className="grid md:grid-cols-2 grid-col-1 gap-8 grow">
            <div>
              <div className="md:h-full h-80 w-full relative">
                <Image
                  src={product.img}
                  fill
                  alt="corporate dress"
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
                  <h3 className="font-bold text-primary md:text-xl text-lg">{product.price}</h3>
                </div>
              </div>

              <div className="mt-4">
                <ul className="w-full flex justify-between">
                  <li className={`${tab === "descriptions" ? "font-bold border-b-2 border-black" : "font-medium"} cursor-pointer hover:font-semibold pb-1 lg:text-xl text-base`} onClick={() => setTab("descriptions")}>Descriptions</li>
                  <li className={`${tab === "specifications" ? "font-bold border-b-2 border-black" : "font-medium"} cursor-pointer hover:font-semibold pb-1 lg:text-xl text-base`} onClick={() => setTab("specifications")}>
                    Specifications
                  </li>
                  <li className={`${tab === "details" ? "font-bold border-b-2 border-black" : "font-medium"} cursor-pointer hover:font-semibold pb-1 lg:text-xl text-base`} onClick={() => setTab("details")}>Details</li>
                </ul>

                <p className="text-gray-600 mt-2 w-full">
                  {
                    tab === "descriptions" && (
                      <span>
                        {product.name} - {product.desc}
                      </span>
                    )
                  }

{
                    tab === "specifications" && (
                      <span>
                        Specifications Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    )
                  }

{
                    tab === "details" && (
                      <span>
                        Details Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    )
                  }
                </p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Color</h5>

                <div className="mt-2 flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-gray-500 hv-center cursor-pointer" onClick={() => setActiveColor(0)}>
                    <div className={`h-7 w-7 rounded-full bg-gray-500 ${activeColor === 0 && "border-2"} border-gray-100`}></div>
                  </div>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-black hv-center cursor-pointer" onClick={() => setActiveColor(1)}>
                    <div className={`h-7 w-7 rounded-full bg-black ${activeColor === 1 && "border-2"} border-gray-100`}></div>
                  </div>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-yellow-500 hv-center cursor-pointer" onClick={() => setActiveColor(2)}>
                    <div className={`h-7 w-7 rounded-full bg-yellow-500 ${activeColor === 2 && "border-2"} border-gray-100`}></div>
                  </div>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-red-500 hv-center cursor-pointer" onClick={() => setActiveColor(3)}>
                    <div className={`h-7 w-7 rounded-full bg-red-500 ${activeColor === 3 && "border-2"} border-gray-100`}></div>
                  </div>
                  <div className="w-8 h-8 shrink-0 rounded-full bg-purple-500 hv-center cursor-pointer" onClick={() => setActiveColor(4)}>
                    <div className={`h-7 w-7 rounded-full bg-purple-500 ${activeColor === 4 && "border-2"} border-gray-100`}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Size</h5>

                <div className="mt-2 flex items-center gap-4">
                  <span className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "S" && "bg-primary text-white"}`} onClick={() => setActiveSize("S")}>
                    S
                  </span>
                  <span className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "M" && "bg-primary text-white"}`} onClick={() => setActiveSize("M")}>
                    M
                  </span>
                  <span className={`border cursor-pointer rounded px-4 py-2 font-semibold ${activeSize === "L" && "bg-primary text-white"}`} onClick={() => setActiveSize("L")}>
                    L
                  </span>

                  <span className={`border cursor-pointer rounded px-2.5 py-2 font-semibold ${activeSize === "XL" && "bg-primary text-white"}`} onClick={() => setActiveSize("XL")}>
                    XL
                  </span>

                  <span className="text-primary font-medium cursor-pointer">
                    See Chart
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-bold hidden md:block">Quantity</h5>

                <div className="mt-8 md:mt-4 flex flex-wrap justify-center md:justify-normal gap-8">
                  <div className="px-4 py-3 rounded-lg border-2 border-primary v-center gap-8">
                    <span className="bg-gray-400 hv-center h-6 w-6 cursor-pointer rounded-full" onClick={handleRemoveFromCart}>
                      <FaMinus className="text-white text-sm" />
                    </span>
                    <span className="text-gray-400 font-medium text-sm">{state.cart.find(item => item.id === product.id)?.qty || 0}</span>
                    <span className="bg-primary hv-center h-6 w-6 cursor-pointer rounded-full" onClick={handleAddToCart}>
                      <FaPlus className="text-white text-sm" />
                    </span>
                  </div>

                  <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 px-24 w-full md:w-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-end -mx-4 md:mx-0">
        <div className="lg:col-start-2 lg:pl-10 xl:w-1/2">
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
                    <span className="">50,000</span>
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

  const { product: productId } = ctx.query;
  return {
    props: {
      productId,
    }
  }
}