import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
   <div className="pt-4 px-16">
    <Navbar />
    <Component {...pageProps} />
   </div>
  )
}
