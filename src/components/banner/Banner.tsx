import Image from "next/image";
import React from "react";
import PaperBg from "../../../public/paper-bg.jpg";
import BookImage from "../../../public/book.png";
const Banner = () => {
  return (
    <div className="px-5 py-10 hidden sm:block">
      <div className="relative">
        <Image
          src={PaperBg}
          alt="billBoard"
          className="h-72 w-full rounded-lg"
          height={0}
          width={0}
          sizes="100vw"
        />
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-50">
          <Image
            src={BookImage}
            alt="book"
            className="absolute bottom-0 right-5"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "18rem" }}
          />
          <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
            {" "}
            Conect Share and Trade Your Favourite Reads
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
