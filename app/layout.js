import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextProvider from "@/providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Assignment",
	description: "Responsive web app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning>
				<ContextProvider>
					<Header />
					{children}
				</ContextProvider>
			</body>
		</html>
	);
}
