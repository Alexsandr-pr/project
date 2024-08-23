import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tech Heim",
	description: "Join the digital revolution",
};

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={inter.className}>
					<Header/>
					{children}
				</body>
			</html>
		</StoreProvider>
	);
}
