// src/app/layout.js
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
        <div className="md:ml-[var(--sticky-nav)]">
          <div>
            <Nav />
          </div>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;