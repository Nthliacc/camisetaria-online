import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata = {
  title: "Camiseteria Online",
  description: "Compre camisetas online com a melhor qualidade e preço do mercado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="bg-slate-200 flex flex-col justify-center items-center h-screen sm:h-full">
          <h2 className="font-extralight text-4xl mb-2">⇢ Camiseteria Online</h2>
          {children}
        </div>
      </body>
    </html>
  );
}
