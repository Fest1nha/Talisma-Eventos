import Header from "../components/header";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import Location from "../components/Location";
import Buffet from "../components/Buffet";
import BlackDiv from "../components/BlackDiv";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceCards />
      <BlackDiv />
      <Location />
      <BlackDiv />
      <Buffet />
    </div>
  );
}
