import Modal from "@components/Home/Modal/Modal";
import CarouselItem from "@components/Home/CarouselItem";
import AboutStore from "@components/Home/AboutStore";
import CarouselSlider from "@components/Home/CarouselSlider";
import Catergories from "@components/Home/Catergories";
import HolidayDeals from "@components/Home/HolidayDeals";



export default function Home() {
  return (
    <div className="mt-4">
      <Catergories/>
      <CarouselSlider />
      <HolidayDeals/>
      <Modal/>
      <CarouselItem/>
      <AboutStore/>
    </div>
  );
}
