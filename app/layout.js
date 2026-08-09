import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Vaibhav Kesharwani – Data Scientist | Full Stack Web and Mobile App Developer | Freelancer",
  description:
    "I offer services in Data Science, Project Management, and Full Stack Web & Mobile App Development. Let’s build something great together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Vaibhav Kesharwani"
        />
        <meta
          property="og:description"
          content="Machine Learning Engineer and Full-Stack Developer"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1P-LHsCzEM81fVm4V9lKWy2CU90p7KPPT"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
