import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyam Mishra | AI/ML Engineer Portfolio",
  description:
    "Professional portfolio of Satyam Mishra - AI/ML Engineer specializing in Generative AI, RAG systems, and MLOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
