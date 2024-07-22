import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { GoogleTagManager } from "@next/third-parties/google";
import GlobalProviders from "@/context/GlobalProviders";

export const metadata: Metadata = {
  title: {
    default: "Gemmuel | Web Developer",
    template: "%s | Gemmuel Dela Peña",
  },
  description:
    "A Web developer based on the Philippines. Let's collaborate and bring your ideas to life!",
  // icons: {
  //   icon: "/bulletlogo.png",
  // },
  keywords: [
    "gemmuel",
    "Gemmuel Dela Pena",
    "bulletonli",
    "bullet",
    "gem",
    "programmer",
    "developer",
    "software",
    "human software engineer",
    "student",
    "student developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <GlobalProviders>
          <div className="relative font-space w-full min-h-screen flex flex-col items-center bg-primary text-primaryWhite ">
            <Navbar />
            <div className="w-full max-w-[100rem] p-6 lg:p-10 flex flex-col xl:flex-row xl:gap-[2rem] mb-6 lg:mb-0">
              <Sidebar />
              {children}
            </div>
          </div>
        </GlobalProviders>
      </body>
    </html>
  );
}
