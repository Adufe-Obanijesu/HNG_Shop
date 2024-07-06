import Product from "@/components/Product";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";

import { products } from "@/data";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main>
      <section className="bg-ascent rounded-lg px-48 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex">
            <div className="text-center py-8 text-white space-y-6">
              <div className="space-y-">
                <h2 className="font-bold text-5xl">ULTIMATE</h2>

                <h1 className="outline-text text-ascent text-8xl">SALES</h1>
              </div>

              <div className="h-center">
                <div className="flex justify-between gap-8">
                  <span>Get 25% off</span>
                  <span>|</span>
                  <span>Free Shipping</span>
                </div>
              </div>

              <button className="btn">Shop Now</button>

              <div className="flex flex-col items-center">
                <h6 className="mb-2">Hurry Before It&apos;s Too Late!</h6>
                <Countdown />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end">
              <Image
                src="/img/hero.png"
                width={1000}
                height={1000}
                className="object-contain h-auto w-[290px] my-[5px]"
                alt="Arries"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4">
        <div className="bg-base-blue h-[500px]">
          <Image
            src="/img/opening1.png"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top"
            alt="arries"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/img/opening2.png"
            width={1000}
            height={1000}
            className="w-full h-40 object-cover"
            alt="arries"
          />

          <div className="grow space-y-2">
            <h1 className="outline-text-black text-white text-center text-4xl">
              NEW
            </h1>
            <h1 className="font-semibold text-center text-4xl">ARRIVAL</h1>
            <div className="h-center">
              <button className="btn btn-border mx-auto">Shop Now</button>
            </div>
          </div>

          <Image
            src="/img/opening3.png"
            width={1000}
            height={1000}
            className="w-full h-40 object-cover"
            alt="arries"
          />
        </div>

        <div className="bg-base-blue h-[500px]">
          <Image
            src="/img/opening4.png"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top"
            alt="arries"
          />
        </div>
      </section>

      <section className="grid grid-cols-4 gap-8">
        {products.map((product) => {
          const { name, desc, price, img } = product;

          return (
            <Product
              key={name + img + price}
              name={name}
              desc={desc}
              price={price}
              img={img}
            />
          );
        })}
      </section>

      <Testimonials />

      <br />
      <br />
      <br />
    </main>
  );
}
