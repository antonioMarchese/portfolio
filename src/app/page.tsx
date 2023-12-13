import HomeSection from "@/components/home";
import NavBar from "@/components/navbar";
import SocialBar from "@/components/socialBar";
export default function Home() {
  return (
    <main className="relative flex flex-col px-5 py-4 gap-y-10 sm:px-20 sm:py-8 lg:px-40">
      <SocialBar />
      <NavBar />

      <HomeSection />
    </main>
  );
}
