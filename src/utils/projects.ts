export interface projectProps {
  imageUrl: string;
  tools: string[];
  title: string;
  description: string;
  link: string;
}

export const projects: projectProps[] = [
  {
    imageUrl: "/habits_pomodoro.png",
    title: "Habits Pomodoro",
    description: "A project designed to keep track of your hours of work/study",
    tools: ["React.js", "StyledComponents", "Typescript"],
    link: "https://habits-pomodoro.vercel.app/",
  },
  {
    imageUrl: "/brasilbpc.png",
    title: "Brasil Benefícios",
    description:
      "Website created for a law firm with the aim of informing and attracting clients",
    tools: ["Next.js", "StyledComponents", "Typescript", "Radix-UI"],
    link: "https://www.brasilbpc.com.br/",
  },
  {
    imageUrl: "/casa_da_chef.png",
    title: "Casa da Chef",
    description:
      "A beautiful website made for an Airbnb, inspired in Tesla's website",
    tools: ["React.js", "StyledComponents", "Typescript"],
    link: "https://casa-da-chef.vercel.app/",
  },
];
