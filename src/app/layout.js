import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { JetBrains_Mono } from "next/font/google";
import "@fontsource/jetbrains-mono";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "portfolio of Jake Greenberg-Bell",
    description: "Jake Greenberg-Bell's portfolio website",
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
