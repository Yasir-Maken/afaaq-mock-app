import HeroImg from "../../assets/planning.png";
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../utility/animation";

export default function Hero() {
  return (
    <>
      <section>
        <div className="container grid gird-cols-1 md:grid-cols-2 min-h-[450px] relative">
          {/* Brand Info  */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-serif">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-tight "
              >
                <span className="text-secondary">Afaaq</span> Gives you a
                Perfect Steps for <span className="text-primary">Success</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px] text-xl"
              >
                Providing oppurtunities for distinguished projects that are
                difficult for individuals to implement under the super vision of
                experts in various fields
              </motion.p>
              {/* Buttons Sectoion  */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4"
              >
                <button className="primary-btn flex items-center gap-2 mt-4">
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Image  */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={SlideUp(0.3)}
              initial="hidden"
              animate="visible"
              src={HeroImg}
              alt=""
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
}
