import { SiMinds } from "react-icons/si";
import { GiConversation } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";

const FeaturesData = [
  {
    id: 1,
    title: "Start Your Project",
    description:
      "We all have an idea, and each one of us has thier own way, lets your idea see the light.",
    icon: <SiMinds />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Counsult",
    description:
      "You will work with the best experts in the field to make your idea a reality.",
    icon: <GiConversation />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Find Investors or Become One",
    description:
      "Creative people turns ideas into reality, You can invest your money or idea in the presented projects and be part of the success.",
    icon: <FaRegLightbulb />,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Project Advertisement",
    description:
      "We would continue the path and stay on the road. Save your time! Buy or sell your project with us.",
    icon: <TbBrandAirtable />,
    delay: 1.2,
  },
];

export default function Features() {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 font-serif">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">How Can We Help</h1>
            <p className="text-gray-500">
              All the services you need to turn your idea into a successful
              project.
            </p>
          </div>
          {FeaturesData.map((feature) => (
            <motion.div
              variants={SlideLeft(feature.delay)}
              initial="hidden"
              whileInView="visible"
              className="space-y-6 p-6 bg-[#fbfbfb] hover:bg-white rouneded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
            >
              <div className="text-5xl">{feature.icon}</div>
              <p className="text-2xl font-semibold">{feature.title}</p>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
