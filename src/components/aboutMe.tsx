import Image from "next/image";
import SectionLayout from "./sectionLayout";

export default function AboutMe() {
  return (
    <SectionLayout title="about-me">
      <div className="flex flex-col items-center justify-center text-gray-400 font-medium sm:flex-row sm:items-start">
        <div className="flex flex-col gap-y-5 sm:w-3/4 ">
          <p>Hello, World. My name is Antonio 👋</p>
          <p>
            I am an Electrical Engineering student at the Federal University of
            Juiz de Fora. I was introduced to programming in 2019, when I
            started studying algorithms and programming logic. In 2020 I started
            research into cancer treatment through the injection of magnetic
            nanoparticles into tumor tissue. I have C/C++, Python, Next, React,
            Node, Jquery, HTML and CSS skills.
          </p>
        </div>

        <div className="flex items-center justify-center w-full p-6 sm:w-1/3 md:-translate-y-16">
          <Image
            src="/about_me.png"
            width={380}
            height={380}
            alt="Man hidding his face"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
