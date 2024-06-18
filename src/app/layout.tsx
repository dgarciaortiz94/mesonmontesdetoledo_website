import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from '@/app/utils/BootstrapClient.js';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/4f81316a08.js"></script>

        <BootstrapClient />
      </head>
      <body>
        <div className="mode-button"><i aria-hidden className="fa-solid fa-sun fa-lg"></i></div>

        <section className="container">{children}</section>

        <div className="navbar-wrapper">
          <div className="navbar">
            <a href=""><div className="navbar__button"><i aria-hidden className="fa-solid fa-utensils"></i></div></a>
            <a href=""><div className="navbar__button"><i aria-hidden className="fa-solid fa-list"></i></div></a>
            <a href=""><div className="navbar__button"><i aria-hidden className="fa-solid fa-drumstick-bite"></i></div></a>
            <div className="navbar__button focus"><i aria-hidden className="fa-solid fa-house"></i></div>
            <div className="navbar__button"><i aria-hidden className="fa-solid fa-wheat-awn-circle-exclamation"></i></div>
            <div className="navbar__button"><i aria-hidden className="fa-regular fa-comment"></i></div>
            <div className="navbar__button"><i aria-hidden className="fa-solid fa-clock"></i></div>
          </div>
        </div>
      </body>
    </html>
  );
}
