import Image from "next/image";
import Hero from "./hope/hero";
import Home_landing from "./homes/home";

export default function Home() {
  return (
    <div className="font-sans ">
      <main className="flex flex-col text-black">
<Home_landing/>
      </main>
     
    </div>
  );
}
