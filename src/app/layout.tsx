import "./globals.css";
import type { Metadata } from "next";
import App from "./_app";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Gemmuel",
    description: "Gemmuel Dela Peña's Portfolio",
    icons: {
        icon: "/bulletlogo.png",
    },
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
                        <div className="w-full max-w-[88rem] p-6 lg:p-10 flex flex-col lg:flex-row lg:gap-[2rem]">
                            <Sidebar />
                            {children}
                        </div>
                    </div>
                </App>
            </body>
        </html>
    );
}
