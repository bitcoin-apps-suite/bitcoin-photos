import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Photos - Auto-NFT Your Images & Trade Shares",
  description: "Auto-NFT your photos, encrypt them, and trade image shares on Bitcoin. Earn $bPhotos tokens for your digital content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}