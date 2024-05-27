import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './colors.scss'
import "./globals.scss";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next js",
  description: "Next js Design",
};

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>

        {/* layout when logged out need to add condition */}

          {/* <AuthLayout data={children} /> */}

        {/* layout when loged in */}
        
          <Layout data={children} />
        
        {/* default layout */}

           {/* {children} */}

      </body>
    </html>
  );

}
