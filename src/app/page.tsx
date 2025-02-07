import HeroSection from "@components/Home/HeroSection";
import Modal from "@components/Home/Modal/Modal";
import Highlight from "@components/Home/Highlight";
import CarouselItem from "@components/Home/CarouselItem";
import GameVideo from "@components/Home/GameVideo";
import AboutStore from "@components/Home/AboutStore";



export default function Home() {
  return (
    <div className="mt-4">
      <HeroSection/>
      <Highlight/>
      <Modal/>
      <CarouselItem/>
      <GameVideo/>
      <AboutStore/>
    </div>
  );
}
