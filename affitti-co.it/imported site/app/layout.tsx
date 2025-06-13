import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import MaintenancePopup from "./components/MaintenancePopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affitti & Co",
  description: "La tua soluzione per l'affitto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <MaintenancePopup />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
