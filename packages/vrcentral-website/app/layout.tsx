import "./global.css";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VRCentral",
  description: "The VRChat community’s package registry",
};

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={"en"} className={"h-full"}>
      <Head>
        <link
          rel={"apple-touch-icon"}
          sizes={"180x180"}
          href={"/apple-touch-icon.png"}
        ></link>
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"32x32"}
          href={"/favicon-32x32.png"}
        ></link>
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"16x16"}
          href={"/favicon-16x16.png"}
        ></link>
        <link rel={"manifest"} href={"/site.webmanifest"}></link>
      </Head>
      <body
        className={clsx("h-full text-zinc-200 bg-slate-900", inter.className)}
      >
        <Providers>
          <Navbar bottomBorder={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
