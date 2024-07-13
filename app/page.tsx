import About from "@/components/About";
import Example from "@/components/Example";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
      <Example />
      <Testimonial />
      <About />
    </div>
  );
}
