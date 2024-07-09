import Image from "next/image";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary xl:p-24 md:py-16 p-8 xl:-mx-16 md:-mx-8 -mx-4"
    >
      <div className="grid xl:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="md:flex md:col-span-2 xl:col-span-1">
          <div className="flex flex-col items-center">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-24 w-auto"
              />
            </Link>
            <div>
              <button className="btn btn-white md:text-sm xl:text-base">
                Download App on IOS & Android
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-8  md:col-span-3 xl:col-span-1 gap-4 text-white mt-8 md:mt-0">
          <div>
            <h4 className="font-semibold uppercase mb-6 text-sm md:text-base">
              Customer service
            </h4>

            <ul className="flex flex-col gap-4 mt-4">
              <li>Orders & Delivery</li>

              <li>Payment & Pricing</li>

              <li>Returns & Refunds</li>

              <li>FAQs</li>

              <li>Locations</li>
            </ul>
          </div>

          <div className="col-start-1 row-start-2 md:col-auto md:row-auto">
            <h4 className="font-semibold text-sm md:text-base mb-6">About</h4>

            <ul className="flex flex-col gap-4">
              <li>About Us</li>

              <li>Careers</li>

              <li>Sitemap</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm md:text-base mb-6">Help</h4>

            <ul className="flex flex-col gap-4">
              <li>Contact Us</li>

              <li>Follow Us</li>

              <li>
                <div className="flex gap-4">
                  <FiInstagram className="text-3xl text-red-500" />
                  <FaFacebook className="text-3xl text-white" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
