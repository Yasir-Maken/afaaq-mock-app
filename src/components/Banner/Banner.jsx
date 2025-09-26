import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

export default function Banner({ image, title, description }) {
  return (
    <div className="container">
      <div className="bg-[#fff] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image Section  */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
            src={image}
            alt=""
            className="w-[200px] md:w-[300px] lg:w-[400px] h-full object-cover"
          />
        </div>
        {/* Banner Text Section  */}
        <div>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl text-secondary font-bold capitalize font-serif"
          >
            {title}
          </motion.p>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.p
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold capitalize p-2 space-x-1 font-serif"
            >
              Business
            </motion.p>
            <motion.p
              variants={SlideUp(1.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold capitalize p-2 space-x-1 font-serif"
            >
              Customer Support
            </motion.p>
            <motion.p
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold capitalize p-2 space-x-1 font-serif"
            >
              Teamwork
            </motion.p>
            <motion.p
              variants={SlideUp(1.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold capitalize p-2 space-x-1 font-serif"
            >
              Fainancial
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
