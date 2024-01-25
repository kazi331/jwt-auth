import Image from "next/image";
import Footer from "./footer";
import Form from "./form";
import Header from "./header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-20 ">
      <div className="w-full absolute flex place-items-center justify-center content-center min-h-screen before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] -z-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Header />
      <main className="w-full ">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
