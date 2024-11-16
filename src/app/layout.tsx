import "./globals.scss";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Tlo",
  description: "Your Ultimate Wellness Dashboard",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </head>
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
