import { Envelope, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import SectionLayout from "./sectionLayout";
import { ElementType } from "react";

interface ContactItemProps {
  icon: ElementType;
  contact: string;
}
const contacts = [
  { icon: Envelope, contact: "devmarcheseantonio@gmail.com" },
  { icon: GithubLogo, contact: "antonioMarchese" },
];

function ContactItem({ icon: Icon, contact }: ContactItemProps) {
  return (
    <div className="w-full flex items-center justify-start gap-1 text-sm">
      <Icon size={24} />
      <p>{contact}</p>
    </div>
  );
}

export default function Contacts() {
  return (
    <SectionLayout id="contact" title="contact">
      <div className="flex flex-col items-center justify-center gap-4 text-gray-400 font-medium sm:flex-row sm:items-start">
        <p>
          If you're interested about my job or just want to share something,
          feel free to contact me!{" "}
        </p>

        <div className="border border-gray-400 flex flex-col items-center justify-between p-4 gap-y-4">
          <p className="font-bold text-white text-left">Message me here!</p>
          {contacts.map((contact, i) => (
            <ContactItem
              key={i}
              icon={contact.icon}
              contact={contact.contact}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
