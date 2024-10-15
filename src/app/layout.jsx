import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Gllitor",
  description: "",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600"], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
