import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Diyetisyen Bengisu Tekirdaş | Beslenme ve Diyet Uzmanı",
  description: "Sağlıklı beslenme ve diyet danışmanlığı hizmetleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
