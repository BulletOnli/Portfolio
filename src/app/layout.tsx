import "../styles/globals.css";
import type { Metadata } from "next";
import App from "./_app";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Gemmuel | Web Developer",
    template: "%s | Gemmuel",
  },
  description:
    "A Front-end web developer based on the Philippines. Let's collaborate and bring your ideas to life!",
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
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_SITE_VERIFICATION}
        />
      </head>
      <body>
        <App>
          <div className="relative font-space w-full min-h-screen flex flex-col items-center bg-primary text-primaryWhite ">
            <Navbar />
            <div className="w-full max-w-[100rem] p-6 lg:p-10 flex flex-col xl:flex-row xl:gap-[2rem] mb-6 lg:mb-0">
              <Sidebar />
              {children}
            </div>
          </div>
        </App>
      </body>
    </html>
  );
}
