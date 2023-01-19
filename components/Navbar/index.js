import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaHeart,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

import { BsFillPersonFill, BsXLg } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const isPath = (route) => route === router.pathname;

  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  const showHandle = () => setShow(!show);

  console.log(show);
  return (
    <div className="fixed top-0 h-24">
      <div className="bg-slate-800 h-8 w-screen hidden md:block">
        <div className="w-full md:grid md:grid-cols-2 md:px-12">
          <div className="">
            <div className=" md:grid md:grid-cols-4 justify-center h-8 ">
              <div className=" grid grid-cols-6">
                <Link
                  href="#"
                  className="border-l border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="border-l border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="border-l border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="border-l border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="#"
                  className="border-l border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  href="#"
                  className="border-l border-r border-slate-600 flex h-8 justify-center items-center text-white text-sm hover:text-blue-600"
                >
                  <FaYoutube />
                </Link>
              </div>
              <div className="col-span-3 hidden md:block"></div>
            </div>
          </div>
          <div className="flex md:justify-end  md:grid md:grid-cols-7 ">
            <div className="col-span-2"></div>
            <div className="col-span-5 grid grid-cols-3">
              <div className="flex h-8 justify-center items-center border-l border-slate-600 text-white text-xs">
                <FaHeart /> <span className="m-2">Favorites</span>
              </div>
              <div className="flex h-8 justify-center items-center border-l border-slate-600  text-white text-xs">
                <FaMailBulk />
                <span className="ml-2">kalana@gmail.com</span>
              </div>{" "}
              <div className="flex h-8 justify-center items-center border-l border-r border-slate-600  text-white text-xs">
                <FaPhoneAlt />
                <span className="ml-2"> +94 70 527 48 97</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-16 hidden md:block border-b-4 border-gray-100  bg-white opacity-90">
        <div className="h-full w-full grid grid-cols-3">
          <div className="flex h-16 justify-center items-center">
            <img src="/asset/logo.png" />
          </div>
          <div className="flex h-16 justify-center items-center space-x-8 ">
            <Link
              className={`font-semibold text-sm ${
                isPath("/")
                  ? "text-blue-600 border-b border-blue-600 py-1"
                  : "text-slate-700"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`font-semibold text-sm ${
                isPath("/list")
                  ? "text-blue-600 border-b border-blue-600 py-1"
                  : "text-slate-700"
              }`}
              href="/list"
            >
              Properties
            </Link>
            <Link
              className={`font-semibold text-sm ${
                isPath("/contact")
                  ? "text-blue-600 border-b border-blue-600 py-1"
                  : "text-slate-700"
              }`}
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className={`font-semibold text-sm ${
                isPath("/about")
                  ? "text-blue-600 border-b border-blue-600 py-1"
                  : "text-slate-700"
              }`}
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="flex h-16 justify-center items-center">
            <div className="h-7 w-7 rounded-full border bg-gray-200 flex justify-center items-center text-blue-800">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-screen bg-slate-700 h-16">
        <div className="grid grid-cols-5">
          <div className="flex justify-center text-white items-center h-16">
            <div onClick={showHandle}>
              {!show ? <AiOutlineMenu /> : <BsXLg />}
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center h-16">
            <img src="/asset/logo.png" />
          </div>
          <div className="flex justify-center text-white items-center h-16">
            <div className="h-7 w-7 rounded-full border bg-gray-200 flex justify-center items-center text-blue-800">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`h-screen left-0 top-16 transparent ease-in-out duration-300 ${
            show ? "bg-slate-800 w-4/5 p-4 " : "w-0"
          }`}
        >
          {show && (
            <div className="duration-400">
              <div className="grid grid-cols-4">
                <div className="col-span-3 flex flex-col space-y-6">
                  <Link
                    className={`font-semibold text-sm ${
                      isPath("/") ? "text-blue-600" : "text-slate-300"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`font-semibold text-sm ${
                      isPath("/list") ? "text-blue-600" : "text-slate-300"
                    }`}
                    href="/list"
                  >
                    Properties
                  </Link>
                  <Link
                    className={`font-semibold text-sm ${
                      isPath("/contact") ? "text-blue-600" : "text-slate-300"
                    }`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className={`font-semibold text-sm ${
                      isPath("/about") ? "text-blue-600" : "text-slate-300"
                    }`}
                    href="/about"
                  >
                    About
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaFacebookF />
                  </div>
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaInstagram />
                  </div>
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaTwitter />
                  </div>
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaLinkedinIn />
                  </div>
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaYoutube />
                  </div>
                  <div className="text-2xl text-gray-500 hover:text-blue-800">
                    {" "}
                    <FaWhatsapp />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col mt-8 space-y-2">
                <div>
                  <h1 className="text-center text-xl text-gray-200 font-serif">
                    Dream Properties
                  </h1>
                </div>
                <div className="flex w-full justify-center flex-col">
                  <h1 className="text-center text-md text-gray-200 font-serif">
                    Contact us
                  </h1>
                  <div className="flex w-full justify-center flex-row items-center mt-1">
                    <h1 className="text-sm text-gray-400">
                      <FaPhoneAlt />
                    </h1>
                    <h1 className="text-sm text-gray-400 ml-2">
                      <span>00 94 70 527 48 97</span>
                    </h1>
                  </div>
                  <div className="flex w-full justify-center flex-row items-center space-y-2">
                    <h1 className="text-sm text-gray-400">
                      <FaMailBulk />
                    </h1>
                    <h1 className="text-sm text-gray-400  ml-2">
                      <span>dreamproperties@support.com</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
