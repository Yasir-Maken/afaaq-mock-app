import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import MeetingForm from "../Forms/MeetingForm/MeetingForm";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMeetingForm, setOpenMeetingForm] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center py-8">
        {/* Logo Sectionn */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <SiCoinmarketcap />
          <p>Afaaq</p>
          <p className="text-secondary">Group</p>
        </div>
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block relative ml-8 hover:text-primary tracking-[1px] font-semibold navg"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpenMeetingForm(() => !openMeetingForm)}
            className="md:inline-flex items-center gap-2 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary py-2 px-4 duration-200 hidden md:block cursor-pointer"
          >
            <p>Book Meeting</p>
            <IoPeopleSharp />
          </button>

          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 cursor-pointer">
            <CiSearch />
          </button>
        </div>
        {/* Mobile Humburger Section */}
        <div className="md:hidden cursor-pointer">
          <GiHamburgerMenu
            className="text-3xl"
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
      <MeetingForm
        isOpen={openMeetingForm}
        onClose={() => setOpenMeetingForm(() => !openMeetingForm)}
      />
    </>
  );
}
