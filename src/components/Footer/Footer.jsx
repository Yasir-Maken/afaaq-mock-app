import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { SiCoinmarketcap } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary/100 to-primary/70 dark:bg-black rounded-t-3xl">
      <div className="container ">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          {/* Brand Info Section  */}
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <SiCoinmarketcap />
              <p>Afaaq</p>
              <p className="text-black/80">Group</p>
            </div>
            <p>
              Providing opportunities for distinguished projects that are
              difficult for individuals to implement under the supervision of a
              commercial cadre.
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/*  */}
          {/* Footer Links  */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            {/*  */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 ">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Callery</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 ">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Privay Policy</a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 ">
                Other Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Callery</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copy Right Section  */}
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-gray-300/10">
            <span className="text-sm text-gray-300 opacity-70">
              @copyright 2025 Afaaq Group
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
