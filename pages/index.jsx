import Product from "@/components/Product";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";
import { useContext } from "react";

import { Context } from "@/pages/_app";

import { shop } from "@/data";
import Countdown from "@/components/Countdown";
import Link from "next/link";

export default function Home() {

  const corporate = shop.filter(product => product.type === "corporate").slice(0,4);
  const dress = shop.filter(product => product.type === "dress").slice(0,4);

  const { state } = useContext(Context);

  return (
    <main>
      <section className="bg-ascent rounded-lg xl:px-48 px-8 mt-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="xl:flex">
            <div className="text-center py-8 text-white space-y-6">
              <div className="space-y-">
                <h2 className="font-bold md:text-5xl text-3xl">ULTIMATE</h2>


                <object type="image/svg+xml" data="/svgs/SALES.svg" height="118" className="xl:w-[355px] xl:h-[118px] md:w-[250px] md:h-[90px] w-[175px] h-[90px] mx-auto xl:mx-0 -mt-6 md:mt-0">
                  Your browser does not support SVG
                </object>
              </div>

              <div className="h-center">
                <div className="flex justify-between gap-8">
                  <span>Get 25% off</span>
                  <span>|</span>
                  <span>Free Shipping</span>
                </div>
              </div>

              <div>
                <Link href="/products">
                  <button className="btn">Shop Now</button>
                </Link>
              </div>

              <div className="flex flex-col items-center">
                <h6 className="mb-2">Hurry Before It&apos;s Too Late!</h6>
                <Countdown />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
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

      <section className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="bg-base-blue md:h-[550px] h-[400px]">
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
            className="w-full md:h-40 h-28 object-cover"
            alt="arries"
          />

          <div className="grow space-y-3 hv-center flex-col">
            <div className="h-center">
              <object type="image/svg+xml" data="/svgs/NEW.svg" className="xl:w-[160px] xl:h-[47px] md:w-[110px] md:h-[35px] w-[70px] h-[25px]">
                Your browser does not support SVG
              </object>
            </div>
            <h1 className="font-semibold text-center xl:text-6xl md:text-4xl text-3xl">ARRIVAL</h1>
            <div className="h-center">
              <Link href="/products">
                <button className="btn btn-border mx-auto">Shop Now</button>
              </Link>
            </div>
          </div>

          <Image
            src="/img/opening3.png"
            width={1000}
            height={1000}
            className="w-full md:h-40 h-28 object-cover"
            alt="arries"
          />
        </div>

        <div className="bg-base-blue md:h-[550px] hidden md:block">
          <Image
            src="/img/opening4.png"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top"
            alt="arries"
          />
        </div>
      </section>

      <section className="">

        <h3 className="font-bold md:text-3xl text-2xl mb-6">Popular Products</h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-3">
          {corporate.map((product) => {
            const { name, desc, price, img, id, type } = product;

            return (
              <Product
                key={name + img + price}
                id={id}
                type={type}
                name={name}
                desc={desc}
                price={price}
                img={img}
              />
            );
          })}

          {dress.map((product) => {
            const { name, desc, price, img, id, type } = product;

            return (
              <Product
                key={name + img + price}
                id={id}
                type={type}
                name={name}
                desc={desc}
                price={price}
                img={img}
              />
            );
          })}
        </div>

        <div className="flex justify-end mt-8">
          <Link href="/products">
            <button className="secondary-button">
              View more
            </button>
          </Link>
        </div>
      </section>

      <Testimonials />

      <br />
      <br />
      <br />
    </main>
  );
}
