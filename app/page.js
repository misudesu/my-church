import Image from "next/image";
import Hero from "./home/hero";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
       <Hero/>
      </main>
     
    </div>
  );
}
