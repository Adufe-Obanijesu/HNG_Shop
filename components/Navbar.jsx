import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";

export default function Navbar() {

  const router = useRouter();
  const path = router.pathname;

  return (
    <nav className="hidden md:block">
      <div className="flex justify-between items-center">
        <div className="w-[30%]">
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

        <ul className="flex gap-8 items-center">
          <Link href="/">
            <li className={`${path.includes("cart") || path.includes("checkout") || path.includes("product") ? "" : "active"}`}>Home</li>
          </Link>
          <Link href="/products" className={`${path.includes("product") && "active"}`}>
            <li>Shop</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="#">
            <li>Contact Us</li>
          </Link>
          <li>
            <Link href="/cart">
              <span className="hv-center border rounded-full h-8 w-8">
                <MdOutlineShoppingCart />
              </span>
            </Link>
          </li>
        </ul>

        <div className="w-[30%] v-center justify-end gap-8">
          <div className="v-center gap-4">
            <span>
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
          <button className="secondary-button">Log out</button>
        </div>
      </div>
    </nav>
  );
}
