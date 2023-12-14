"use client";

import {
  CaretDown,
  FramerLogo,
  GithubLogo,
  List,
  X,
} from "@phosphor-icons/react/dist/ssr";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = ["home", "works", "about-me", "contact"];

const sectionStyles = {
  active:
    "flex items-center justify-start gap-x-1 text-white opacity-80 hover:cursor-pointer hover:opacity-100",
  default:
    "flex items-center justify-start gap-x-1 text-zinc-500 opacity-80 hover:cursor-pointer hover:opacity-100",
};

function NavBarElement({
  name,
  active = false,
}: {
  name: string;
  active?: boolean;
}) {
  return (
    <div className={active ? sectionStyles.active : sectionStyles.default}>
      <strong className="text-fuchsia-500 font-normal">#</strong> {name}
    </div>
  );
}

function LanguageDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="bg-transparent flex items-center justify-start gap-1 border-none  text-zinc-500 outline-none focus:border-none hover:text-white">
          EN
          <CaretDown size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-14 bg-zinc-800 rounded-lg z-50">
          <DropdownMenu.Item className="rounded-lg p-2 text-zinc-500  hover:border-none hover:cursor-pointer hover:bg-zinc-700 hover:text-white outline-none">
            PT
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-zinc-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default function NavBar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="sticky z-40 pt-2 bg-app-bg top-0 left-0 w-full items-center justify-between text-xsm flex sm:py-6 lg:text-base">
      <div className="flex items-center justify-start gap-x-1 text-base">
        <FramerLogo size={16} weight="fill" />
        Antônio
      </div>

      <Collapsible.Root
        className="w-full flex items-center justify-end sm:hidden"
        open={isMenuOpened}
        onOpenChange={setIsMenuOpened}
      >
        <Collapsible.Trigger asChild>
          <button className="rounded-full p-2 flex items-center justify-center outline-none">
            {isMenuOpened ? <X size={24} /> : <List size={24} />}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="absolute pt-6 top-[100%] z-10 bg-app-bg w-screen flex flex-col gap-y-4 px-10 items-start justify-center text-lg">
          {sections.map((section) => (
            <NavBarElement
              name={section}
              key={section}
              active={section === "home"}
            />
          ))}

          <LanguageDropdown />

          <div className="mt-20 mb-5 flex items-center justify-center w-full">
            <Link href="https://github.com/antonioMarchese" target="_blank">
              <Image
                width={50}
                height={50}
                src="./github.svg"
                alt="Author's Github"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/antonio-marchese-54a12120b/"
              target="_blank"
            >
              <Image
                width={40}
                height={40}
                src="./linkedin.svg"
                alt="Author's Linkedin"
              />
            </Link>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <div className="hidden z-50 sm:flex items-center justify-center gap-x-8">
        {sections.map((section) => (
          <NavBarElement
            name={section}
            key={section}
            active={section === "home"}
          />
        ))}

        <LanguageDropdown />
      </div>
    </div>
  );
}
