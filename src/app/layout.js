import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { JetBrains_Mono } from "next/font/google";
import "@fontsource/jetbrains-mono";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Jake Greenberg-Bell",
    description: "Jake Greenberg-Bell's personal website",
};

export default function RootLayout({ children }) {
    return (
        <html className={inter.className}>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
