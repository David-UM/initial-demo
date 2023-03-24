import { Inter } from "next/font/google";

import Link from "next/link";

import MainLayout from "../components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainLayout>
        <p>This is Home</p>
        <h1>
          Go to <Link href="/about">About</Link>
        </h1>
      </MainLayout>
    </>
  );
}
