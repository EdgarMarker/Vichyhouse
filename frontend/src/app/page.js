import ScrollSmotherProvider from "@/lib/gsap/scroll/ScrollSmotherProvider";
import Header from "./components/templates/Header";
import Main from "./components/templates/Home";
import FooterSection from "./components/sections/footer-section/FooterSection";

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollSmotherProvider>
        <Main />
        <FooterSection/>
      </ScrollSmotherProvider>
    </main>
  );
}
