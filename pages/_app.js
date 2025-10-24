import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full relative">
      <Navbar />
      <main className="relative z-0">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
