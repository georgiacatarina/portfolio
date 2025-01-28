import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio Georgia Catarina",
  description: "Site de alguns trabalhos desenvolvidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} `}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Georgia Dev</h1>
          <nav className={styles.nav}>
            <a
              href="mailto:georgiacatarinaalvespinto@gmail.com"
              target="_blank"
              title="Me envie um email"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/georgia-catarina/"
              target="_blank"
              title="Meu Linkedin, abre em nova janela"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/georgiacatarina/"
              target="_blank"
              title="Meu Github, abre em nova janela"
            >
              Github
            </a>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <p className={styles.gradientText}>Georgia Dev © 2025</p>
        </footer>
      </body>
    </html>
  );
}
