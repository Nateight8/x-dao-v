"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { Pivot as Hamburger } from "hamburger-react";
import { P } from "../ui/paragraph";
type Props = {};

const Header = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  //   console.log(isOpen);

  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6 relative ">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <Navlinks />
            </div>

            <Button className="hidden lg:block" variant="ghost">
              Connect
            </Button>
          </div>
          <div className="flex lg:hidden items-center justify-between relative">
            <P>Mobile</P>

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
  ];

  const pathname = usePathname();

  return (
    <ul className="flex">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            style={
              pathname === link.url
                ? { color: "white" }
                : { color: "rgba(225, 224, 232, 0.4);" }
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
