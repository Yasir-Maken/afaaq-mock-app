import React, { useState } from "react";
import { GalleryData } from "../../mockData/data";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

export default function GalleryTab() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Events", "Workshops"];

  const filteredData =
    activeTab === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === activeTab);
  return (
    <>
      <div className="container my-12 md:my-16">
        <h1 className="text-4xl font-bold">The Gallery</h1>
        {/* Tabs Button Section  */}
        <div className="flex space-x-4 mb-4 p-6 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? `bg-primary text-white`
                  : `bg-gray-200 text-gray-700`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Card Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((card) => (
            <motion.div
              id={card.id}
              key={card.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-4 border border-primary rounded shadow-sm space-y-2"
            >
              <img
                src={card.image}
                alt=""
                className="h-[240px] w-full object-cover"
              />
              <p className="text-xl text-secondary font-semibold">
                {card.category}
              </p>
              <p>{card.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
