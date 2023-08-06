import Head from "next/head";
import { Navbar } from "./ui/Navbar/Navbar";
import { Footer } from "./ui/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mailgo</title>
        <meta
          name="description"
          content="Gain control of your business's growth with Mailgo's comprehensive marketing, automation, and email marketing platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
