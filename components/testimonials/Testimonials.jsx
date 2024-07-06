import Testimony from "./Testimony";

import { testimonies } from "@/data";

export default function Testimonials() {
  return (
    <section className="-mx-16 bg-base-blue p-16">
      <h4 className="font-bold text-center text-3xl">
        Our Customer&apos;s Review
      </h4>

      <div className="grid grid-cols-2 gap-8 mt-12">
        {testimonies.map((testimony) => {
          const { img, text, name, career } = testimony;

          return (
            <Testimony
              key={name + text}
              img={img}
              text={text}
              name={name}
              career={career}
            />
          );
        })}
      </div>
    </section>
  );
}
