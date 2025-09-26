import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function MeetingForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Modal Card with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Book a Meeting
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="+974 1234 5678"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Meeting Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Meeting Type
            </label>
            <select
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="online">Online (Zoom/Teams)</option>
              <option value="in-person">In-Person</option>
              <option value="call">Phone Call</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Notes
            </label>
            <textarea
              rows={3}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Any specific details for the meeting..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-all"
          >
            Book Meeting
          </button>
        </form>
      </motion.div>
    </div>
  );
}
