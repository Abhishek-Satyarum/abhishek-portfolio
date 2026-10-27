import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Satyarum | AI & Data Science",
  description:
    "Portfolio of Abhishek Satyarum — AI & Data Science student building practical AI, GenAI and full-stack solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}