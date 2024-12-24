import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [toggle, setToggle] = useState(false); // For mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown toggle

  return (
    <div className="p-4">
      <div className="max-w-[1240px] py-[12px] md:text-2xl items-center flex justify-between mx-auto">
        {/* Logo Section */}
        <div className="border-2 p-4 border-black md:text-5xl rounded-bl-[71px] font-bold">tranch</div>

        {/* Menu Icon for Mobile */}
        {toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          />
        )}

        {/* Navigation Links for Desktop */}
        <ul className="font-bold hidden sm:flex gap-10">
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:underline flex items-center gap-1"
            >
              Products <IoIosArrowDown className="text-white text-xl" />
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white text-black rounded shadow-lg mt-2 p-2 w-[150px]">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 1
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 2
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 3
                </li>
              </ul>
            )}
          </li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>About Us</li>
        </ul>

        {/* Responsive Menu for Mobile */}
        <ul
          className={`bg-white font-bold sm:text-[20px] duration-500 sm:hidden w-full h-screen fixed top-[92px] ${
            toggle ? "left-[-100%]" : "left-[0]"
          }`}
        >
          <li className="p-2">Products</li>
          <li className="p-2">Solutions</li>
          <li className="p-2">Resources</li>
          <li className="p-2">About Us</li>
          <li className="absolute font-bold border border-black rounded-br-[20px] inset-x-0 text-[20px] p-3 bottom-[235px] h-12 text-center m-auto w-[90%]" href="">
            Contact Sales
          </li>
          <button className="absolute font-bold border border-black rounded-tr-[20px] inset-x-0 text-[20px] p-3 bottom-[170px] h-12 text-center m-auto w-[90%]">Login</button>
        </ul>

        {/* Contact and Login */}
        <div className="font-bold p-3 hidden sm:flex gap-5">
          <a href="">Contact Sales</a>
          <button className="border-2 border-black rounded-tr-[16px] px-3">Login</button>
        </div>
      </div>
    </div>
  );
}
