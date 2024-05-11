import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import ThemeModeSwitch from "./Components/ThemeModeSwitch";
import ThemeContextProvider from "@/Context/Theme";
import ActiveSectionContextProvider from "@/Context/ActiveLinkContext";

import dynamic from "next/dynamic";
import ErrorBoundary from "./Components/ErrorBoundary";

const Footer = dynamic(() => import("./Components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varinder Portfolio",
  description: "I'm software engineer.",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-light-background dark:bg-dark-background pt-28 sm:pt-36`}
      >
        <div className="bg-[#efebeb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-dark-background"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ErrorBoundary>
              <Header />
              <div className="container mx-auto flex justify-center">
                {children}
              </div>
              <Footer />
              <ThemeModeSwitch />
            </ErrorBoundary>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
