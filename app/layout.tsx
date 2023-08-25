import "./globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import AnalyticsWrapper from "components/analytics";
import localFont from "next/font/local";
import Navbar from "components/navbar";

const labrada = localFont({
	src: "../public/fonts/ZenAntique-Regular.ttf",
	weight: "400",
	variable: "--font-labrada",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Home",
		template: "%s | Kevyn Gonçalves",
	},
	description: "Developer, gamer and cook.",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={clsx("text-black bg-gray-900 dark:text-white", labrada.variable)}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="antialiased flex flex-col items-center justify-center">
				<Navbar />
				<main className="flex-auto flex flex-col md:mx-auto lg:mx-0">
					{children}
					<AnalyticsWrapper />
				</main>
			</body>
		</html>
	);
}
