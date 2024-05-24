import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@repo/ui/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apps Dashboard",
  description: "Location of all practise apps I have built",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="dark">
          {children}
          
        </body>
    </html>
  );
}
