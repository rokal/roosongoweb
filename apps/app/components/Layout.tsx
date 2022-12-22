import Head from "next/head";
import { Header } from "./layout/Header";
import Footer from "./layout/Footer";
import { ReactNode } from "react";

interface IProps {
  title: string;
  hideHeader?: boolean;
  children: ReactNode;
}

export default function Layout({ children, title, hideHeader }: IProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </div>
  );
}
