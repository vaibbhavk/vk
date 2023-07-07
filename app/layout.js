import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VK – Student, Developer, Designer, Freelancer, Data Scientist.",
  description: "Student, Developer, Designer, Freelancer, Data Scientist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
