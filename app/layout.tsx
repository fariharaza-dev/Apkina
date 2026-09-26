import type { Metadata } from "next";
import {CartProvider} from "@/components/cart";
import "./globals.css";
import "./site.css";
import "./store.css";

export const metadata: Metadata = {
  title: "Apkina — For Pakistani Creators",
  description: "Professional lighting, camera supports, and accessories for Pakistan’s creative community. Find the missing piece for your next production.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
