import "./globals.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Tlo",
  description: "Your Ultimate Wellness Dashboard",
  icons: {
    icon: "/favicon.png",
  },
};

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </head>
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
