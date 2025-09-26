import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Equipment/Features/Features";
import Banner from "./components/Banner/Banner";
// import BgImage from "./assets/bg.jpg";
import BannerImage1 from "./assets/banner.png";
import GalleryTab from "./components/GalleryTab/GalleryTab";
import Testimonials from "./components/Testimonials/Testimonials";
import BannerTwo from "./components/Banner/BannerTwo";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: BannerImage1,
  title: "Great Bussiness Strategies for Your Bussiness",
  description:
    "Entrepreneurship is a passion, not a job, we are a company geared towards facilitating the success of the ideas of distinct projects according to the need of the local market in Qatar where we provide support and development of the ideas of entrepreneurs through a range of resources and services developed by the afaaq",
};

// const bgStyle = {
//   backgroundImage: `url(${BgImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundAttachment: "fixed",
//   minHeight: "100vh",
// };

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Banner {...BannerData} />
      <GalleryTab />
      <Testimonials />
      <BannerTwo />
      <Footer />
    </div>
  );
}
