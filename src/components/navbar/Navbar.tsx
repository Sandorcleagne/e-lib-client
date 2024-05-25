import Link from "next/link";
import React from "react";
import Hexagon from "../svgs/Hexagon";
import BookIcon from "../svgs/BookIcon";
import SignButtons from "./SignButtons";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between py-4">
        <div className="w-full flex items-center justify-center sm:justify-start">
          <Link href="/">
            <div className="flex items-center gap-1">
              <div className="relative">
                <Hexagon />
                <BookIcon />
              </div>
              <span className="text-xl font-bold uppercase tracking-normal text-primary-500">
                Coders Book
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <SignButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
