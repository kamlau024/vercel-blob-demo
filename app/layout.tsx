// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Vercel Blob Demo",
  description: "Prototype for file upload, listing, and download using Vercel Blob Storage",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="max-w-3xl mx-auto py-10 px-6">{children}</main>
      </body>
    </html>
  );
}