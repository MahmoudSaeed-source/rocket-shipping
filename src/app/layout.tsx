import type { Metadata } from "next";
import { poppins, cairo } from "@/lib/fonts";
import "./globals.css";
import SideBar from "@/components/dashboard/sidebar";
import NavBar from "@/components/dashboard/navbar";
import {ThemeProvider}  from "@/components/dashboard/themeprovider";
export const metadata: Metadata = {
  title: "Rocket Shipping",
  description: "Shipping Your Products Faster",
};
// const Poppins = poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["300", "400", "500", "600", "700"],
// });

// const Cairo = cairo({
//   subsets: ["arabic"],
//   variable: "--font-cairo",
//   weight: ["400", "500", "600", "700"],
// });
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { local: string };
}>) {
  const isArabic = params?.local === "ar";

  return (
    <html
      lang={isArabic ? "ar" : "en"}
      dir={isArabic ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${poppins.variable} ${cairo.variable} ${
          isArabic ? "font-cairo" : "font-poppins"
        } bg-gray-50 text-gray-900 flex dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-64 h-screen border-r  flex flex-col overflow-hidden  p-0 m-0">
            <SideBar />
          </div>
          <main className="flex-1 h-screen overflow-y-auto bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text flex-col ">
            <div className="w-full h-24  justify-center  relative bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text border-2 border-b-gray-300">
              <NavBar />
            </div>
            <div className="w-full h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text p-4">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
