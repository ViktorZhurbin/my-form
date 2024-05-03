import type { Metadata } from "next";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@radix-ui/themes/styles.css";
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
		<html lang="en" suppressHydrationWarning>
			<body>
				<NextThemesProvider attribute="class">
					<RadixTheme>{children}</RadixTheme>
				</NextThemesProvider>
			</body>
		</html>
	);
}
