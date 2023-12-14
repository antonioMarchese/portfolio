import Image from "next/image";

export default function HomeSection() {
  return (
    <div id="home" className="flex flex-col gap-y-6 items-center">
      <div className="flex flex-col gap-y-6 sm:flex-row">
        <div className="text-xl font-semibold flex flex-col gap-y-6">
          <p>
            I'm a <strong className="text-fuchsia-500">back-end</strong> and
            <strong className="text-fuchsia-500"> front-end</strong> web
            developer
          </p>

          <p className="text-gray-400 text-sm">
            Electrical engineering student at the Federal University of Juiz de
            Fora (Brazil/MG)
          </p>
        </div>

        <div className="w-full flex flex-col gap-y-0 items-center justify-center">
          <Image
            src="/home_img.png"
            alt="Man wearnig a jacket"
            width={384}
            height={384}
          />
          <div className="p-2 -m-1px border-gray-500 border-1 flex items-center justify-start gap-x-2">
            <div className="w-4 h-4 bg-fuchsia-500" />
            <div className="text-gray-400">
              Currently working at{" "}
              <strong className="text-white">GovOne</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full p-3 z-0 sm:px-8 sm:py-6 sm:w-3/4 flex flex-col items-start justify-center border border-gray-500 text-lg text-white font-semibold">
        <div className="absolute left-2 -top-2 flex items-center justify-center px-1 bg-app-bg z-10">
          <Image src="/quotes.svg" width={20} height={20} alt="Double quotes" />
        </div>
        <p>Believe you can and you're halfway there.</p>
        <small className="font-light">- Theodore Roosevelt</small>
        <div className="absolute right-2 -bottom-2 flex items-center justify-center px-1 bg-app-bg z-10">
          <Image src="/quotes.svg" width={20} height={20} alt="Double quotes" />
        </div>
      </div>
    </div>
  );
}
