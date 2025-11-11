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

export default function RootLayout({ children }) {
    return (
        <html className={inter.className}>
            <head>
                <title>Jake Greenberg-Bell</title>
                <meta
                    name="Jake Greenberg-Bell"
                    content="Jake Greenberg-Bell's personal website"
                />
            </head>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
