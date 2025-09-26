import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

export default function BannerTwo() {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        {/* Brand Info  */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44 ">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold uppercase"
          >
            Don't Hesitate, Book Your Meetint Rigt Away and Get Free Consulant
            with our Experts.
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We will make sure you get the right and the best consulant for your
            workout.
          </motion.p>
          <motion.div
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Contact Us</button>
            <button className="md:inline-flex items-center gap-2 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary py-2 px-4 duration-200 md:block cursor-pointer">
              <p>Book Meeting</p>
              <IoPeopleSharp />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
