import ScrollSmotherProvider from "@/lib/gsap/scroll/ScrollSmotherProvider";
import Header from "./components/templates/Header";
import Main from "./components/templates/Home";

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollSmotherProvider>
        <Main />
      </ScrollSmotherProvider>
    </main>
  );
}
