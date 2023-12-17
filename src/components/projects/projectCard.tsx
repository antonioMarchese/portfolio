import { projectProps } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imageUrl,
  tools,
  title,
  description,
  link,
}: projectProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative w-full max-w-[280px] border-1 border-zinc-400 flex flex-col items-start justify-between text-gray-400 text-sm hover:scale-105 hover:cursor-pointer hover:border-fuchsia-400 duration-300 [&>*:nth-child(2)]:hover:border-fuchsia-400"
    >
      <div className="w-full flex items-center justify-center">
        <Image src={imageUrl} width={300} height={200} alt={title} />
      </div>
      <p className="flex items-center justify-start flex-wrap border-t-1 border-b-1 border-zinc-400 font-normal p-1">
        {tools.join(" ")}
      </p>
      <div className="p-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
