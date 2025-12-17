import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFTs Marketplace | Descubra, Colecione e Venda NFTs",
  description: "Plataforma moderna de NFTs para criar, descobrir, colecionar e negociar ativos digitais com segurança e performance.",
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
      </body>
    </html>
  );
}
