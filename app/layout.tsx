import { onest } from "@/app/ui/fonts";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fdot lassen Sie sich Ihre persönliche Webseite erstellen",
  description:
    "Ihre Webseite, gestaltet nach ihren Wünschen. Lassen Sie uns gemeinsam Ihre Vorstellungen in die Realität umsetzen. Ihre digitale Identität, auf dem neusten Stand der Technologie. Hinterlassen Sie so einen bleibenden Eindruck.",
  openGraph: {
    title: "Fdot lassen Sie sich Ihre persönliche Webseite erstellen",
    description:
      "Ihre Webseite, gestaltet nach ihren Wünschen. Lassen Sie uns gemeinsam Ihre Vorstellungen in die Realität umsetzen. Ihre digitale Identität, auf dem neusten Stand der Technologie. Hinterlassen Sie so einen bleibenden Eindruck.",
    url: "https://fdot.ch",
    siteName: "Fdot",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased bg-darkBg text-primary`}>
        {children}
      </body>
    </html>
  );
}
