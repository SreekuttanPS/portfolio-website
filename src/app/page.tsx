import dynamic from 'next/dynamic';
const AnimationOnScroll = dynamic(() => import('@/app/Components/MainSection/AnimationOnScroll'));
const SplashCursor = dynamic(() => import('@/app/Components/Animations/SplashColor'));

import HomeSection from "@/app/Components/MainSection/HomeSection";
import About from "@/app/Components/MainSection/About";
import Education from "@/app/Components/MainSection/Education";
import Projects from "@/app/Components/MainSection/Projects";
import Skills from "@/app/Components/MainSection/Skills";
import GetInTouch from "@/app/Components/MainSection/GetInTouch";

export default function Home() {
  return (
    <main>
      <SplashCursor />
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
