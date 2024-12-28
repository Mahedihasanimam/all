import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";

// Define a local font


export const metadata = {
  title: "Circooles",
  icons: {
    icon: "/favicon.ico",
  },
};

// Fetch locale and messages on the server side
export default async function RootLayout({ children }) {
  let locale, messages;

  try {
    locale = getLocale(); // Retrieve the user's locale
    messages = await getMessages(locale); // Fetch messages based on locale
  } catch (error) {
    console.error("Error fetching locale or messages:", error);
    locale = "en"; // Default locale
    messages = {}; // Default messages (or load fallback)
  }

  return (

      <section className={` antialiased font-Inter`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </section>
  
  );
}
