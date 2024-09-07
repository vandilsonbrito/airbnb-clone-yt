import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
