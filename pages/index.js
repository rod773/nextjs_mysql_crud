import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">NextJs MySql Crud</h1>
    </div>
  );
}
