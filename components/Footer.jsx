import Image from "next/image";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-primary p-24 -mx-16">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <Image src="/logo-white.png" alt="logo" width={1000} height={1000} className="h-24 w-auto" />
                        <div>
                            <button className="btn btn-white">
                                Download App on IOS & Android
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-white">
                    <div>
                        <h4 className="font-semibold uppercase mb-6">
                            Customer service
                        </h4>

                        <ul className="flex flex-col gap-4">
                            <li>
                                Orders & Delivery
                            </li>

                            <li>
                                Payment & Pricing
                            </li>

                            <li>
                                Returns & Refunds
                            </li>

                            <li>
                                FAQs
                            </li>

                            <li>
                                Locations
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase mb-6">
                            About
                        </h4>

                        <ul className="flex flex-col gap-4">
                            <li>
                                About Us
                            </li>

                            <li>
                                Careers
                            </li>

                            <li>
                                Sitemap
                            </li>

                            <li>
                                Privacy Policy
                            </li>

                            <li>
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase mb-6">
                            Help
                        </h4>

                        <ul className="flex flex-col gap-4">
                            <li>
                                Contact Us
                            </li>

                            <li>
                                Follow Us
                            </li>

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
    )
}