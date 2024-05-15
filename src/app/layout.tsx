import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { WeightProvider } from "@/contexts/WeightContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Cálculo peso ideal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">

      <body className={poppins.className}>
        <WeightProvider>
          <div className="min-h-screen w-screen">
            {children}
          </div>
        </WeightProvider>
      </body>
    </html>
  );
}
