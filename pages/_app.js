import React, { createContext, useReducer } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { reducer, initialState } from "@/reducer";

export const Context = createContext();

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="xl:px-16 md:px-8 px-4 bg-[rgba(250,250,250,1)]">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Context.Provider>
  );
}
