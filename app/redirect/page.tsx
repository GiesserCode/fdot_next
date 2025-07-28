import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://infofdot.wixstudio.com/celine-50");
  }, []);

  return null;
}
