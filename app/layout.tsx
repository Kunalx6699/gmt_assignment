import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lilac Template - Therapy for Adults in Minneapolis, MN",
  description: "Professional therapy services for adults focusing on self-esteem, relationships, and burnout. Creating a safe space for healing and growth.",
  keywords: ["therapy", "counseling", "mental health", "Minneapolis", "psychotherapy", "self-esteem", "relationships"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
