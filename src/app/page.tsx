"use client";

import AboutMe from "@/components/aboutMe";
import HomeSection from "@/components/home";
import NavBar from "@/components/navbar";
import Skills from "@/components/skills";
import SocialBar from "@/components/socialBar";
import ProjectsSection from "@/components/projects";
import Contacts from "@/components/contact";

export default function Home() {
  return (
    <main className="relative flex flex-col px-5 py-2 gap-y-10 sm:px-20 lg:px-40">
      <SocialBar />
      <NavBar />

      <HomeSection />

      <ProjectsSection />

      <Skills />

      <AboutMe />

      <Contacts />
    </main>
  );
}
