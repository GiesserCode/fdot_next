import { blackOpsOne } from "@/app/ui/fonts";

export default function Page() {
  return (
    <section className="section-Center h-screen">
      <div className="border border-secondary p-10 rounded-2xl text-secondary text-2xl max-lg:w-10/12 max-sm:text-lg text-center">
        Das ist ein{" "}
        <a className={`${blackOpsOne.className} antialiased text-primary`}>
          Beispiel
        </a>
        . Hier wird ein{" "}
        <a className={`${blackOpsOne.className} antialiased text-primary`}>
          Link
        </a>{" "}
        benötigt.
      </div>
    </section>
  );
}
