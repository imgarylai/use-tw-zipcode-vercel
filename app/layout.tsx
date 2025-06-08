import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "台灣郵遞區號查詢 | use-tw-zipcode Demo",
  description:
    "使用 use-tw-zipcode React Hook 來查詢台灣郵遞區號，提供完整的縣市和鄉鎮市區選擇功能。",
  keywords:
    "台灣郵遞區號, 郵遞區號查詢, React Hook, use-tw-zipcode, 縣市選擇, 鄉鎮市區",
  authors: [{ name: "Gary Lai", url: "https://github.com/imgarylai" }],
  creator: "Gary Lai",
  publisher: "Gary Lai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://use-tw-zipcode.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "台灣郵遞區號查詢 | use-tw-zipcode Demo",
    description:
      "使用 use-tw-zipcode React Hook 來查詢台灣郵遞區號，提供完整的縣市和鄉鎮市區選擇功能。",
    url: "https://use-tw-zipcode.vercel.app",
    siteName: "use-tw-zipcode Demo",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "use-tw-zipcode Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "台灣郵遞區號查詢 | use-tw-zipcode Demo",
    description:
      "使用 use-tw-zipcode React Hook 來查詢台灣郵遞區號，提供完整的縣市和鄉鎮市區選擇功能。",
    creator: "@imgarylai",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
