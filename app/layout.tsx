import ActiveSectionContextProvider from "@/Context/ActiveLinkContext";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} h-screen bg-light-background dark:bg-dark-background pt-28 sm:pt-36`}
      >
        <ThemeProvider attribute="class">
          <ActiveSectionContextProvider>
            <Preloader />
            <ErrorBoundary>
              <Header />
              <div className="container mx-auto flex justify-center">
                {children}
              </div>
              <Footer />
            </ErrorBoundary>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
