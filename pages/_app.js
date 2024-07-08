import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-4 xl:px-16 md:px-8 px-4 bg-[rgba(250,250,250,1)]">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
