import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Typeform clone",
	description: "My Typeform clone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
