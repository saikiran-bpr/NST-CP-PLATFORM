import Link from "next/link";
import { Spotlight } from "../HomepageHero/spotlight";

const HeaderLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Explore",
    link: "#1",
  },
  {
    name: "What is CP?",
    link: "#2",
  },
  {
    name: "Achivements",
    link: "#3",
  },
  {
    name: "Testimonials",
    link: "#4",
  },
];

export default function Header() {
  return (
    <div className=" fixed top-0 z-10 w-screen boder border-transparent bg-black/[0.96] shadow-input flex gap-14 justify-center space-x-4 px-8 py-6 border-y-neutral-600 border">
      {HeaderLinks.map((item, index) => (
        <Link
          href={item.link}
          className=" text-slate-100 hover:text-slate-300"
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
