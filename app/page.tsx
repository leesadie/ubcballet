import Hero from "./components/hero/Hero";
import HeroSmall from "./components/hero/HeroSmall";


export default function Home() {
  return (
    <div >
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="md:hidden">
        <HeroSmall />
      </div>
    </div>
  );
}
