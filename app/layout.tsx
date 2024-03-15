import {onest} from "@/app/ui/fonts";
import './globals.css'
import {Analytics} from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased bg-darkBg text-primary`}>{children}<Analytics /></body>
    </html>
  )
}
