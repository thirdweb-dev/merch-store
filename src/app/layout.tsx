import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThirdwebProvider } from "thirdweb/react";
import Header from "@/components/custom/Header";
import "./globals.css";
import Footer from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thirdweb threads",
  description: "Merch for web3 warriors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} `}>
        <ThirdwebProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <div className="max-w-[1440px] mx-auto">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
