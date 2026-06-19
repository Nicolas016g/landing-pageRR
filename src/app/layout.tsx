import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "R.R Packaging Parts | Nacionalização e reposição de peças para máquinas envasadoras",
  description:
    "R.R Packaging Parts: empresa séria, conservadora, forte e confiável. Peças e serviços para máquinas envasadoras horizontais e verticais. Stand Up Pouch, Stick Pack, Pillow Bag e mais.",
  keywords: [
    "peças envasadoras",
    "máquinas envasadoras",
    "R.R Packaging Parts",
    "embalagem flexível",
    "engenharia reversa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
