import Form from "@/Components/form";
import Footer from "@/Components/home/footer";
import Header from "@/Components/home/header";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-between p-4 md:p-20 ">
      <Header />
      <main className="w-full"><Form /></main>
      <Footer />
    </div>
  );
}
