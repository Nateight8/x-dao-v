"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { Pivot as Hamburger } from "hamburger-react";
import { P } from "../ui/paragraph";
import { H2 } from "../ui/h2";
type Props = {};

const Header = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  //   console.log(isOpen);

  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6 relative ">
        <div className="">
          <div className=" items-center hidden lg:flex justify-between">
            <H2 className="">VentureX DAO </H2>
            <div className="">
              <Navlinks />
            </div>

            <Button className=" leading-[0]" variant="ghost">
              Connect
            </Button>
          </div>
          <div className="flex lg:hidden items-center justify-between relative">
            <H2>VentureX DAO </H2>

            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-full  absolute z-30 p-4 border-t bg-background `}
        style={!isOpen ? { display: "none" } : { display: "block" }}
      ></div>
    </nav>
  );
};

export default Header;

function Navlinks() {
  const links = [
    {
      label: "Home",
      url: "/",
      id: "s",
    },
    {
      label: "About",
      url: "/about",
      id: "Sa",
    },
    {
      label: "Resources",
      url: "/resources",
      id: "Sa",
    },
  ];

  const pathname = usePathname();

  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            style={
              pathname === link.url
                ? { color: "white" }
                : { color: "rgba(225, 224, 232, 0.4)" }
            }
            className={buttonVariants({ variant: "link" })}
            href={link.url}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
