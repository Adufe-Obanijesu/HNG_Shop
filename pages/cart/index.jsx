import CartItem from "@/components/CartItem";
import Testimonials from "@/components/testimonials/Testimonials";

import { TbBus } from "react-icons/tb";
import { PiPackage } from "react-icons/pi";

import { checkout } from "@/data";
import Image from "next/image";

export default function Cart() {
    return (
        <main>
            <h2 className="font-bold text-2xl text-center mt-8">
                Carts (2)
            </h2>
            
            <div className="flex justify-end mt-4">
                <span className="underline text-primary cursor-pointer font-semibold">
                    Continue shopping
                </span>
            </div>

            <section className="mt-4">
                <div className="grid grid-cols-4 gap-4 border-b pb-8">
                    <div className="col-span-3 border-t pt-2">
                        {
                            checkout.map(item => {
                                const { name, color, size, price, qty, img } = item;

                                return <CartItem key={name+price} name={name} color={color} size={size} price={price} qty={qty} img={img} />
                            })
                        }
                    </div>

                    <div>
                        <h4 className="font-bold text-2xl mb-4">
                            Summary
                        </h4>

                        <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-gray-600">
                                Subtotal
                            </p>

                            <p className="text-gray-600">
                                N30,000
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-gray-600">
                                Subtotal
                            </p>

                            <p className="text-gray-600">
                                N110,000
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <h4 className="font-bold text-lg">
                                Subtotal
                            </h4>

                            <p className="font-bold text-lg">
                                N143,000
                            </p>
                        </div>

                        </div>

                        <h4 className="font-medium text-xl mt-8 mb-4">
                            Promo & Discount
                        </h4>
                        
                        <div>
                            <input type="text" className="py-2 px-4 rounded-md bg-gray-100 w-full" placeholder="Enter Promo Code" />
                        </div>

                        <div className="mt-8">
                            <button className="bg-primary border-primary border-2 text-white hover:bg-transparent rounded-lg hover:text-primary py-2 w-full">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <p className="text-gray-700 v-center gap-1">
                    <TbBus className="inline text-xl" />
                    <span className="font-bold">
                        Estimated Delivery:
                    </span>
                    <span className="font-medium">
                        Jul 30 - Aug 03
                    </span>
                </p>

                <p className="mt-2 text-gray-700 v-center gap-1">
                    <PiPackage className="inline text-xl" />
                    <span className="font-bold">
                        Free Shipping & Returns:
                    </span>
                    <span className="font-medium">
                        On all ordres over N50,000
                    </span>
                </p>
                
                <div className="mt-6 w-full py-8 rounded-md bg-blue-100 flex justify-center">
                    <div className="">
                        <div>
                            <Image src="/img/trustbag.png" width={1000} height={1000} alt="payment gateway" className="w-full" />
                        </div>

                        <p className="font-medium text-center mt-4">
                            Guarantee safe & secure checkout
                        </p>
                    </div>
                </div>
            </section>

            <Testimonials />
        </main>
    )
}