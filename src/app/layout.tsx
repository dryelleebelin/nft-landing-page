import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketplace de NFTs | Descubra, Colecione e Negocie Ativos Digitais",
  description: "Marketplace de NFTs focado na criação, curadoria e negociação de ativos digitais, conectando criadores e colecionadores em um ecossistema seguro e descentralizado.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}