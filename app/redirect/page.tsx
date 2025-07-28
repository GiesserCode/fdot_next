"use client"; // Add this if using app directory

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // use this in app directory

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://infofdot.wixstudio.com/celine-50");
  }, [router]);

  return (
    <section className="section-Center h-screen">
      <a className="text-white">Redirecting... </a>
      <a>Please wait a moment.</a>
    </section>
  );
}
