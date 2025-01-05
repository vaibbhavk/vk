import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VK – Technical Manager at Banrboard | Co-Founder at Bill Keeps | Data Scientist",
  description: "Technical Manager at Banrboard | Co-Founder at Bill Keeps | Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
