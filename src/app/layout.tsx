import "./globals.scss";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LifeTrack Pro",
  description: "Your Ultimate Wellness Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
