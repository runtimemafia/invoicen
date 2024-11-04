import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";

import "./styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Invoicen",
	description:
		"Invoicen is a simple invoice generator for freelancers and small businesses. It is a self hostable web application that can be used to generate invoices and download PDFs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/assets/logos/logo-icon-light.svg"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="icon"
					href="/assets/logos/logo-icon-dark.svg"
					media="(prefers-color-scheme: dark)"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white bg-white text-black flex items-center justify-center`}
			>
				<div className="max-w-[1440px] w-full">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar />
						{children}
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
