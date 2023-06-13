import React from "react";
import { P } from "../ui/paragraph";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { H2 } from "../ui/h2";
import { H3 } from "../ui/h3";

type Props = {};

function Footer({}: Props) {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full">
      <footer className="relative  w-full mx-auto  max-w-screen-2xl p-4 md:px-6 md:py-6 ">
        <div className="w-full">
          <div className="md:grid grid-cols-1  md:gap-4 md:grid-cols-2">
            <div className="py-6 space-y-4 max-w-sm">
              <H2 className=" ">DAO LOGO</H2>
              <P>
                Unlocking wealth for all, together. Join VentureX DAO and
                unleash your financial potential
              </P>
            </div>
            <div className="grid py-6  md:p-6 col-span-2 col-start-2 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6">
              <div className="w-full">
                <H3 className="mb-4">X DAO</H3>
                <ul>
                  {["About Us", "FAQ", "Our Team", "Projects"].map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className={buttonVariants({
                          variant: "leftAlign",
                        })}
                        style={{ padding: 0 }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <H3 className="mb-4">Resources</H3>
                <ul>
                  {["Blog", "Newsletter", "Medium"].map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className={buttonVariants({
                          variant: "leftAlign",
                        })}
                        style={{ padding: 0 }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:block">
                <H3 className="mb-4">Socials</H3>
                <ul>
                  {["Twitter", "Discord"].map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className={buttonVariants({
                          variant: "leftAlign",
                        })}
                        style={{ padding: 0 }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className=" flex w-full  items-center  py-4 justify-between">
          <div>
            <span className="block text-sm text-[#d6d3d1] text-center font-inter ">
              © 2023
            </span>
          </div>
          <div className="flex space-x-3 items-center">
            <Link href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.0071 6.72402C27.9751 7.18435 26.8679 7.49688 25.7063 7.63625C26.8929 6.91829 27.8038 5.778 28.23 4.42233C27.1186 5.08961 25.8901 5.57106 24.5823 5.8329C23.5336 4.70529 22.0419 4 20.3873 4C17.216 4 14.6421 6.60154 14.6421 9.80701C14.6421 10.2632 14.6923 10.7065 14.7926 11.1289C10.0168 10.8881 5.78415 8.57381 2.95126 5.06004C2.45822 5.91737 2.1741 6.91406 2.1741 7.97833C2.1741 9.99284 3.18943 11.7708 4.73122 12.8097C3.7911 12.7802 2.9053 12.5183 2.12814 12.0833C2.12814 12.1087 2.12814 12.1298 2.12814 12.1551C2.12814 14.9678 4.10865 17.3161 6.73681 17.8482C6.2563 17.9791 5.74655 18.0508 5.22426 18.0508C4.85239 18.0508 4.49306 18.0128 4.14208 17.9452C4.87328 20.2512 6.99586 21.9321 9.50702 21.9785C7.53904 23.5369 5.06549 24.466 2.37048 24.466C1.90669 24.466 1.45125 24.4364 1 24.3857C3.54041 26.0329 6.56132 26.9957 9.80786 26.9957C20.3748 26.9957 26.1534 18.148 26.1534 10.4743C26.1534 10.2209 26.1492 9.97172 26.1367 9.72255C27.2606 8.90323 28.2342 7.8812 29.003 6.71557L29.0071 6.72402Z"
                  fill="#1D9BF0"
                ></path>
              </svg>
            </Link>
            <Link href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2373 24.1189C21 25.0595 21.9152 26.1528 21.9152 26.1528C27.2384 25.9842 29.4352 22.6892 29.6516 22.3647C29.6636 22.3467 29.6695 22.3379 29.6695 22.3392C29.6695 14.229 26.0085 7.64429 26.0085 7.64429C22.3729 4.92395 18.8898 5.00022 18.8898 5.00022L18.5339 5.40699C22.8559 6.7036 24.8644 8.61038 24.8644 8.61038C22.2203 7.18666 19.6271 6.4748 17.2119 6.19514C15.3813 5.99175 13.6271 6.0426 12.0763 6.24599C11.9431 6.24599 11.8293 6.26536 11.7011 6.2872C11.6824 6.29037 11.6634 6.29359 11.6441 6.29682C10.7542 6.39852 8.59322 6.70361 5.87288 7.89853C4.9322 8.30531 4.37288 8.61038 4.37288 8.61038C4.37288 8.61038 6.45763 6.60192 11.0339 5.3053L10.7797 5.00022C10.7797 5.00022 7.32203 4.92395 3.66102 7.64429C3.66102 7.64429 0 14.229 0 22.3392C0 22.3392 2.13559 26.0002 7.75424 26.1782C7.75424 26.1782 8.69491 25.0595 9.45763 24.0934C6.22881 23.1273 5.00847 21.1189 5.00847 21.1189C5.00847 21.1189 5.26271 21.2968 5.72034 21.5511C5.73605 21.5511 5.75176 21.5608 5.77348 21.5742C5.7869 21.5825 5.80261 21.5922 5.82203 21.6019C5.86017 21.6273 5.8983 21.6464 5.93644 21.6655C5.97458 21.6845 6.01271 21.7036 6.05085 21.729C6.68644 22.085 7.32203 22.3646 7.90678 22.5934C8.94915 23.0256 10.1949 23.407 11.6441 23.6867C13.5508 24.0426 15.7881 24.1697 18.2288 23.7121C19.4237 23.4833 20.6441 23.1528 21.9152 22.6189C22.8051 22.2884 23.7966 21.8053 24.839 21.1189C24.839 21.1189 23.5678 23.1782 20.2373 24.1189ZM16.7797 17.1782C16.7797 15.6273 17.9237 14.3816 19.3729 14.3816C20.7966 14.3816 21.9661 15.6273 21.9661 17.1782C21.9661 18.729 20.822 19.9748 19.3729 19.9748C17.9491 19.9748 16.7797 18.729 16.7797 17.1782ZM7.5 17.1782C7.5 15.6273 8.64407 14.3816 10.0932 14.3816C11.5424 14.3816 12.7119 15.6273 12.6864 17.1782C12.6864 18.729 11.5424 19.9748 10.0932 19.9748C8.66949 19.9748 7.5 18.729 7.5 17.1782Z"
                  fill="#7289DA"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
