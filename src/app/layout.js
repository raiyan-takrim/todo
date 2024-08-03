import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TODO",
  description: "A TODO application made by Next Js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
