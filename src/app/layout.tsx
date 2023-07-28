import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jerry Yan Krismanto",
  description: "My Personal Webiste, Welcome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-neutral-900 mx-8 lg:mx-96 text-white"
        }>
        {children}
      </body>
    </html>
  );
}
