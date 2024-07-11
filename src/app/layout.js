import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import "@fontsource/jetbrains-mono";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jake Greenberg-Bell Portfolio",
    description: "Jake Greenberg-Bell's Portfolio website",
};

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
    return (
        <html className={JetBrainsMono.className}>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
