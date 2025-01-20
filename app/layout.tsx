import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./ui/globals.css";
import { MenuHamburguer } from "./MenuHamburger";

export const metadata: Metadata = {
  title: "Oozenext",
  description: "Creating your next step",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
