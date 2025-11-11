import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const garamond = EB_Garamond({
    subsets: ["latin"],
    variable: "--font-garamond",
});

export const metadata = {
    title: "Jake Greenberg-Bell",
    description: "Jake Greenberg-Bell's personal website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
