import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import { Context } from "@/pages/_app";

import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const { state } = useContext(Context);

  const router = useRouter();
  const path = router.pathname;

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="sticky top-0 bg-white xl:-mx-16 xl:px-16 md:-mx-8 md:px-8 -mx-4 px-4 pt-2 z-50">
      <div className="flex justify-between items-center">
        <div className="md:w-[30%] lg:w-[20%] xl:w-[30%]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="h-24 w-auto"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="/cart" className="relative">
            <span className="hv-center border rounded-full h-8 w-8">
              <MdOutlineShoppingCart />
            </span>
            <span className="w-5 h-5 bg-primary text-white rounded-full text-sm -top-1 -right-2 absolute hv-center">
              {state.cart.length || 0}
            </span>
          </Link>
        </div>

        <ul className="lg:flex hidden gap-8 items-center">
          <Link href="/">
            <li
              className={`${path.includes("cart") || path.includes("checkout") || path.includes("product") ? "" : "active"}`}
            >
              Home
            </li>
          </Link>
          <Link
            href="/products"
            className={`${path.includes("product") && "active"}`}
          >
            <li>Shop</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="#contact">
            <li>Contact Us</li>
          </Link>
          <li>
            <Link href="/cart" className="relative">
              <span className="hv-center border rounded-full h-8 w-8">
                <MdOutlineShoppingCart />
              </span>
              <span className="w-5 h-5 bg-primary text-white rounded-full text-sm -top-1 -right-2 absolute hv-center">
                {state.cart.length || 0}
              </span>
            </Link>
          </li>
        </ul>

        <div className="w-[30%] hidden lg:flex items-center justify-end gap-8 lg:gap-4 xl:gap-8">
          <div className="v-center gap-4">
            <span className="cursor-pointer">
              <RxCaretDown className="text-2xl" />
            </span>
            <span className="font-bold">Hi Temi</span>
            <Image
              src="/img/profile.png"
              alt="user"
              width={1000}
              height={1000}
              className="h-12 w-12"
            />
          </div>
          <Link href="/">
            <button className="secondary-button">Log out</button>
          </Link>
        </div>

        <div>
          <RxHamburgerMenu
            className="text-primary text-3xl cursor-pointer lg:hidden"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </div>

      <div
        id="mobile"
        className={`fixed top-0 px-4 right-0 w-1/2 h-full bg-white flex lg:hidden flex-col justify-between py-8 border-l z-30 duration-300 ease-in transition-all ${showSidebar ? "openSidebar" : "closeSidebar"} z-50`}
      >
        <div className="hv-center gap-4">
          <span className="hidden">
            <RxCaretDown className="text-2xl" />
          </span>
          <span className="font-bold">Hi Temi</span>
          <Image
            src="/img/profile.png"
            alt="user"
            width={1000}
            height={1000}
            className="h-12 w-12"
          />
        </div>

        <ul className="flex flex-col gap-8 items-center">
          <Link onClick={() => setShowSidebar(false)} href="/">
            <li
              className={`${path.includes("cart") || path.includes("checkout") || path.includes("product") ? "" : "active"}`}
            >
              Home
            </li>
          </Link>
          <Link
            onClick={() => setShowSidebar(false)}
            href="/products"
            className={`${path.includes("product") && "active"}`}
          >
            <li>Shop</li>
          </Link>
          <Link onClick={() => setShowSidebar(false)} href="/products">
            <li>Products</li>
          </Link>
          <Link onClick={() => setShowSidebar(false)} href="#contact">
            <li>Contact Us</li>
          </Link>
          <li className="">
            <Link
              href="/cart"
              className="relative"
              onClick={() => setShowSidebar(false)}
            >
              <span className="hv-center border rounded-full h-8 w-8">
                <MdOutlineShoppingCart />
              </span>
              <span className="w-5 h-5 bg-primary text-white rounded-full text-sm -top-1 -right-2 absolute hv-center">
                {state.cart.length || 0}
              </span>
            </Link>
          </li>
        </ul>

        <Link href="/" onClick={() => setShowSidebar(false)}>
          <button className="secondary-button w-full">Log out</button>
        </Link>
      </div>

      <div
        className={`fixed z-20 lg:hidden ${!showSidebar && "hidden"} top-0 left-0 h-screen w-screen bg-blue-500/50 backdrop-blur-sm`}
        onClick={() => setShowSidebar(false)}
      ></div>
    </nav>
  );
}
