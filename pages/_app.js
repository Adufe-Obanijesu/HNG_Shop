import React, { createContext, useEffect, useReducer, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { reducer, initialState } from "@/reducer";
import { useRouter } from "next/router";

export const Context = createContext();

export default function App({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    // Clean up event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  useEffect(() => {
    const storedCart = localStorage.getItem("hng_arries_cart");
    if (storedCart) {
      dispatch({ type: "INITIALIZE_CART", payload: JSON.parse(storedCart) });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="xl:px-16 md:px-8 px-4 bg-[rgba(250,250,250,1)]">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {loading && <Loader />}
      </div>
    </Context.Provider>
  );
}
