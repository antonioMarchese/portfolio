interface SectionLayoutProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function SectionLayout({
  title,
  children,
  id,
}: SectionLayoutProps) {
  return (
    <div
      id={id}
      className="relative flex flex-col items-start justify-center gap-y-4 sm:gap-y-6"
    >
      <div className="w-full flex items-center justify-start gap-x-4 text-lg sm:text-xl md:text-4xl font-semibold">
        <h1>
          <strong className="text-fuchsia-500 font-normal">#</strong>
          {title}
        </h1>
        <div className="w-1/3 h-0.5 bg-fuchsia-500" />
      </div>
      {children}
    </div>
  );
}
