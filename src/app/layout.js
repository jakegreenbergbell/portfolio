import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { JetBrains_Mono } from "next/font/google";
import "@fontsource/jetbrains-mono";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "portfolio of Jake Greenberg-Bell",
    description: "Jake Greenberg-Bell's portfolio website",
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
