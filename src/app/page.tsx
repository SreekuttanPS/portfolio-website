import HomeSection from "@/app/Components/MainSection/HomeSection";
import About from "@/app/Components/MainSection/About";
import AnimationOnScroll from "@/app/Components/MainSection/AnimationOnScroll";
import Education from "@/app/Components/MainSection/Education";
import Projects from "@/app/Components/MainSection/Projects";
import Skills from "@/app/Components/MainSection/Skills";
import GetInTouch from "@/app/Components/MainSection/GetInTouch";

export default function Home() {
  return (
    <main>
      <AnimationOnScroll />
      <HomeSection />
      <About />
      <Education />
      <Projects />
      <Skills />
      <GetInTouch />
    </main>
  );
}
