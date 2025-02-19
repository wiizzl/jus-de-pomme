import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Loading } from "@/components/loading";

import { config } from "@/config";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: config.title.toUpperCase(),
        template: `%s - ${config.title.toUpperCase()}`,
    },
    description: config.description,
    alternates: {
        canonical: "/",
    },
    keywords: config.keywords,
    authors: [{ name: "Pierre Houllière", url: "https://pierreh.vercel.app" }],
    creator: "Pierre Houllière",
    metadataBase: new URL("https://jus-de-raisin.vercel.app"),
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="fr">
            <body className={`${inter.className} antialiased select-none`}>
                <Loading />
                {props.children}
                <Analytics />
            </body>
        </html>
    );
}
