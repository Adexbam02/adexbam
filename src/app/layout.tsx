import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Social } from "@/components/Social";
// import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './fonts/Rubik.ttf',
  display: "auto"
})

// const poppins = localFont({
//   src: "./fonts/Poppins.woff",
//   variable: "--font-poppins",
//   weight: "100 900",
// })

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Adexbam",
  description: "the web dev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className}  antialiased`}
      >
        <Navbar />
        {children}
        <Social />
      </body>
    </html>
  );
}
