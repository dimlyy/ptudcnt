import HeroSection from "@components/Home/HeroSection";
import Modal3D from "@components/Home/Modal3D";
import Highlight from "@components/Home/Highlight";



export default function Home() {
  return (
    <div className="mt-4">
      <HeroSection/>
      <Highlight/>
      <Modal3D/>
    </div>
  );
}
