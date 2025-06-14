import { useState } from "react";
import { services } from "../data/services";
import ServiceItem from "./service-item";

export default function ServicesExpandableSection() {
  const category = services[0]; // For now, just "Front End"
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="md:w-1/2 w-full flex flex-col justify-between p-10 md:p-16">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest mb-4 block">Our services</span>
          <h2 className="text-6xl md:text-8xl font-extrabold uppercase leading-none">{category.category}</h2>
        </div>
        <span className="text-[120px] md:text-[180px] font-extrabold text-black/10 select-none">{category.number}</span>
      </div>
      {/* Right Column */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-10 md:p-16">
        <ul className="space-y-6">
          {category.items.map((item, idx) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              description={item.description}
              expanded={activeIndex === idx}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              idx={idx}
            />
          ))}
        </ul>
      </div>
    </section>
  );
} 