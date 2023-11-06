import "./globals.css";
import type { Metadata } from "next";
import App from "./_app";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Gemmuel",
    description: "Gemmuel Dela Peña's Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <App>
                    <div className="relative font-space w-full min-h-screen flex flex-col items-center bg-[#0D1117] text-[#E7E7E7]">
                        <Navbar />
                        <div className="lg:w-[90vw] 2xl:w-[70vw] flex flex-col lg:flex-row lg:gap-[1rem]">
                            <Sidebar />
                            {children}
                        </div>
                    </div>
                </App>
            </body>
        </html>
    );
}
