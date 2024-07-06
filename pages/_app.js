import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
   <div className="pt-4 px-16 bg-[rgba(250,250,250,1)]">
    <Navbar />
    <Component {...pageProps} />
    <Footer />
   </div>
  )
}
