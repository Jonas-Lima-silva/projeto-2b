import "./globals.css";
import Header from "@/componentes/";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  charset: 'UTF-8',
  author: 'Jonas lima',
  keywords: 'HTML, css, JavaScript, React, Next.js'

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       
        {children}
      </body>
    </html>
  );
}

rtrtrtrt