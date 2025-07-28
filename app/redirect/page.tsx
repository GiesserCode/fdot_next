"use client"; // Add this if using app directory

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // use this in app directory

export default function RedirectPage() {
  const router = useRouter();
  const [dots, setDots] = useState("");

  useEffect(() => {
    router.push("https://infofdot.wixstudio.com/celine-50");
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 100);
    return () => clearInterval(interval);
  }, [router]);

  return (
    <section className="section-Center h-screen">
      <div className="flex gap-5">
        <a className="text-white">Redirecting{dots}</a>
        <a>Please wait a moment.</a>
      </div>
    </section>
  );
}
