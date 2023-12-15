import Image from "next/image";
import SectionLayout from "./sectionLayout";
import SkillCard from "./skillCard";

type skillsProps = {
  title: string;
  description: string;
};

const skills: skillsProps[] = [
  {
    title: "Languages",
    description: "Python, Typescript, C/C++",
  },
  {
    title: "Tools",
    description: "VSCode, Pycharm, Git, Tailwind, Radix-UI",
  },
  {
    title: "Frameworks",
    description: "Django, Next.js, React.js, Express, Nest.js",
  },
  {
    title: "Databases",
    description: "Postgresql, MySQL",
  },
  {
    title: "Soft Skills",
    description:
      "Good comunication, quick learning, always going for the extra mile",
  },
];

export default function Skills() {
  return (
    <SectionLayout title="skills">
      <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:items-start">
        <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
          <Image src="/dots.png" alt="Spread dots" width={300} height={300} />
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-y-2 sm:flex-row sm:gap-6 md:justify-end md:items-start">
          {skills.map((skill, i) => (
            <SkillCard
              key={i}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
