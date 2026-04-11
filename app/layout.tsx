import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmokeLayoutShell } from "@/components/smoke-layout-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Vipin — VPN с умной маршрутизацией для .ru",
  description:
    "Доступ к заблокированным ресурсам без отключения VPN на российских сайтах. Пробный период 10 дней, далее 150 ₽/мес.",
  openGraph: {
    title: "Vipin — VPN",
    description:
      "Пользуйтесь в интернете всем, что вам нравится. Трафик на .ru по умолчанию без VPN.",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-transparent flex flex-col">
        <SmokeLayoutShell smokeColor="#8A2BE2">{children}</SmokeLayoutShell>
      </body>
    </html>
  );
}
