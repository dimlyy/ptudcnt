// src/app/layout.tsx
import React from "react";
import "@styles/globals.scss";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";

const RootLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>
        {/* Tạo root div để bao quanh toàn bộ nội dung */}
        <div id="root">
          <div className=" bg-[var(--background-color)]">
            <div>
              {/* <Nav /> */}
            </div>
            <div>
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
