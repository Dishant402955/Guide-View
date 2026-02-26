/**
 * Copyright 2026 Dishant and Meet
 *
 * Licensed under the Apache License, Version 2.0.
 * See LICENSE file in the project root for full license information.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`dark ${inter.variable}`}
			suppressHydrationWarning
		>
			<body className={``}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}
					storageKey="key"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
