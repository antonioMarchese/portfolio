export default function SkillCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-3/4 max-w-xs sm:w-44 flex flex-col justify-center items-center text-sm border-1 border-zinc-300">
      <p className="w-full text-left text-white font-medium p-2">{title}</p>
      <hr className="w-full bg-zinc-300" />
      <p className="w-full text-gray-400 font-normal p-2">{description}</p>
    </div>
  );
}
