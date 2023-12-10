import "./globals.css";
import type { Metadata } from "next";
import App from "./_app";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Gemmuel | Web Developer",
    description:
        "A Full stack web developer based on the Philippines. Let's collaborate and bring your ideas to life!",
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
                    <div className="relative font-space w-full min-h-screen flex flex-col items-center bg-primary text-primaryWhite ">
                        <Navbar />
                        <div className="w-full max-w-[100rem] p-6 lg:p-10 flex flex-col lg:flex-row lg:gap-[2rem] mb-6 lg:mb-0">
                            <Sidebar />
                            {children}
                        </div>
                    </div>
                </App>
            </body>
        </html>
    );
}
