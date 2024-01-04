import type { Metadata } from 'next'
import {blackOpsOne, onest} from "@/app/ui/fonts";
import './globals.css'
import {black} from "next/dist/lib/picocolors";

export const metadata: Metadata = {
  title: 'Fdot',
  description: "Let's create Websites!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased bg-darkBg text-primary`}>{children}</body>
    </html>
  )
}
