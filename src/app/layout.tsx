import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--fonts-nunito",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Christmas Gift",
  description: "Collect gifts, protect Christmas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("dark", nunito.variable)} lang="ru">
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
