import { values } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ValuesStrip() {
  return (
    <section className="bg-purple py-10 sm:py-12 lg:py-[60px]">
      <div className="site-wrap grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.eyebrow}>
            <Eyebrow className="mb-2 text-gold">{value.eyebrow}</Eyebrow>
            <p className="text-[15px] text-white opacity-90">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
