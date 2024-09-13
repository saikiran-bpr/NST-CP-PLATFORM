"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className=" bg-black text-white">
        {path === "/" && <Header/>}
        {children}
      </body>
    </html>
  );
}
