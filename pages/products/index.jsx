import { FiSearch } from "react-icons/fi";
import { RiShareForwardBoxLine } from "react-icons/ri";
import { PiHeartBold } from "react-icons/pi";
import { categories, corporate, dress } from "@/data";
import Image from "next/image";
import Product from "@/components/Product";

export default function Products() {
  return (
    <main id="product-page">
      <section className="mt-8">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4">
            <li className="active">Women</li>
            <li className="">Kiddies</li>
            <li className="">Bridals</li>
            <li className="">Sales</li>
          </ul>

          <div className="v-center gap-4">
            <div className="bg-gray-100 rounded-lg hv-center px-4 py-2 gap-4">
              <FiSearch className="text-xl text-gray-700" />
              <input
                type="text"
                placeholder="Search for Products"
                className="bg-transparent focus:outline-none text-gray-700"
              />
            </div>

            <span className="w-10 h-10 hv-center rounded-full border">
              <RiShareForwardBoxLine className="text-lg" />
            </span>

            <span className="w-10 h-10 hv-center rounded-full border">
              <PiHeartBold className="text-lg" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-10 mt-8">
          {categories.map((category) => {
            const { name, img } = category;

            return (
              <div key={name + img} className="border px-4 py-2 space-y-2">
                <Image
                  src={`/img/categories/${img}`}
                  alt={name}
                  width={1000}
                  height={1000}
                  className="w-20 h-20 rounded-full"
                />
                <h5 className="font-semibold text-center">{name}</h5>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="font-bold text-2xl mb-6">Corporate</h3>
        <div className="grid grid-cols-4 gap-8">
          {corporate.map((product) => {
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
        </div>
      </section>

      <section>
        <h3 className="font-bold text-2xl mb-6">Dress</h3>
        <div className="grid grid-cols-4 gap-8">
          {dress.map((product) => {
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
        </div>
      </section>

      <br />
      <br />
      <br />
    </main>
  );
}
