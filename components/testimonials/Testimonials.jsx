import React, { useEffect, useState } from "react";

import Testimony from "./Testimony";

import { testimonies } from "@/data";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformStyle, setTransformStyle] = useState("");

  const styles = [
    "-translate-x-[100%]",
    "-translate-x-[200%]",
    "-translate-x-[300%]",
    "lg:-translate-x-[40%]",
    "lg:-translate-x-[80%]",
    "lg:-translate-x-[120%]",
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, testimonies.length - 1),
    );
  };

  useEffect(() => {
    setTransformStyle(
      `-translate-x-[${currentIndex * 100}%] lg:-translate-x-[${currentIndex * 40}%]`,
    );
  }, [currentIndex]);

  return (
    <section className="xl:-mx-16 md:-mx-8 -mx-4 bg-base-blue md:py-16 py-10">
      <h4 className="font-bold text-center md:text-3xl text-2xl">
        Our Customer&apos;s Review
      </h4>

      <div className="relative overflow-hidden md:mt-12 mt-4">
        <div
          className={`flex transition-transform duration-300 ${transformStyle}`}
        >
          {testimonies.map((testimony) => {
            const { img, text, name, career } = testimony;

            return (
              <div
                key={name + text}
                className={`lg:w-3/5 w-full h-full flex-shrink-0 p-4`}
                style={{ transition: "transform 0.3s" }}
              >
                <Testimony img={img} text={text} name={name} career={career} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-center mt-8">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-white h-12 w-12 rounded-full shadow-md hv-center ${
              currentIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <RxCaretLeft className="text-3xl text-primary" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === testimonies.length - 1}
            className={`bg-white h-12 w-12 rounded-full shadow-md hv-center ${
              currentIndex === testimonies.length - 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <RxCaretRight className="text-3xl text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
